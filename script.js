

// スライドショー
$('.slider').slick({
  autoplay:true, // 自動再生を設定
  autoplaySpeed:2000, // スライド切り替えの時間を設定
  dots:true, // インジケーターを表示
});


// ハンバーガーメニュー
(function($) {
  var $nav   = $('.navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('.mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

