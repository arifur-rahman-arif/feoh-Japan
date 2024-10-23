$(function () {

  function isMobile () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateState (value) {
    var url = Query.update('type', value.replace(/ /g, '-'));
    var store = Query.storage;
    for (var index in store) {
      var pair = store[index];
      var val = pair.isFunc ? pair.value(value) : pair.value;
      url = Query.update(pair.name, val, url);
    }
    History.pushState(null, document.title, url);
  }

  $('#article-select').on('change', function (e) {
    var value = $(e.target).val();
    updateState(value);
  });

  $('#article-wrapper a[data-toggle=tab]').on('click', function () {
    var value = $(this).data('value');
    updateState(value);
  });

  (loadTab = function () {

    var tab, value, 
        type = Query.get('type');
    
    //console.log(window.location);
    if (window.location.href.indexOf("type=") == -1) {
        tab = $('#article-wrapper a[data-toggle=tab][data-activate=true]');
        value = tab.data('value');
    }
    else {

        if (!type) {
            //tab = $('#article-wrapper a[data-toggle=tab][data-activate=true]');
            //value = tab.data('value');
            tab = $('#article-wrapper a[data-toggle=tab][data-value=""]');
            value = "";
        } else {
            value = type.replace(/-/g, ' ');
            tab = $('#article-wrapper a[data-toggle=tab][data-value="' + value + '"]');
        }
    }

    if (isMobile()) {
      if (!type) {
          //value = $('#article-select option[data-activate=true]').val();
          value = "";
      } else {
        value = type.replace(/-/g, ' ');
      }

      var selectpicker = $('#article-select');
      selectpicker.selectpicker('render');
      selectpicker.selectpicker('val', value);
      selectpicker.selectpicker('refresh');
      tab.tab('show');

    } else {
        if (!tab.hasClass('active')) tab.tab('show');
    }
    
    console.log('tab value:' + value);

    $('[data-role=content]').trigger('display', {
      value: value
    });

  })();

  History.Adapter.bind(window, 'statechange', function () {
    loadTab();
  });

});