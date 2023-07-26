$(function(){//おまじない

  $('.slide').slick({
    slidesToShow: 2,//一度に表示される数
    slidesToScroll:2,//スライドするときの動きの単位
    autoplay: true,//自動スライド
    autoplaySpeed: 5000,//3000ミリ秒 == 3秒
    dots:true,// ドット表示
  });
  
});//おまじない