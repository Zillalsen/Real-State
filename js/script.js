let header = document.querySelector("header");
let upBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  changeBackground(), toTopBtn();
});

// change header background
function changeBackground() {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// show scroll to top  button
function toTopBtn() {
  if (window.scrollY >= 1000) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
}
// ============== swiper js ====================
var swiperPopular = new Swiper(".popular-cards", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ============= Accordion =============

let accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  let accordionHead = item.querySelector(".accordion-head");
  accordionHead.addEventListener("click", () => {
    let openItem = document.querySelector(".open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

function toggleItem(item) {
  let accordionContent = item.querySelector(".accordion-content");
  if (item.classList.contains("open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("open");
  }
}

// ================= scroll to section activate Link ===== //

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-change");
const darkTheme = "darktheme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Animation with scroll revall
const scr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2300,
  delay: 400,
  // reset: true
});
scr.reveal(
  `.home-data, .subscribe-container , a.footer-logo, .footer-description,.footer-content,.footer-information`
),
  scr.reveal(`.home-img , .popular-cards`, { origin: "bottom" }),
  scr.reveal(`.value-images , .contact-images`, { origin: "left" }),
  scr.reveal(`.value-content, .contact-content`, { origin: "right" }),
  scr.reveal(`.logos-container img , .contact-cards .boxs`, {
    interval: 100,
  });
scr.reveal(`.accordion-item`, { origin: "right", interval: 100 });
