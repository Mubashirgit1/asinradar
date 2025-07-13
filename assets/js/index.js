 



$(document).ready(function () {
    $('#slider-animation').on('slid.bs.carousel', function (e) {
      var items = $('#slider-animation .carousel-item');
      var activeIndex = items.index($(e.relatedTarget));
      var navbar = document.getElementById('mainNavbar');
    if (activeIndex === 2) {
      navbar.classList.add('navbar-dark-mode');
    } else {
      navbar.classList.remove('navbar-dark-mode');
    }

      console.log('Active slide index:', activeIndex);
    });
  });