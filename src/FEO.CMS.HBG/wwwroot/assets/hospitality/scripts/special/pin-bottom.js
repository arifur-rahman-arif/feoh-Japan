(function() {
  // scrollmagic
  var controller = new ScrollMagic.Controller();

  var pinBottom = new ScrollMagic.Scene({ triggerElement: ".pin-bottom", triggerHook: 'onEnter', offset: 48, duration: getBottomDuration })
  .setPin(".pin-bottom", {pushFollowers: false}) //which element to stick
  .on("enter", function (event) {
    $('.pin-bottom').fadeIn();
  })
  .on("leave", function (event) {
    $('.pin-bottom').hide();
  })
  .addTo(controller);

  if ($('body').hasClass('hotel')) {
    pinBottom.reverse(false);
  }

  function getBottomDuration() {
    return $('.pin-bottom-duration').height();
  }
})();
