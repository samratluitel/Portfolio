(function ($) {
$(document).ready(function() {
    // hire smooth scroll
    $(".hire").click(()=>{
      $('html,body').animate({
        scrollTop: $("#get-in-touch").offset().top},
        3000);
    });
    $("#gamelink1").click(()=>{ // metoeor shower
      window.open("https://samrat.itch.io/meteor-shower");
    })
    $("#gamelink2").click(()=>{
      window.open("https://play.google.com/store/apps/details?id=com.NGC.MemoirTangle&hl=en");
    })
    $("#bloggen").click(()=>{
      window.open("https://bloggenadmindemo.netlify.com/");
    })
    $("#glozzom").click(()=>{
      window.open("https://demoglozzom.netlify.com/");
    })
    var app =document.querySelector(".typewriter");
    var typewriter = new Typewriter(app,{
      loop:true,
      deleteSpeed:50,
    });
    typewriter.typeString("responsive websites")
              .pauseFor(2500)
              .deleteAll()
              .typeString("landing pages")
              .pauseFor(2500)
              .deleteAll()
              .typeString("web apps")
              .pauseFor(2500)
              .start();
    $(".counter-item").counterUp();
    $("#testimonial-slides").owlCarousel({
      items :4,
      margin: 10,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      dots: true,
      center:true,
      responsive:{
      	0:{
            items:1
        },
      	600:{
      		items:3
      	}
      }
    });
  });
  $(".experience-slider").owlCarousel({
    items :4,
    margin: 10,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav:true,
    center:true,
    responsive:{
      0:{
          items:1
      },
      600:{
        items:3
      }
    }
  });
  var waypoint = new Waypoint({
    element: document.querySelector("#about-me"),
    handler: function() {
      $(".progress-bar").addClass("slideInLeft");
    }
  })

  new WOW().init();
  $(".owl-next").html('<i class="fa fa-long-arrow-right" aria-hidden="true"></i>');
  $(".owl-prev").html('<i class="fa fa-long-arrow-left" aria-hidden="true"></i>');
  setTimeout(DisplayPage,3000);
  function DisplayPage(){
    document.getElementById("hideAll").style.display = "none";
  }
}(jQuery));
