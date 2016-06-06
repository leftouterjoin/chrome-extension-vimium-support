$(function(){
  $(window).on("focus", function () {
    $(document.activeElement).blur();
  });
});
