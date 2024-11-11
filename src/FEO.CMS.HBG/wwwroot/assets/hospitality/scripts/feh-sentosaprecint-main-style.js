/*
 * jQuery Templating Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function( jQuery, undefined ){ 
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem } );
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			// This appears to be a bug in the appendTo, etc. implementation
			// it should be doing .call() instead of .apply(). See #6227
			if ( args[0] && args[0].nodeType ) {
				var dmArgs = jQuery.makeArray( arguments ), argsLength = args.length, i = 0, tmplItem;
				while ( i < argsLength && !(tmplItem = jQuery.data( args[i++], "tmplItem" ))) {}
				if ( argsLength > 1 ) {
					dmArgs[0] = [jQuery.makeArray( args )];
				}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ? 
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl )
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ): 
				(jQuery.template[name] || 
					// If not in map, treat as a selector. (If integrated with core, use quickExpr.exec) 
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null; 
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function). 
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(_,$1,$2);_=[];",
				close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation. 
				open: "if($notnull_1){_.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){_.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array 
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ? 
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) : 
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}. 
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			"var $=jQuery,call,_=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){_.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Template command not found: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target ); 
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + parens : ("(" + target + ").call($item" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" + 
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs ?
								fnargs.replace( /\s*([^\(]+)\s*(\((.*?)\))?/g, function( all, name, parens, params ) {
									params = params ? ("," + params + ")") : (parens ? ")" : "");
									return params ? ("(" + name + ").call($item" + params) : all;
								})
								: (def.$2||"")
							) +
						"_.push('";
				}) +
			"');}return _;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content. 
		options._wrap = build( options, true, 
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode], null, true );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element. 
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) { 
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] = 
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content, 
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}


	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );
/*!
 * Clamp.js 0.5.1
 *
 * Copyright 2011-2013, Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

(function() {
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    function clamp(element, options) {
        options = options || {};

        var self = this,
            win = window,
            opt = {
                clamp: options.clamp || 2,
                useNativeClamp: typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                animate: options.animate || false,
                truncationChar: options.truncationChar || '…',
                truncationHTML: options.truncationHTML
            },

            sty = element.style,
            originalText = element.innerHTML,

            supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
            clampValue = opt.clamp,
            isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
            truncationHTMLContainer;

        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


        // UTILITY FUNCTIONS __________________________________________________________

        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function() {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight,
                lineHeight = getLineHeight(element);

            return Math.max(Math.floor(availHeight / lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
            }
            return parseInt(lh);
        }


        // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
        var splitOnChars = opt.splitOnChars.slice(0),
            splitChar = splitOnChars[0],
            chunks,
            lastChunk;

        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        function getLastChild(elem) {
            //Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                return getLastChild(Array.prototype.slice.call(elem.children).pop());
            }
            //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue == '' || elem.lastChild.nodeValue == opt.truncationChar) {
                elem.lastChild.parentNode.removeChild(elem.lastChild);
                return getLastChild(element);
            }
            //This is the last child we want, return it
            else {
                return elem.lastChild;
            }
        }

        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        function truncate(target, maxHeight) {
            if (!maxHeight) { return; }

            /**
             * Resets global variables.
             */
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }

            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

            //Grab the next chunks
            if (!chunks) {
                //If there are more characters to try, grab the next one
                if (splitOnChars.length > 0) {
                    splitChar = splitOnChars.shift();
                }
                //No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }

                chunks = nodeValue.split(splitChar);
            }

            //If there are chunks left to remove, remove the last one and see if
            // the nodeValue fits.
            if (chunks.length > 1) {
                // console.log('chunks', chunks);
                lastChunk = chunks.pop();
                // console.log('lastChunk', lastChunk);
                applyEllipsis(target, chunks.join(splitChar));
            }
            //No more chunks can be removed using this character
            else {
                chunks = null;
            }

            //Insert the custom HTML before the truncation character
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
            }

            //Search produced valid chunks
            if (chunks) {
                //It fits
                if (element.clientHeight <= maxHeight) {
                    //There's still more characters to try splitting on, not quite done yet
                    if (splitOnChars.length >= 0 && splitChar != '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                    //Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
            //No valid chunks produced
            else {
                //No valid chunks even when splitting by letter, time to move
                //on to the next node
                if (splitChar == '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);

                    reset();
                }
            }

            //If you get here it means still too big, let's keep truncating
            if (opt.animate) {
                setTimeout(function() {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            } else {
                return truncate(target, maxHeight);
            }
        }

        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }


        // CONSTRUCTOR ________________________________________________________________

        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        } else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }

        var clampedText;

        if (supportsNativeClamp && opt.useNativeClamp && $(window).width()<=1024) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        } else {
            var height = getMaxHeight(clampValue);
            if (height < element.clientHeight) {
                clampedText = truncate(getLastChild(element), height);
            }
        }

        return {
            'original': originalText,
            'clamped': clampedText
        }
    }

    window.$clamp = clamp;
})();
$(document).ready(function() {

    if ($('.header_ribbon').length) {
        $('.promoData_toggler').each(function() {
            if ($(this).text().trim().length === 0) {
                $(this).css('display', 'none');
            }
        });
    }

    if ($("input[name=map-popup-details]").length > 0) {
        var mapdetailobject = {};
        mapdetailobject.data = JSON.parse($("input[name=map-popup-details]").val());
        console.log(mapdetailobject);
        $(".imagemap-area span").on("click", function() {
            $("#map-modal .modal-body").html("");
            var index = parseInt($(this).data("index"));

            $("#map-modal-details-template").tmpl(mapdetailobject).appendTo("#map-modal .modal-body");
            $("body").addClass("grey-bg");
            if(mapdetailobject.data[index].Legend!=null && mapdetailobject.data[index].Legend!="" && mapdetailobject.data[index].Legend!="undefined"){
                $("#map-modal .modal-title").html(mapdetailobject.data[index].Legend.Title);
            }
            
            $('#map-modal-carousel').carousel(index);

            $("#map-modal-carousel").swiperight(function() {
                $(this).carousel('prev');
            });
            $("#map-modal-carousel").swipeleft(function() {
                $(this).carousel('next');
            });

            setTimeout(function() {
                if ($("#map-modal-carousel .item.active").prev().length > 0) {
                    var prevhtml = $("#map-modal-carousel .item.active").prev().find(".modal-heading").html();
                } else {
                    var prevhtml = $("#map-modal-carousel .item:last").find(".modal-heading").html();
                }

                if ($("#map-modal-carousel .item.active").next().length > 0) {
                    var nexthtml = $("#map-modal-carousel .item.active").next().find(".modal-heading").html();
                } else {
                    var nexthtml = $("#map-modal-carousel .item:first").find(".modal-heading").html();
                }
                changeindex(prevhtml, nexthtml);
            }, 500)

            $("#map-modal").modal("show");
            bindeventscarouselmap();

        })

        $('#map-modal').on('hidden.bs.modal', function() {
            $("body").removeClass("grey-bg");
        })

        function bindeventscarouselmap() {
            $('#map-modal-carousel').on('slid.bs.carousel', function(e) {
                console.log(e);
                if ($("#map-modal-carousel .item.active").prev().length > 0) {
                    var prevhtml = $("#map-modal-carousel .item.active").prev().find(".modal-heading").html();
                } else {
                    var prevhtml = $("#map-modal-carousel .item:last").find(".modal-heading").html();
                }

                if ($("#map-modal-carousel .item.active").next().length > 0) {
                    var nexthtml = $("#map-modal-carousel .item.active").next().find(".modal-heading").html();
                } else {
                    var nexthtml = $("#map-modal-carousel .item:first").find(".modal-heading").html();
                }
                var index=$("#map-modal-carousel .item.active").index();
                if(mapdetailobject.data[index].Legend!=null && mapdetailobject.data[index].Legend!="" && mapdetailobject.data[index].Legend!="undefined"){
                 $("#map-modal .modal-title").html(mapdetailobject.data[index].Legend.Title);
                }
                changeindex(prevhtml, nexthtml);

            })
        }

        function changeindex(prevhtml, nexthtml) {

            $("#map-modal .left.carousel-control .pointofinterest").html(prevhtml);
            $("#map-modal .right.carousel-control .pointofinterest").html(nexthtml);
        }
    }

    function checkforMobileDevice(){
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var data_href_mobile = $(".facebook-app-embed-link").attr("data-href-mobile");
            $(".facebook-app-embed-link").attr("href",data_href_mobile);
        }else{
            var data_href_desktop = $(".facebook-app-embed-link").attr("data-href-desktop");
            $(".facebook-app-embed-link").attr("href",data_href_desktop);
        }
    }
    checkforMobileDevice();

   var logoLength = $('.brands-carousel li').length;
    var brandscarousel = $('.brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
         rewind:false,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2),
                 pullDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3),
                 pullDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4),
                 pullDrag: (logoLength > 4)
            }
        }
    });
    $(".brands-carousel").find(".owl-nav .owl-prev").hide();
    brandscarousel.on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index  + event.page.size;

        if (event.item.index == 0) {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").hide();
        } else if (item == items) {
            $(this).find(".owl-nav .owl-next").hide();
            $(this).find(".owl-nav .owl-prev").show();
        } else {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").show();
        }
    });


    var logoLength = $('.partner-brands-carousel li').length;
    var partnerbrandscarousel = $('.partner-brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
         rewind:false,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2),
                 pullDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3),
                 pullDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4),
                 pullDrag: (logoLength > 4)
            }
        }
    });
    $(".partner-brands-carousel").find(".owl-nav .owl-prev").hide();
    partnerbrandscarousel.on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index  + event.page.size;

        if (event.item.index == 0) {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").hide();
        } else if (item >= items) {
            $(this).find(".owl-nav .owl-next").hide();
            $(this).find(".owl-nav .owl-prev").show();
        } else {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").show();
        }
    });

    var logoLength = $('.affiliate-brands-carousel li').length;
    var affiliatebrandscarousel = $('.affiliate-brands-carousel').owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 4,
         rewind:false,
        responsive: {
            0: {
                items: 2,
                nav: (logoLength > 2),
                mouseDrag: (logoLength > 2),
                touchDrag: (logoLength > 2),
                 pullDrag: (logoLength > 2)
            },
            600: {
                items: 3,
                nav: (logoLength > 3),
                mouseDrag: (logoLength > 3),
                touchDrag: (logoLength > 3),
                 pullDrag: (logoLength > 3)
            },
            1000: {
                items: 4,
                nav: (logoLength > 4),
                 mouseDrag: (logoLength > 4),
                touchDrag: (logoLength > 4),
                 pullDrag: (logoLength > 4)
            }
        }
    });
     $(".affiliate-brands-carousel").find(".owl-nav .owl-prev").hide();
    affiliatebrandscarousel.on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index  + event.page.size;

        if (event.item.index == 0) {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").hide();
        } else if (item >= items) {
            $(this).find(".owl-nav .owl-next").hide();
            $(this).find(".owl-nav .owl-prev").show();
        } else {
            $(this).find(".owl-nav .owl-next").show();
            $(this).find(".owl-nav .owl-prev").show();
        }
    });

    if ($("input[name=thingstodo-tab-details]").length > 0) {
        var thingstododetailobject = {};
        var clickonshowmore = 0;
        thingstododetailobject.data = JSON.parse($("input[name=thingstodo-tab-details]").val());
        console.log(thingstododetailobject);
        var dataonthingstodo = {};
        var selector = $(".sentosa-nav-tabs .tab-content > div:nth-child(1)");
        var selectedelemnt = selector.attr("id").toLowerCase().replace(/-|\s/g, "");
        var thingstolistingpagesize = parseInt($("input[name=things-to-do-listing-pagesize]").val());
        checktoseebrowsemore(selectedelemnt);
        $('.sentosa-nav-tabs ul.nav.nav-tabs li a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            clickonshowmore = 0;
            selectedelemnt = $(this).attr("href").substr(1).toLowerCase().replace(/-|\s/g, "");
            selector = $(".sentosa-nav-tabs .tab-content #" + selectedelemnt);
            selector.html("");
            dataonthingstodo.data = filterthingstoresults(clickonshowmore * thingstolistingpagesize, (clickonshowmore + 1) * thingstolistingpagesize, selectedelemnt);
            updatethingstosectionlisting(selector, dataonthingstodo);
            checktoseebrowsemore(selectedelemnt);

            formpageurl = updateQueryStringParameter("category", selectedelemnt);
            updatepageurl();
            var clamp4elements = document.querySelectorAll('.clamp4Line');
            for (var count = 0, len = clamp4elements.length; count < len; count++) {
                var element = clamp4elements[count];
                $clamp(element, {
                    clamp: 4,
                    truncationChar: "..."
                });
            }
        });

        $(".sentosa-nav-tabs-container .browse-more").on("click", function() {
            clickonshowmore++;
            dataonthingstodo.data = filterthingstoresults(clickonshowmore * thingstolistingpagesize, (clickonshowmore + 1) * thingstolistingpagesize, selectedelemnt);
            updatethingstosectionlisting(selector, dataonthingstodo);
            checktoseebrowsemoreless(selectedelemnt, (clickonshowmore + 1) * thingstolistingpagesize);
            var clamp4elements = document.querySelectorAll('.clamp4Line');
            for (var count = 0, len = clamp4elements.length; count < len; count++) {
                var element = clamp4elements[count];
                $clamp(element, {
                    clamp: 4,
                    truncationChar: "..."
                });
            }
        })

        $(".sentosa-nav-tabs-container .browse-less").on("click", function() {
            selector.html("");
            clickonshowmore = 0;
            dataonthingstodo.data = filterthingstoresults(clickonshowmore * thingstolistingpagesize, (clickonshowmore + 1) * thingstolistingpagesize, selectedelemnt);
            updatethingstosectionlisting(selector, dataonthingstodo);
            $(".sentosa-nav-tabs-container .browse-more").show();
            $(".sentosa-nav-tabs-container .browse-less").hide();
            var offsetTopPosition = $(".sentosa-nav-tabs-container").offset().top;
            $('html, body').stop().animate({
                'scrollTop': offsetTopPosition - 50
            }, 1000);
        })

        function filterthingstoresults(startindex, lastindex, selectedelemnt) {
            var result = {};
            result.data = $.grep(thingstododetailobject.data, function(item) {
                return item.Key.toLowerCase().replace(/-|\s/g, "") == selectedelemnt;
            });
            if (result.data[0] != null && result.data[0] != "undefined") {
                return result.data[0].Value.slice(startindex, lastindex);
            } else {
                return "";
            }

        }

        function updatethingstosectionlisting(selector, data) {
            $("#things-to-details-template").tmpl(data).appendTo(selector);
        }
        var formpageurl;
        formpageurl = window.location.protocol + "//" + window.location.host + window.location.pathname;

        function updatepageurl(key, value) {
            if (history.pushState) {
                window.history.pushState({ path: formpageurl }, '', formpageurl);
            }
        }


        function updateQueryStringParameter(key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = formpageurl.indexOf('?') !== -1 ? "&" : "?";
            if (formpageurl.match(re)) {
                return formpageurl.replace(re, '$1' + key + "=" + value + '$2');
            } else {
                return formpageurl + separator + key + "=" + value;
            }
        }

        function checktoseebrowsemore(selectedelemnt) {
            var result = {};
            result.data = $.grep(thingstododetailobject.data, function(item) {
                return item.Key.toLowerCase().replace(/-|\s/g, "") == selectedelemnt;
            });
            if (result.data[0] != null && result.data[0] != "undefined") {
                if (result.data[0].Value.length > thingstolistingpagesize) {
                    $(".sentosa-nav-tabs-container .browse-more").show();
                    $(".sentosa-nav-tabs-container .browse-less").hide();
                } else {
                    $(".sentosa-nav-tabs-container .browse-more").hide();
                    $(".sentosa-nav-tabs-container .browse-less").hide();
                }
            }

        }

        function checktoseebrowsemoreless(selectedelemnt, index) {
            var result = {};
            result.data = $.grep(thingstododetailobject.data, function(item) {
                return item.Key.toLowerCase().replace(/-|\s/g, "") == selectedelemnt;
            });
            if (result.data[0].Value.length > index) {
                $(".sentosa-nav-tabs-container .browse-more").show();
                $(".sentosa-nav-tabs-container .browse-less").hide();
            } else {
                $(".sentosa-nav-tabs-container .browse-more").hide();
                $(".sentosa-nav-tabs-container .browse-less").show();
            }
        }

        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };




        var thingstodocategorytype = getUrlParameter("category");
        if (thingstodocategorytype) {
            selectedelemnt = thingstodocategorytype;
            selector = $(".sentosa-nav-tabs .tab-content #" + selectedelemnt);
            selector.html("");
            dataonthingstodo.data = filterthingstoresults(clickonshowmore * thingstolistingpagesize, (clickonshowmore + 1) * thingstolistingpagesize, selectedelemnt);
            updatethingstosectionlisting(selector, dataonthingstodo);
            checktoseebrowsemore(selectedelemnt);

            $('.nav-tabs a[href="#' + selectedelemnt + '"]').tab('show');
        }






    }
    if ($("input[name=venue-popup-details]").length > 0) {
        var roomjson = JSON.parse($("input[name=venue-popup-details]").val());
        console.log(roomjson);
        $(".sentosa-venue-detail .slide-link a[data-is-external='Internal'],[data-is-external='']").on("click", function(e) {
            e.preventDefault();
            if (!$(this).hasClass("disabled-link")) {

                var index = $(this).attr("data-index");
                var roomid = $(this).attr("data-room-id");
                var roomdetails = roomjson[index];
                var roomdetailsjson = {};
                roomdetailsjson.data = roomdetails.VenueRooms;

                if (roomdetailsjson.data.length > 0) {
                    indexes = $.map(roomdetails.VenueRooms, function(obj, index) {
                        if (obj.Id == roomid) {
                            return index;
                        }
                    })
                    console.log(roomdetailsjson);
                    console.log(indexes);
                    $("#room-modal #room-modal-carousel .carousel-inner").html("");
                    $("#venue-room-details-template").tmpl(roomdetailsjson).appendTo("#room-modal #room-modal-carousel .carousel-inner");
                    $("#room-modal .modal-title").html(roomdetails.Title);
                    $("#room-modal").modal("show");
                    if (indexes.length > 0) {
                        $('#room-modal-carousel').carousel(indexes[0]);
                    } else {
                        $('#room-modal-carousel').carousel(0);
                    }
                    $("#room-modal-carousel").swiperight(function() {
                        $(this).carousel('prev');
                    });
                    $("#room-modal-carousel").swipeleft(function() {
                        $(this).carousel('next');
                    });

                    setTimeout(function() {
                        if ($("#room-modal-carousel .item.active").prev().length > 0) {
                            var prevhtml = $("#room-modal-carousel .item.active").prev().find(".modal-heading").html();
                        } else {
                            var prevhtml = $("#room-modal-carousel .item:last").find(".modal-heading").html();
                        }

                        if ($("#room-modal-carousel .item.active").next().length > 0) {
                            var nexthtml = $("#room-modal-carousel .item.active").next().find(".modal-heading").html();
                        } else {
                            var nexthtml = $("#room-modal-carousel .item:first").find(".modal-heading").html();
                        }
                        changevenuepopupindex(prevhtml, nexthtml);
                        if ($("#room-modal-carousel .item").length == 1) {
                            $("#room-modal .left.carousel-control").hide();
                            $("#room-modal .right.carousel-control").hide();
                        } else {
                            if ($('#room-modal-carousel .item:first').hasClass('active')) {
                                $("#room-modal .left.carousel-control").hide();
                                $("#room-modal .right.carousel-control").show();
                            } else if ($('#room-modal-carousel .item:last').hasClass('active')) {
                                $("#room-modal .left.carousel-control").show();
                                $("#room-modal .right.carousel-control").hide();
                            } else {
                                $("#room-modal .left.carousel-control").show();
                                $("#room-modal .right.carousel-control").show();
                            }
                        }

                    }, 500)

                }
            }



        });


        function changevenuepopupindex(prevhtml, nexthtml) {

            $("#room-modal .left.carousel-control .pointofinterest").html(prevhtml);
            $("#room-modal .right.carousel-control .pointofinterest").html(nexthtml);
        }

        $('#room-modal-carousel').on('slid.bs.carousel', function(e) {
            if ($("#room-modal-carousel .item.active").prev().length > 0) {
                var prevhtml = $("#room-modal-carousel .item.active").prev().find(".modal-heading").html();
            } else {
                var prevhtml = $("#room-modal-carousel .item:last").find(".modal-heading").html();
            }

            if ($("#room-modal-carousel .item.active").next().length > 0) {
                var nexthtml = $("#room-modal-carousel .item.active").next().find(".modal-heading").html();
            } else {
                var nexthtml = $("#room-modal-carousel .item:first").find(".modal-heading").html();
            }
            changevenuepopupindex(prevhtml, nexthtml);

            if ($("#room-modal-carousel .item").length == 1) {
                $("#room-modal .left.carousel-control").hide();
                $("#room-modal .right.carousel-control").hide();
            } else {
                if ($('#room-modal-carousel .item:first').hasClass('active')) {
                    $("#room-modal .left.carousel-control").hide();
                    $("#room-modal .right.carousel-control").show();
                } else if ($('#room-modal-carousel .item:last').hasClass('active')) {
                    $("#room-modal .left.carousel-control").show();
                    $("#room-modal .right.carousel-control").hide();
                } else {
                    $("#room-modal .left.carousel-control").show();
                    $("#room-modal .right.carousel-control").show();
                }
            }


        })


    }

    if ($("input[name=sentosa-deals]").length > 0) {
        var dealsjson = {};
        var dealsdata = JSON.parse($("input[name=sentosa-deals]").val());
        console.log(dealsdata);
        var dealpagesize = $("input[name=sentosa-deals-page-size]").val();
        var startdealindex = 0;
        $(".sentosa-deals-section .browse-more").on("click", function() {


            dealsjson.data = dealsdata.slice(startdealindex * dealpagesize, (startdealindex + 1) * dealpagesize);
            startdealindex++;
            checktoseemoredeals();
            $("#sentosa-deals-template").tmpl(dealsjson).appendTo(".sentosa-deals-items");
        })

        $(".sentosa-deals-section .browse-less").on("click", function() {
            startdealindex = 0;

            var offsetTopPosition = $(".sentosa-deals-items").offset().top;
            $(".sentosa-deals-section .browse-less").hide();
            $(".sentosa-deals-section .browse-more").show();

            setTimeout(function() {
                $(".sentosa-deals-items").children().slice(dealpagesize).detach();
            }, 1000);

            $('html, body').stop().animate({
                'scrollTop': offsetTopPosition
            }, 1000);
        })

        function checktoseemoredeals() {
            if (dealsdata.length > startdealindex * dealpagesize) {
                $(".sentosa-deals-section .browse-less").hide();
                $(".sentosa-deals-section .browse-more").show();
            } else {
                $(".sentosa-deals-section .browse-less").show();
                $(".sentosa-deals-section .browse-more").hide();
            }
        }
    }

    if ($("input[name=blog-details]").length > 0) {
        var blogjson = {};
        var blogsdata = JSON.parse($("input[name=blog-details]").val());
        console.log(blogsdata);
        var blogpagesize = $("input[name=blog-item-size]").val();
        var startblogindex = 0;
        $(".sentosa-blog-component-container .browse-more").on("click", function() {


            blogjson.data = blogsdata.slice(startblogindex * blogpagesize, (startblogindex + 1) * blogpagesize);
            startblogindex++;
            checktoseemoreblogs();
            $("#blog-details-template").tmpl(blogjson).appendTo(".sentosa-blogs-section");
        })

        $(".sentosa-blog-component-container .browse-less").on("click", function() {
            startblogindex = 0;

            var offsetTopPosition = $(".sentosa-blogs-section").offset().top;
            $(".sentosa-blog-component-container .browse-less").hide();
            $(".sentosa-blog-component-container .browse-more").show();
            $('html, body').stop().animate({
                'scrollTop': offsetTopPosition
            }, 1000);
            setTimeout(function() {
                $(".sentosa-blogs-section").children().slice(blogpagesize).detach();
            });
        })

        function checktoseemoreblogs() {
            if (blogsdata.length > startblogindex * blogpagesize) {
                $(".sentosa-blog-component-container .browse-less").hide();
                $(".sentosa-blog-component-container .browse-more").show();
            } else {
                $(".sentosa-blog-component-container .browse-less").show();
                $(".sentosa-blog-component-container .browse-more").hide();
            }
        }
    }



    $(".app-form-control.custom-select-dropdown").each(function() {

        var element = $(this);
        var custom_dropdown_html = "";
        if ($(".package-venue-listing-section").length > 0) {
            var selectedfield = element.find("select option:first").html();
        } else {
            var selectedfield = element.find(".bs-title-option").html();
        }
        custom_dropdown_html += "<button class='app-selectpicker-button'>" + selectedfield + "</button>";
        custom_dropdown_html += "<section class='app-selectpicker_container box-shadow-right-bottom'>" +
            "<ul>";


        $.map(element.find("select option"), function(val, i) {
            var parent_id = $(val).attr("parent-id");
            var optionvalue = $(val).attr("value");
            var optionhtml = $(val).html();
            if (parent_id != null && parent_id != "" && parent_id != "undefined") {
                custom_dropdown_html += "<li parent-id='" + parent_id + "' value='" + optionvalue + "'>" + optionhtml + "</li>";
            } else {
                custom_dropdown_html += "<li value='" + optionvalue + "'>" + optionhtml + "</li>";
            }


        });

        custom_dropdown_html += "</ul></section>";

        var app_select_control = element.find(".app-select-control");

        app_select_control.after(custom_dropdown_html);



    })


    $(".app-selectpicker-button").on("click", function(e) {
        e.preventDefault();
        $(".app-selectpicker_container").removeClass('active');
        $(this).parent().find(".app-selectpicker_container").toggleClass('active');
        e.stopPropagation();
    });

    $(".app-selectpicker_container ul").on("click", "li", function(e) {
        e.stopPropagation();
        var optionhtml = $(this).html();
        var optionvalue = $(this).attr("value");
        $(this).parent().parent().parent().find(".app-selectpicker_container ul li").removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().parent().find(".app-selectpicker-button").html(optionhtml);
        $(this).parent().parent().parent().find("option[value='" + optionvalue + "']").prop('selected', true);
        if (optionvalue != "" && optionvalue != "00000000-0000-0000-0000-000000000000") {
            $(this).parent().parent().parent().removeClass('has-error show-error-tooltip');
        }
        flagchange = 0;
        flagforproperties = 0;
        $(this).parent().parent().parent().find("select").trigger("change");
        $(this).parent().parent().parent().find(".app-selectpicker_container").toggleClass('active');

    });


    $('.app-form-control input').on('focus', function() {
        $(".app-selectpicker_container").removeClass('active');
    });

    $("html,body").on("click touch", function() {
        $(".app-selectpicker_container").removeClass('active');
    })

    $(".contact-us-form-wrapper").on("click", function() {
        $(".app-selectpicker_container").removeClass('active');
    });



    $(".country-code input").attr("maxlength", 6);

    $('.contact-number input,.country-code input').on('input', function() {
        var inputText = $(this).val();

        var resultText = inputText.replace(/[^0-9]/g, '');
        $(this).val(resultText);
    });



    var appForm = $('.contact-us-form-wrapper .app-form-validate');
    if (appForm && appForm.length !== 0) {
        var _validateEmail = function _validateEmail(email) {
            var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$/;

            if (pattern.test(email)) {
                return 'successful';
            } else {
                return 'unsuccessful';
            }
        };

        var _validateEmailForm = function _validateEmail(email) {
            var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$/;

            if (pattern.test(email)) {
                return 1;
            } else {
                return 0;
            }
        };

        var _validateCurrency = function _validateCurrency(val) {
            var pattern = /^[+-]?[0-9]{1,}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$/;

            if (pattern.test(val)) {
                return true;
            } else {
                return false;
            }
        };

        function checkphonenumber(inputtxt) {
            var phoneno = /^\d*$/;
            //   var phoneno = /^\d{10}$/;
            if (inputtxt.match(phoneno)) {
                return 1;
            } else {

                return 0;
            }
        }

        function checkforcountrycode(inputtxt) {
            var countrycode = /^\d{6}$/;
            if (inputtxt >= 0 && inputtxt <= 999999) {
                return 1;
            } else {

                return 0;
            }
        }
        var appFormControlInputs = appForm.find('.app-form-control input,.app-form-control select ');
        var appFormControlTextarea = appForm.find('.app-form-control textarea');
        appFormControlInputs.each(function(i, input) {

            var inp = $(input);

            if (inp.attr('isrequired')) {
                if (inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value' || inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value') {
                    inp.after('<span class="error-node"> Field contains an invalid number </span>');
                } else if (inp.hasClass('email')) {
                    inp.after('<span class="error-node"> Please input a valid email (eg. abc@gmail.com) </span>');
                } else if (inp.attr('id') == 'emailAddress_blade') {
                    inp.after('<span class="error-node"> Please input a valid email (eg. abc@gmail.com) </span>');
                } else if (inp.is(":radio")) {
                    var html = inp.attr("data-val-required-error");
                    if (!inp.closest(".app-form-control").find(".error-node").length > 0)
                        inp.closest(".app-form-control .radio-options-wrapper").append('<span class="error-node">' + html + '</span>');
                } else {
                    var html = inp.attr("data-val-required-error");
                    inp.after('<span class="error-node">' + html + '</span>');
                }
            }
        });

        appFormControlTextarea.each(function(i, area) {
            var txtarea = $(area);

            if (txtarea.attr('isrequired')) {
                var html = txtarea.attr("data-val-required-error");
                txtarea.after('<span class="error-node">' + html + ' </span>');
            }
        });

        appForm.find('input, .app-selectpicker select, textarea').on('change', function() {

            var field = $(this);
            if (this.value != "" && this.value != "00000000-0000-0000-0000-000000000000") {
                // console.log('field >>', field.val() );
                if (field.parent().hasClass("date-custom")) {
                    field.closest('.app-form-control').removeClass('has-error show-error-tooltip');
                    field.parent().removeClass('has-error show-error-tooltip');
                } else {
                    field.closest('.app-form-control').removeClass('has-error show-error-tooltip');
                }
            }

        });

        //newsletter signup FOOTER form only
        appForm.find('#tag-emailaddress-submit').on('click', function() {
            // TO DO: uncomment _GTMSignUpLayerPush
            // Comment: did not use on submit for emailnewsletter as validation is a bit funny
            var emailAddress = $('#emailAddress_blade').val();
            var GTMLabel = void 0;
            GTMLabel = _validateEmail(emailAddress);

            _GTMSignUpLayerPush('trackEvent', 'email signup', 'click', GTMLabel);
            //console.log('trackEvent --- email signup --- click --- ' + GTMLabel);
        });

        //SR, Best Rate, Contact us and Newsletter form
        appForm.find('button.app-button').on('click', function() {
            // TO DO: uncomment _GTMSignUpLayerPush
            // Comment: did not use on submit for emailnewsletter as validation is a bit funny
            var emailAddress = $(this).closest('form').find('input[id^=wffm][type=email]').val(); //$('#email').val();
            var GTMLabel = void 0;
            var GTMCat = $(this).attr('id');
            GTMLabel = _validateEmail(emailAddress);

            _GTMSignUpLayerPush('trackEvent', GTMCat, 'submit', GTMLabel);
            //console.log('trackEvent --- ' + GTMCat +  ' --- submit --- ' + GTMLabel);
        });
        var submitted = 0;
        // appForm.on('submit', function(e) {
        //     e.preventDefault();


        //     // console.log('form submitting... with validation');
        //     var form = $(this);
        //     var inputs = form.find('.app-form-control input[isrequired], .app-form-control select[isrequired], .app-form-control textarea[isrequired]');
        //     var inputsWithErrors = [];
        //     inputs.each(function(i, input) {
        //         var inp = $(input);

        //         // console.log('inp has required', inp);
        //         if (inp.hasClass("email")) {
        //             var emailAddress = inp.val();
        //             if ($.trim(inp.val()) === "") {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 var html = inp.attr("data-val-required-error");
        //                 inp.next().html(html);
        //                 inputsWithErrors.push(inp);
        //             } else {
        //                 var returnval = _validateEmailForm(emailAddress);
        //                 if (!returnval) {
        //                     inp.closest('.app-form-control').addClass('has-error');
        //                     var emailvalidationmsg = inp.attr("data-val-required");
        //                     inp.next().html(emailvalidationmsg);
        //                     inputsWithErrors.push(inp);
        //                 }
        //             }
        //         } else if (inp.parent().hasClass("contact-number")) {
        //             var phonenumber = inp.val();
        //             if ($.trim(inp.val()) === "") {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 var html = inp.attr("data-val-required-error");
        //                 inp.next().html(html);
        //                 inputsWithErrors.push(inp);
        //             } else {
        //                 var returnval = checkphonenumber(phonenumber);
        //                 if (!returnval) {
        //                     inp.closest('.app-form-control').addClass('has-error');
        //                     var emailvalidationmsg = inp.attr("data-val-required");
        //                     inp.next().html(emailvalidationmsg);
        //                     inputsWithErrors.push(inp);
        //                 }
        //             }

        //         } else if (inp.parent().hasClass("country-code")) {
        //             var countrycode = inp.val();
        //             if ($.trim(inp.val()) === "") {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 var html = inp.attr("data-val-required-error");
        //                 inp.next().html(html);
        //                 inputsWithErrors.push(inp);
        //             } else {
        //                 var returnval = checkforcountrycode(countrycode);
        //                 if (!returnval) {
        //                     inp.closest('.app-form-control').addClass('has-error');
        //                     var emailvalidationmsg = inp.attr("data-val-required");
        //                     inp.next().html(emailvalidationmsg);
        //                     inputsWithErrors.push(inp);
        //                 }
        //             }

        //         } else if (inp.parent().parent().parent().hasClass("col-2")) {

        //             if ($.trim(inp.val()) === "") {
        //                 inp.parent().find(".app-selectpicker-button").addClass("red-border");
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);
        //             }


        //         } else if (inp.parent().parent().hasClass("hotels")) {

        //             if ($.trim(inp.val()) === "") {
        //                 inp.parent().find(".app-selectpicker-button").addClass("red-border");
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);

        //             }

        //         } else if (inp.parents(".app-form-control").hasClass("pair-calendar")) {

        //             if ($.trim(inp.val()) === "") {

        //                 inp.parent().addClass('has-error date-custom');
        //                 inputsWithErrors.push(inp.parent());

        //             }
        //         } else if ($.trim(inp.val()) === "") {
        //             // console.log('trim >>', $.trim(inp.val()));
        //             inp.closest('.app-form-control').addClass('has-error');
        //             inputsWithErrors.push(inp);
        //         } else if (inp.is(':radio')) {
        //             var name = inp.attr("name");
        //             if (!$("input:radio[name='" + name + "']").is(":checked")) {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);
        //             }
        //         }

        //         if (inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_1__Fields_6__Value' || inp.attr('id') == 'wffmdffdb4d1be32439fb98fb5eff2381f03_Sections_2__Fields_2__Value') {
        //             var currencyVal = _validateCurrency($.trim(inp.val()));

        //             if (!currencyVal) {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);
        //             }
        //         } else if (inp.hasClass('email')) {
        //             var emailVal = _validateEmail($.trim(inp.val()));

        //             if (emailVal == 'unsuccessful') {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);
        //             }
        //         } else if (inp.attr('id') == 'emailAddress_blade') {
        //             var _emailVal = _validateEmail($.trim(inp.val()));

        //             if (_emailVal == 'unsuccessful') {
        //                 inp.closest('.app-form-control').addClass('has-error');
        //                 inputsWithErrors.push(inp);
        //             }
        //         }
        //     });

        //     if (inputsWithErrors.length > 0) {
        //         e.preventDefault();
        //         if (inputsWithErrors[0].hasClass("date-custom")) {
        //             inputsWithErrors[0].addClass('show-error-tooltip');
        //         } else {
        //             inputsWithErrors[0].closest('.app-form-control').addClass('show-error-tooltip');
        //         }
        //         $('html,body').animate({
        //             scrollTop: inputsWithErrors[0].offset().top - 120 + 'px'
        //         });
        //     } else {
        //         if (!submitted) {
        //             submitted = 1;
        //             var url = appForm.attr("action");
        //             var headersList = {
        //                 "X-RequestVerificationToken": appForm.find('[name=__RequestVerificationToken]').val(),
        //                 "X-Requested-With": "XMLHttpRequest"
        //             };

        //             if ($(".number.budget input").length > 0) {
        //                 var html = $(".number.budget .permanent-placeholder").html();
        //                 var originalval = $(".number.budget input").val();
        //                 $(".number.budget input").val(html + " " + originalval);
        //             }


        //             $.ajax({
        //                 url: url,
        //                 type: "POST",
        //                 processData: false,
        //                 contentType: false,
        //                 headers: headersList,
        //                 data: new FormData(appForm.get(0)),
        //                 success: function(response) {
        //                     // self.formSubmitSuccess(form, res);
        //                     appForm.remove();
        //                     $(".contact-us-form").html(response);
        //                     $(".contact-us-title").remove();

        //                     if ($(window).width() > 1024) {
        //                         $('html, body').animate({
        //                             'scrollTop': $(".carousel-caption").offset().top
        //                         }, 900);
        //                     } else {
        //                         $('html, body').animate({
        //                             'scrollTop': 0
        //                         }, 900);
        //                     }



        //                 },
        //                 error: function(xhr, status, exception) {
        //                     //self.formSubmitError(form, xhr, status, exception);
        //                 }
        //             });

        //             $('#emailAddress_blade').show();
        //         }
        //     }
        // });

        $('#tag-for-media-enquiries').on('click', function() {
            _GTMSignUpLayerPush('trackEvent', 'media inquiry', 'click', 'media inquiry email');
        });

        $('#tag-for-media-enquiries-phone').on('click', function() {
            _GTMSignUpLayerPush('trackEvent', 'media inquiry', 'click', 'media inquiry phone');
        });
    }

    /*var clamp2LineArray = $.map($('.clamp2Line'), function(value, index) {
        return [value];
    });
    var clamp3LineArray = $.map($('.clamp3Line'), function(value, index) {
        return [value];
    });
    var clamp4LineArray = $.map($('.clamp4Line'), function(value, index) {
        return [value];
    });
    var clamp5LineArray = $.map($('.clamp5Line'), function(value, index) {
        return [value];
    });
    var clamp6LineArray = $.map($('.clamp6Line'), function(value, index) {
        return [value];
    });

    $.each(clamp2LineArray, function(i, val) {
        if (val.lastChild) {
            $clamp(clamp2LineArray[i], {
                clamp: 2
            });
        }
    });
    $.each(clamp3LineArray, function(i, val) {
        if (val.lastChild) {
            $clamp(clamp3LineArray[i], {
                clamp: 3
            });
        }
    });
    $.each(clamp4LineArray, function(i, val) {
        if (val.lastChild) {
            $clamp(clamp4LineArray[i], {
                clamp: 4
            });
        }
    });
    $.each(clamp5LineArray, function(i, val) {
        if (val.lastChild) {
            $clamp(clamp5LineArray[i], {
                clamp: 5
            });
        }
    });*/


    function initializeClamp() {
        var clamp2elements = document.querySelectorAll('.clamp2Line');
        for (var count = 0, len = clamp2elements.length; count < len; count++) {
            var element = clamp2elements[count];
            $clamp(element, {
                clamp: 2,
                truncationChar: "..."
            });
        }
        var clamp3elements = document.querySelectorAll('.clamp3Line');
        for (var count = 0, len = clamp3elements.length; count < len; count++) {
            var element = clamp3elements[count];
            $clamp(element, {
                clamp: 3,
                truncationChar: "..."
            });
        }
        var clamp4elements = document.querySelectorAll('.clamp4Line');
        for (var count = 0, len = clamp4elements.length; count < len; count++) {
            var element = clamp4elements[count];
            $clamp(element, {
                clamp: 4,
                truncationChar: "..."
            });
        }
        var clamp5elements = document.querySelectorAll('.clamp5Line');
        for (var count = 0, len = clamp5elements.length; count < len; count++) {
            var element = clamp5elements[count];
            $clamp(element, {
                clamp: 5,
                truncationChar: "..."
            });
        }
    
        var clamp6elements = document.querySelectorAll('.clamp6Line');
        for (var count = 0, len = clamp6elements.length; count < len; count++) {
            var element = clamp6elements[count];
            $clamp(element, {
                clamp: 6,
                truncationChar: "..."
            });
        }
    }
    // initializeClamp();
    
    // $(window).resize(function() {
    //     initializeClamp();
    // });

    // Hide if more than one video modal in the page
    var videoModalLength = $(".modal.fade.video").length;
    if (videoModalLength > 1) {
        $("#videoModal").remove();
    }

    
    
    if(typeof $.validator !== 'undefined'){
        $.validator.addMethod('selectrequired', function (value, element, params) {
            if($(element).data('val-selectrequired').length > 0 && $(element).find('.bs-title-option').text() === value){
            return false;
            }
            return true;
        });
        $.validator.unobtrusive.adapters.addBool('selectrequired');
    }

});


$(window).on("load", function() {
    var languageLength = $('.navbar-right select.sentosa-language-selector option').length;
    if (languageLength <= 1) {
        $('select.sentosa-language-selector').parent().hide();
        $('#language-selector-li').addClass("hideimportant");
        $('.sentosa-languageselector').hide();
    }

});
// $(document).ready(function() {
//     $('.promoData_toggler').on('click',function(e){
//         $(this).toggleClass('active_promo');
//         $('.header_ribbon__promoData_detail').slideToggle();
//     });
//     $('.close_promo_data').on('click',function(e){
//         $('.promoData_toggler').toggleClass('active_promo');
//         $('.header_ribbon__promoData_detail').slideUp();
//     });
// });

$(window).on('load',function() {
    setTimeout(function() {
        if($('#alert-bar').length){
            $('body').addClass('alertbar_exist');
        }
        
        $('#alert-bar tr td a').on('click',function(){
            $('body').removeClass('alertbar_exist');
        });
    }, 1000);
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }
    //$("[data-toggle=dropdown]").dropdown("hide");
});


$(document).ready(function() {

    var languageLength = $('.navbar-right select.sentosa-language-selector option').length;
    if (languageLength <= 1) {
        $('select.sentosa-language-selector').parent().hide();
        $('#language-selector-li').addClass("hideimportant");
        $('.sentosa-languageselector').hide();
    }

    function GetProtocol() {
        return window.location.protocol;
    }

    function GetPort() {
        return window.location.port;
    }

    function GetHostName() {
        return window.location.host;
    }

    function emptyElement(element) {
        if (element == null || element == '')
            return false;
        else return true;
    }

    function GetPathName(LanguageCode) {
        var langarr = [];
        var IslanguageEmbedd = false;
        $("#sentosa-languageselector > option").each(function() {
            langarr.push(this.value);
        });
        var urlarr = window.location.pathname.split('/');
        urlarr = urlarr.filter(emptyElement);
        for (var i = 0; i < langarr.length; i++) {
            for (var m = 0; m < urlarr.length; m++) {
                if (langarr[i].toLowerCase() == urlarr[m].toLowerCase()) {
                    IslanguageEmbedd = true;
                }
            }
        }
        if (IslanguageEmbedd) {
            urlarr[0] = LanguageCode;
            if (window.location.pathname == "/") {
                return urlarr.join('/');
            } else {
                return "/" + urlarr.join('/');
            }

        } else {
            if (window.location.pathname == "/") {
                return window.location.pathname + LanguageCode;
            } else {
                return LanguageCode + "/" + window.location.pathname;
            }
        }

    }

    $(".sentosa-language-selector").change(function (e) {
        //var currentLocation = window.location; 
        //window.location.href = $(this).val();
        var lang = $(this).val();
        // console.log(lang);
        var port = "";
        if (GetPort() != "") {
            port = ":" + GetPort();
        }
        var currentLocation = GetProtocol() + port + "//" + GetHostName();
        var path = "/" + GetPathName(lang);
        // console.log(path);
        path = path.replace("//", "/");
        currentLocation = currentLocation + path;
        window.location.href = currentLocation;
       e.stopPropagation();
    });

    var staticCarousel = $('.owl-carousel').owlCarousel({
        loop: false,
        // margin: 15,
        navText: [' ', ' '],
        responsiveClass: true,
        items: 1,
        nav: true,
        dots: true,
        onInitialized:function(){
           var clamp4elements = document.querySelectorAll('.clamp4Line');
            for (var count = 0, len = clamp4elements.length; count < len; count++) {
                var element = clamp4elements[count];
                $clamp(element, {
                    clamp: 4,
                    truncationChar: "..."
                });
            }
            var clamp5elements = document.querySelectorAll('.clamp5Line');
            for (var count = 0, len = clamp5elements.length; count < len; count++) {
                var element = clamp5elements[count];
                $clamp(element, {
                    clamp: 5,
                    truncationChar: "..."
                });
            }
        }
    });

    staticCarousel.on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = (event.item.index + 1) * event.page.size;

        if (event.item.index == 0) {
            $('owl.carousel .owl-nav .owl-next').show();
            $('owl.carousel .owl-nav .owl-prev').hide();
        } else if (item >= items) {
            $('owl.carousel .owl-nav .owl-next').hide();
            $('owl.carousel .owl-nav .owl-prev').show();
        } else {
            $('owl.carousel .owl-nav .owl-next').show();
            $('owl.carousel .owl-nav .owl-prev').show();
        }
    });

});