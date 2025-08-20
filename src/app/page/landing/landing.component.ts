import { Component, OnInit } from '@angular/core';
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
  link?: string
}

interface Tab {
  id: string;
  label: string;
  products: Product[];
}

interface SwiperItem {
  bg: string;
  title: string;
  img: string;
  text: string;
  btn: string;
}

interface CategoryItem {
  title: string;
  img: string;
}

interface ProductItem {
  cat: string;
  title: string;
  img: string;
}

interface BlogPost {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

interface BlogPost {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { 
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.reInitScripts();
      }
    });
  }

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


  ngOnInit(): void {
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

  swiperCaro: SwiperItem[] = [
    {
      bg: 'assets/images/land/land_img_1.png',
      title: 'Lorem ipsum',
      img: 'assets/im/logo-wh.png',
      text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      btn: 'new'
    },
    {
      bg: 'assets/images/land/land_img_1.png',
      title: 'Lorem ipsum',
      img: 'assets/im/product/p-1.webp',
      text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      btn: 'new'
    },
    {
      bg: 'assets/images/land/land_img_1.png',
      title: 'Lorem ipsum',
      img: 'assets/im/product/p-2.webp',
      text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      btn: 'new'
    },
    {
      bg: 'assets/images/land/land_img_1.png',
      title: 'Lorem ipsum',
      img: 'assets/im/product/p-3.webp',
      text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      btn: 'new'
    }
  ];

  category: CategoryItem[] = [
    { title: 'Category 1', img: 'assets/im/product/p-1.webp' },
    { title: 'Category 2', img: 'assets/im/product/p-2.webp' },
    { title: 'Category 3', img: 'assets/im/product/p-3.webp' },
    { title: 'Category 4', img: 'assets/im/product/p-1.webp' },
    { title: 'Category 5', img: 'assets/im/product/p-3.webp' },
    { title: 'Category 6', img: 'assets/im/product/p-1.webp' }
  ];

  newProd: ProductItem[] = [
    { cat: 'Category 1', title: 'product name', img: 'assets/im/product/p-1.webp' },
    { cat: 'Category 2', title: 'product name', img: 'assets/im/product/p-2.webp' },
    { cat: 'Category 3', title: 'product name', img: 'assets/im/product/p-3.webp' },
    { cat: 'Category 4', title: 'product name', img: 'assets/im/product/p-1.webp' },
    { cat: 'Category 4', title: 'product name', img: 'assets/im/product/p-1.webp' },
    { cat: 'Category 4', title: 'product name', img: 'assets/im/product/p-1.webp' }
  ];

  tabs: Tab[] = [
    {
      id: 'Category 1',
      label: 'Category 1',
      products: [
        {
          badge: '-30%',
          wishlist: true,
          image: 'assets/im/product/p-1.webp',
          title: 'Product Name',
          qty: 'LOREM',
          link: '/product',
          rating: 4.5,
          price: 18
        }
      ]
    },
    {
      id: 'Category 2',
      label: 'Category 1',
      products: [
        {
          badge: '-30%',
          wishlist: true,
          image: 'assets/im/product/p-2.webp',
          title: 'Product Name',
          qty: 'LOREM',
          link: '/product',
          rating: 4.5,
          price: 18
        },
        {
          badge: '-30%',
          wishlist: true,
          image: 'assets/im/product/p-3.webp',
          title: 'Product Name',
          qty: 'LOREM',
          link: '/product',
          rating: 4.5,
          price: 18
        }
      ]
    },
    {
      id: 'Category 3',
      label: 'Category 1',
      products: [
        {
          wishlist: true,
          image: 'assets/im/product/p-1.webp',
          title: 'Product Name',
          qty: 'LOREM',
          link: '/product',
          rating: 4.5,
          price: 18
        },
        {
          wishlist: true,
          image: 'assets/im/product/p-2.webp',
          title: 'Product Name',
          qty: 'LOREM',
          link: '/product',
          rating: 4.5,
          price: 18
        }
      ]
    }
  ];

  activeTab: string = this.tabs[0].id;

  setActiveTab(id: string) {
    this.activeTab = id;
  }

  bestSellingProducts: Product[] = [
  {
    badge: '-15%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.5,
    price: 18.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-3.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  },
  {
    badge: '-10%',
    badgeClass: 'bg-success',
    image: 'assets/im/product/p-1.webp',
    title: 'Lorem Ipsum',
    qty: 'Lorem',
    link: '/product',
    rating: 4.7,
    price: 15.00
  }
];

recentBlogPosts: BlogPost[] = [
  {
    image: 'assets/im/b-1.jpg',
    date: '05 Jun 2025',
    category: 'tips & tricks',
    title: '5 Essential Checks Before Renting Heavy Equipment',
    excerpt: 'From hydraulic integrity to safety certifications, ensure your machinery meets site standards before signing off on rental—save time, money, and headaches...',
    link: '#'
  },
  {
    image: 'assets/im/b-2.jpg',
    date: '15 May 2025',
    category: 'guides',
    title: 'How Renting Equipment Can Boost Your Project Budget',
    excerpt: 'Discover how flexible rental plans free up capital, reduce maintenance costs, and let you access premium machinery without breaking the bank...',
    link: '#'
  },
  {
    image: 'assets/im/b-3.jpg',
    date: '22 Apr 2025',
    category: 'inspiration',
    title: 'Innovative Rental Solutions for Urban Construction',
    excerpt: 'Limited space? Tight schedules? See how modular rental equipment and smart delivery systems are transforming urban construction efficiency...',
    link: '#'
  },
  // {
  //   image: 'assets/im/blog-eq-4.jpg',
  //   date: '30 Mar 2025',
  //   category: 'case study',
  //   title: 'Case Study: Cutting Downtime with Local Calibration Services',
  //   excerpt: 'When one builder faced delays due to offshore calibration, they switched to local services – reducing downtime and logistics costs dramatically...',
  //   link: '#'
  // },
  // {
  //   image: 'assets/im/blog-eq-5.jpg',
  //   date: '10 Feb 2025',
  //   category: 'news',
  //   title: 'Our New Fleet: Low-Emission Excavators Now Available',
  //   excerpt: 'Meet our latest eco-friendly excavator lineup – quieter, greener, and compliant with modern site regulations. Book yours today!',
  //   link: '#'
  // },
  // {
  //   image: 'assets/im/blog-eq-6.jpg',
  //   date: '20 Jan 2025',
  //   category: 'video',
  //   title: 'Watch: Safe Operation of Aerial Work Platforms',
  //   excerpt: 'Learn proper setup, usage, and safety checks through our step-by-step video guide for aerial platform rentals—ideal for training and onsite orientation.',
  //   link: '#'
  // }
];

}
