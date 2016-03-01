$( document ).ready(function() {
    console.log( "ready!" );
    $(document).scroll(function() {
      var $scrollTop = $(document).scrollTop();
      console.log($scrollTop);

     if($scrollTop == 0 || $scrollTop < 230) {

        // $(".image-changer").find('img').remove();
        $(".image-changer").addClass('active');

     } else if ($scrollTop > 230 && $scrollTop < 630 ) {

      $(".image-changer").removeClass('active');
      if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage2.png") {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage1.png");
      }

     } else if ($scrollTop > 630 && $scrollTop < 1747 ) {

      if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage3.png") {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage2.png");
      } else {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage2.png");
      }

     } else if ($scrollTop > 1747 && $scrollTop < 2300 ) {

      if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage4.png") {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage3.png");
      } else {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage3.png");
      }

     } else if ($scrollTop > 2300 && $scrollTop < 3130 ) {

      if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage5.png") {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage4.png");
      } else {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage4.png");
      }

     } else if ($scrollTop > 3130 && $scrollTop < 4316 ) {

      if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage6.png") {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage5.png");
      } else {
        $(".image-changer").find('img').attr("src", "assets/img/cosplayimage5.png");
      }

     } else if ($scrollTop > 4316 && $scrollTop < 5847 ) {

       if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage7.png") {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage6.png");
       } else {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage6.png");
       }

      } else if ($scrollTop > 5847 && $scrollTop < 6484 ) {

       if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage8.jpg") {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage7.png");
       } else {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage7.png");
       }

      } else if ($scrollTop > 6484 && $scrollTop < 7356 ) {

       if ($(".image-changer").find('img').attr("src")=="assets/img/cosplayimage9.png") {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage8.jpg");
       } else {
         $(".image-changer").find('img').attr("src", "assets/img/cosplayimage8.jpg");
       }

      } else if ($scrollTop > 7356 ) {

       $(".image-changer").find('img').attr("src", "assets/img/cosplayimage9.png");

      }
    });
});