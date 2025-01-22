const swiperTop = new Swiper(".top__swiper", {
  // Optional parameters
  effect: "fade",
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,

  pagination: {
    el: ".about-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    475: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    998: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

document.querySelectorAll(".accordeon__triger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon__item--active");
  });
});

// hamb
let hamb = document.querySelector('.hamb');
let navMenu = document.querySelector('.menu');

hamb.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.title-nav');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
}


 // Open modal
     const openModal = document.getElementById('openModal');
     const modal = document.getElementById('authModal');
     const closeModal = document.getElementById('closeModal');

     openModal.addEventListener('click', () => {
         modal.style.display = 'flex';
     });

     // Close modal
     closeModal.addEventListener('click', () => {
         modal.style.display = 'none';
     });

     // Close modal when clicking outside of content
     window.addEventListener('click', (event) => {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });

     // Toggle between login and registration forms
     const loginForm = document.getElementById('loginForm');
     const registerForm = document.getElementById('registerForm');
     const showRegister = document.getElementById('showRegister');
     const showLogin = document.getElementById('showLogin');
     const modalTitle = document.getElementById('modalTitle');

     showRegister.addEventListener('click', () => {
         loginForm.style.display = 'none';
         registerForm.style.display = 'block';
         modalTitle.textContent = 'Registration';
     });

     showLogin.addEventListener('click', () => {
         registerForm.style.display = 'none';
         loginForm.style.display = 'block';
         modalTitle.textContent = "Log in";
     });

     // Login button handler
     document.getElementById('loginButton').addEventListener('click', () => {
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
         alert(`Successful login for: ${email}`);
         modal.style.display = 'none';
     });

     // Register button handler
     document.getElementById('registerButton').addEventListener('click', () => {
         const regEmail = document.getElementById('regEmail').value;
         const regPassword = document.getElementById('regPassword').value;
         const regConfirmPassword = document.getElementById('regConfirmPassword').value;

         if (regPassword === regConfirmPassword) {
             alert(`Registration successful for: ${regEmail}`);
             modal.style.display = 'none';
         } else {
             alert("Passwords do not match. Try again.");
         }
     });