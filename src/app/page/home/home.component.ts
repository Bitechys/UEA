import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

   constructor() { }

  ngAfterViewInit() {
    (function ($) {
      "use strict";

      setTimeout(function () { }, 1500);

      const initPreloader = function () {
        $('body').addClass('preloader-site');
        $(window).on('load', function () {
          $('.preloader-wrapper').fadeOut();
          $('body').removeClass('preloader-site');
        });
      };

      const initSwiper = function () {
        const swiper = new Swiper('.main-swiper', {
          speed: 500,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

        const category_swiper = new Swiper('.category-carousel', {
          slidesPerView: 6,
          spaceBetween: 30,
          speed: 500,
          navigation: {
            nextEl: '.category-carousel-next',
            prevEl: '.category-carousel-prev',
          },
          breakpoints: {
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1500: { slidesPerView: 6 },
          },
        });

        const brand_swiper = new Swiper('.brand-carousel', {
          slidesPerView: 4,
          spaceBetween: 30,
          speed: 500,
          navigation: {
            nextEl: '.brand-carousel-next',
            prevEl: '.brand-carousel-prev',
          },
          breakpoints: {
            0: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1500: { slidesPerView: 4 },
          },
        });

        const products_swiper = new Swiper('.products-carousel', {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 500,
          navigation: {
            nextEl: '.products-carousel-next',
            prevEl: '.products-carousel-prev',
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1500: { slidesPerView: 6 },
          },
        });

        const thumb_slider = new Swiper('.product-thumbnail-slider', {
          slidesPerView: 5,
          spaceBetween: 20,
          direction: 'vertical',
          breakpoints: {
            0: { direction: 'horizontal' },
            992: { direction: 'vertical' },
          },
        });

        new Swiper('.product-large-slider', {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          thumbs: {
            swiper: thumb_slider,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      };

      const initProductQty = function () {
        $('.product-qty').each(function () {
          const $el_product = $(this);

          $el_product.find('.quantity-right-plus').click(function (e) {
            e.preventDefault();
            const val = $el_product.find('#quantity').val();
            const quantity = parseInt(typeof val === 'string' ? val : String(val || '0'), 10);
            $el_product.find('#quantity').val((quantity + 1).toString());
          });

          $el_product.find('.quantity-left-minus').click(function (e) {
            e.preventDefault();
            const val = $el_product.find('#quantity').val();
            const quantity = parseInt(typeof val === 'string' ? val : String(val || '0'), 10);
            if (quantity > 0) {
              $el_product.find('#quantity').val((quantity - 1).toString());
            }
          });
        });
      };

      // ✅ INIT directly in ngAfterViewInit (DOM is ready)
      initPreloader();
      initSwiper();
      initProductQty();
    })(jQuery);
  }
  
    swiperCaro = [
    {
      bg: 'assets/images/land/land_img_1.png',
      title: 'Lorem ipsum',
      text: `From web to mobile, APIs to ETL tools — we craft scalable, secure software that drives real impact. Let's build your digital success story.`,
    },
    {
      bg: 'assets/images/land/land_img_2.png',
      title: 'Web to Mobile. Seamless Solutions',
      text: `We create seamless, high-performance web applications and Android apps that enhance usability, simplify workflows, and boost engagement.`,
    },
    {
      bg: 'assets/images/land/land_img_3.png',
      title: 'Smart Connections. Smarter Systems.',
      text: `With our custom API and ETL solutions, your systems talk better, work smarter, and move faster — so you can scale without limits.`,
    },
    {
      bg: 'assets/images/land/land_img_5.png',
      title: 'Tested. Trusted. Delivered.',
      text: `Our QA and software testing services ensure that what you launch works flawlessly — with zero compromises on performance or security.`,
    },
  ];

}
