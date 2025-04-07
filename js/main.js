$(document).ready(function () {

  // Menu mobail
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('no-scroll');
    $('.nav').toggleClass('nav--open');
  });

  // Open search
  $('.search__btn--open').on('click', function() {
    $('.search__form').fadeIn(200);
  })

  $(document).mouseup(function (e) {
  let modalContent = $(".search__form");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $('.search__form').fadeOut(200);
  }
});

  // Hero video play
  const btnPlay = document.querySelector('.hero__video-play');
  const heroVideo = document.querySelector('.hero__video');

  let X = 0;
  let Y = 0;

  heroVideo.addEventListener("mousemove", function (event) {
    X = event.clientX;
    Y = event.clientY;
  });

  function move() {
    btnPlay.style.left = X + 'px';
    btnPlay.style.top = Y + 'px';
    setTimeout(move, 10);
  }

  move();

  // Video start && stop
  const video = $('video');
  $('.hero__video-play').on('click', function() {
    if (video[0].paused) {
      video[0].play();
    } else {
      video[0].pause();
    }
  })

  // Events sl
  var swiper = new Swiper(".news__sl", {
    spaceBetween: 15,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next--news",
      prevEl: ".swiper-button-prev--news",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      1350: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

  // Reports sl
  var swiper = new Swiper(".reports__sl", {
    spaceBetween: 15,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next--reports",
      prevEl: ".swiper-button-prev--reports",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      1350: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

  // Interesting sl
  var swiper = new Swiper(".interesting__sl", {
    spaceBetween: 15,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next--interesting",
      prevEl: ".swiper-button-prev--interesting",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      1350: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

  // Channel sl
  var swiper = new Swiper(".channel__sl", {
    spaceBetween: 15,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next--channel",
      prevEl: ".swiper-button-prev--channel",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      1350: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

});