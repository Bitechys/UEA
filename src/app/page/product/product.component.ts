import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import Swiper from 'swiper';

interface Product {
  badge?: string;
  badgeClass?: string;
  wishlist?: boolean;
  image: string;
  title: string;
  qty: string;
  rating: number;
  price: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   reInitScripts() {
    console.log("Reinitialized scripts after route change");
  
    (function ($) {
      "use strict";
  
      // ---- Preloader (trigger manually, not on window.load) ----
      $('body').addClass('preloader-site');
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
  
      // ---- Init Swipers (destroy old first if exist) ----
      if ($('.main-swiper')[0]) {
        new Swiper('.main-swiper', {
          speed: 500,
          pagination: { el: '.swiper-pagination', clickable: true }
        });
      }
  
      if ($('.category-carousel')[0]) {
        new Swiper('.category-carousel', {
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
      }
  
      if ($('.brand-carousel')[0]) {
        new Swiper('.brand-carousel', {
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
      }
  
      if ($('.products-carousel')[0]) {
        new Swiper('.products-carousel', {
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
      }
  
      if ($('.product-thumbnail-slider')[0]) {
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
          thumbs: { swiper: thumb_slider },
          pagination: { el: '.swiper-pagination', clickable: true },
        });
      }
  
      // ---- Product Qty ----
      $('.product-qty').off('click'); // remove old listeners
      $('.product-qty').each(function () {
        const $el_product = $(this);
  
        $el_product.find('.quantity-right-plus').on('click', function (e) {
          e.preventDefault();
          const val = $el_product.find('#quantity').val();
          const quantity = parseInt(val as string || '0', 10);
          $el_product.find('#quantity').val((quantity + 1).toString());
        });
  
        $el_product.find('.quantity-left-minus').on('click', function (e) {
          e.preventDefault();
          const val = $el_product.find('#quantity').val();
          const quantity = parseInt(val as string || '0', 10);
          if (quantity > 0) {
            $el_product.find('#quantity').val((quantity - 1).toString());
          }
        });
      });
  
    })(jQuery);
  }

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

   enquiryForm: FormGroup;

 product = {
  title: 'Lorem Ipsum Dolor Sit Amet',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  delivery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
  returns: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
  specifications: [
    { name: 'Lorem', value: 'Ipsum' }
  ],
  documents: [
    { name: 'LOREM_DOC.pdf', size: '10.25 MB', link: '#' }
  ],
  image: 'assets/im/product/p-3.webp',
  features: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt'
  ]
};

relatedProducts = [
  { name: 'Lorem Ipsum Power Device', code: 'LOR,IPSUM-100' },
  { name: 'Dolor Sit Amet Analyzer', code: 'DOL,SITAMET-200' }
];


  constructor(private fb: FormBuilder, private router: Router) {
     this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.reInitScripts();
          }
        });
        
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      address: [''],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      details: ['']
    });
  }

onSubmit() {
    if (this.enquiryForm.valid) {
      console.log('Form Data:', this.enquiryForm.value);
      alert('Your enquiry has been submitted successfully!');
      this.enquiryForm.reset();
    }
  }

  scrollToForm() {
    document.getElementById('enquiryForm')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
  }

isOpen = {
  desc: false,
  delivery: false
};

toggleAccordion(section: 'desc' | 'delivery') {
  this.isOpen[section] = !this.isOpen[section]; // toggle open/close
}

relateProducts: Product[] = [
  {
    badge: '-15%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.5,
    price: 18.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-3.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    rating: 4.7,
    price: 15.00
  }
];

}
