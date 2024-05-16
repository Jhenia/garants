 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   


$(document).ready(function(){
  function moveCarousel() {
    var firstItem = $('.carousel-item:first');
    var itemWidth = firstItem.outerWidth(true);
    firstItem.animate({ marginLeft: -itemWidth }, 3000, 'linear', function(){
      $(this).appendTo('.carousel').css('margin-left', 0);
      moveCarousel();
    });
  }

  moveCarousel();
});
         
// soliac media button 

$(document).ready(function(){
  $('#socialBtn').click(function(){
    var socialIcons = $('#socialIcons');
    if (socialIcons.hasClass('show')) {
      socialIcons.addClass('hide'); // Додати клас "hide" для анімації зникнення
    } else {
      socialIcons.addClass('show');
    }
  });

  // Додати обробник події animationend для виконання дій після завершення анімації
  $('#socialIcons').on('animationend', function() {
    var socialIcons = $('#socialIcons');
    if (socialIcons.hasClass('hide')) {
      socialIcons.removeClass('show');
      socialIcons.removeClass('hide'); // Видалити клас "hide", якщо блок прихований
    }
  });
});


// principles hide
$(document).ready(function(){
  $('.principles__wrap > h4').click(function(){
    $(this).parent().find('.principles__wrap-hide').slideToggle();
  });
});
$(document).ready(function() {
  $('.principles__wrap').hover(function() {
      $(this).addClass('hover'); // Додавання класу при наведенні
  }, function() {
      $(this).removeClass('hover'); // Видалення класу при відведенні курсора
  });
});


    // Отримуємо поточний URL-адресу сторінки
    var currentPage = window.location.href;

    // Отримуємо всі посилання в меню
    var menuLinks = document.querySelectorAll('.menu a');

    // Перевіряємо, чи URL-адреса сторінки відповідає посиланням в меню
    menuLinks.forEach(function(link) {
        if (link.href === currentPage) {
            link.classList.add('active__item'); // Додаємо активний клас
        }
    });


