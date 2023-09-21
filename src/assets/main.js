let template = document.body;

export function handle_mobile_nav() {
  let btn = template.querySelector(".navbar-dropdown"),
    nav = template.querySelector("header nav"),
    overlay = document.createElement("div");
  overlay.classList.add("overlay");

  if (btn) {
    btn.addEventListener("click", () => {
      nav.classList.add("overflow-hidden");
      if (!template.querySelector(".overlay")) {
        template.querySelector("header .container").appendChild(overlay);
      }
      nav.className = "show animated bounceInLeft";
    });
    const hideSideBar = () => {
      template.classList.remove("overflow-hidden");
      overlay.remove();
      if (nav.classList.contains("animated")) {
        nav.className = "show animated bounceOutLeft";
        setTimeout(() => {
          nav.className = "";
        }, 300);
      }
    };
    overlay.addEventListener("click", () => hideSideBar());
    template.querySelectorAll("header .nav-bar a").forEach((item) => {
      item.addEventListener("click", () => {
        hideSideBar();
      });
    });
  }
}
export function handleScroll() {
  if (window.scrollY > 20) {
    document.querySelector("header").classList.add("fixed-top");
  } else {
    document.querySelector("header").classList.remove("fixed-top");
  }
}
