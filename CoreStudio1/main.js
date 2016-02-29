$( document ).ready(function() {
    console.log( "ready!" );
    $(document).scroll(function() {
      var $scrollTop = $(document).scrollTop();
      console.log($scrollTop);
      
     if($scrollTop == 0 || $scrollTop < 230) {
          if ($(".image-changer")[0]){
            // Do something if class exists
            $(".image-changer").remove();
          } else {
              
          }
         
     } else if ($scrollTop > 230 || $scrollTop < 1480 ) {
         
        if ($(".image-changer")[0]){
            // Do something if class exists
        } else {
            // Do something if class does not exist
            $(".image-container").prepend("<div class='image-changer'><img src='assets/img/cosplayimage1.png'></div>");
        }
         
     } else if ($scrollTop > 1480 && $scrollTop < 2000) {
        if ($(".image-changer")[0]){
            // Do something if class exists
            $(".image-changer").remove();
        } else {
            // Do something if class does not exist
            $(".image-container").prepend("<div class='image-changer'><img src='assets/img/cosplayimage1.png'></div>");
        }
     } 
     
    })
});