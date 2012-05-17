$(function(){
  $('#canvas_frame').ready(function() {

    if($('#canvas_frame').contents().find('#gbz').length !== 0){
      restoreReader();
    } else {
      var interval;
      interval = setInterval(function() {
        if($('#canvas_frame').contents().find('#gbz').length !== 0) {
          clearInterval(interval);
          restoreReader();
        }
      }, 500);
    }

  });
});

function restoreReader(){
  $('#canvas_frame').contents().find('#gbz ol.gbtc li.gbt').last().before($('#canvas_frame').contents().find('#gb_32').parent('li'));
  $('#canvas_frame').contents().find('#gb_32').parent('li').removeClass('gbmtc').addClass('gbt');
  var $readerLink = $('#canvas_frame').contents().find('#gb_32');
  var linkText = $readerLink.text();
  $readerLink.removeClass('gbmt').addClass('gbzt').html('<span class="gbtb2"></span><span class="gbts">' +  linkText + '</span>');
}