(() => {
  "use strict";

  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  root.classList.add("js");

  // Remember the visitor's color preference.
  function initTheme() {
    const toggle = document.querySelector(".theme-toggle");
    const icon = toggle.querySelector(".theme-toggle__icon");
    let savedTheme;

    try {
      savedTheme = localStorage.getItem("jaymar-theme");
    } catch {
      savedTheme = null;
    }

    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    function setTheme(theme) {
      root.dataset.theme = theme;
      const isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
      icon.textContent = isDark ? "☀" : "☾";
    }

    setTheme(initialTheme);
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      try {
        localStorage.setItem("jaymar-theme", nextTheme);
      } catch {
        // The toggle still works when storage is unavailable.
      }
    });
  }

  // Keep the small-screen menu usable by mouse, touch, and keyboard.
  function initNavigation() {
    const toggle = document.querySelector(".nav__toggle");
    const links = document.querySelector(".nav__links");

    function closeMenu() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nav__toggle, .nav__links")) closeMenu();
    });
  }

  // Reveal sections once and animate skill levels when visible.
  function initReveal() {
    const targets = document.querySelectorAll(".reveal, .skills__group");
    if (!('IntersectionObserver' in window) || prefersReducedMotion.matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    targets.forEach((target) => observer.observe(target));
  }

  // Filter sample project cards by their category.
  function initProjectFilter() {
    const buttons = document.querySelectorAll(".project-filters__button");
    const cards = document.querySelectorAll(".project-card");
    const emptyMessage = document.querySelector(".projects__empty");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        let visibleCount = 0;

        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        cards.forEach((card) => {
          const visible = filter === "all" || card.dataset.category === filter;
          card.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        emptyMessage.hidden = visibleCount > 0;
      });
    });
  }

  // Highlight the section in view and show the return control below the hero.
  function initSectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const navLinks = [...document.querySelectorAll(".nav__link")];
    const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href")));
    const backToTop = document.querySelector(".back-to-top");
    const hero = document.querySelector(".hero");

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    sections.filter(Boolean).forEach((section) => sectionObserver.observe(section));

    const heroObserver = new IntersectionObserver(([entry]) => {
      backToTop.classList.toggle("is-visible", !entry.isIntersecting);
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

  // Show initials until a real portrait finishes loading.
  function initProfileImage() {
    const image = document.querySelector(".portrait__image");
    const showImage = () => {
      if (image.naturalWidth > 0) image.classList.add("is-loaded");
    };
    image.addEventListener("load", showImage);
    if (image.complete) showImage();
  }

  function initYear() {
    document.querySelector("#year").textContent = String(new Date().getFullYear());
  }

  initTheme();
  initNavigation();
  initReveal();
  initProjectFilter();
  initSectionObserver();
  initProfileImage();
  initYear();
})();
