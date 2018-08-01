$(document).ready(function() {
  // Sticky Navigation
  $("#features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    {
      offset: "60px"
    }
  );

  // Smooth scrolling
  // NOTE: need full version (NOT slim) of jquery for this to work
  $("nav a, .hero-text-box a").on("click", function(e) {
    // Check for hash value on clicked link
    if (this.hash !== "") {
      // Prevent default behavior
      e.preventDefault();

      // store hash # (anchor string)
      const hash = this.hash;

      // Animate smooth scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          // Add hash/anchor string to URL after scroll
          window.location.hash = hash;
        }
      );
    }
  });

  // Animations
  // #features
  $(".js--animate-1").waypoint(
    function(direction) {
      $(".js--animate-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  // #how-it-works
  $(".js--animate-2").waypoint(
    function(direction) {
      $(".js--animate-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  // #locations
  $(".js--animate-3").waypoint(
    function(direction) {
      $(".js--animate-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  // #pricing
  $(".js--animate-4").waypoint(
    function(direction) {
      $(".js--animate-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );
});
