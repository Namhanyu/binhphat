import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initRestaurantFoodAnimations() {
  // Hero Section Animation
  const heroSection = document.querySelector(".page-hero-section");
  if (heroSection) {
    const heroContent = heroSection.querySelector(".hero-inner-content");

    if (heroContent) {
      gsap.set(heroContent, {
        opacity: 0,
        y: 50,
      });

      gsap.to(heroContent, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      });
    }
  }

  // Timeline Section Animation
  const timelineContent = document.querySelector(".timeline-content");

  if (timelineContent) {
    gsap.set(timelineContent, {
      opacity: 0,
      y: 30,
    });

    gsap.to(timelineContent, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: timelineContent,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }

  // Food Info Sections Animation
  const foodInfoSections = document.querySelectorAll(".food-info-section");
  foodInfoSections.forEach((section, index) => {
    const foodTitle = section.querySelector(".food-title");
    const foodImage = section.querySelector(".food-image");
    const foodContent = section.querySelector(".food-content");
    const menuItems = section.querySelectorAll(".menu-item");

    // Animate food title
    if (foodTitle) {
      gsap.set(foodTitle, {
        opacity: 0,
        y: 30,
      });

      gsap.to(foodTitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: foodTitle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate food image
    if (foodImage) {
      gsap.set(foodImage, {
        opacity: 0,
      });

      gsap.to(foodImage, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: foodImage,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate food content
    if (foodContent) {
      gsap.set(foodContent, {
        opacity: 0,
        y: section.classList.contains("reverse") ? 10 : -10,
      });

      gsap.to(foodContent, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: foodContent,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate menu items with stagger
    if (menuItems.length > 0) {
      gsap.set(menuItems, {
        opacity: 0,
        y: 20,
      });

      gsap.to(menuItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: menuItems[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  // Read More Button Animation
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button, index) => {
    gsap.set(button, {
      opacity: 0,
      y: 20,
    });

    gsap.to(button, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: button,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Drink Menu Tabs Animation
  const drinkMenuSection = document.querySelector(".drink-menu-tabs");
  if (drinkMenuSection) {
    const tabButtons = drinkMenuSection.querySelectorAll(".tab-button");
    const tabContents = drinkMenuSection.querySelectorAll(".tab-content");

    if (tabButtons.length > 0) {
      gsap.set(tabButtons, {
        opacity: 0,
        y: 20,
      });

      gsap.to(tabButtons, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: tabButtons[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (tabContents.length > 0) {
      gsap.set(tabContents, {
        opacity: 0,
        y: 20,
      });

      gsap.to(tabContents, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: tabContents[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }

  const wineImages = document.querySelectorAll('img[src*="wine"]');
  wineImages.forEach((image) => {
    gsap.set(image, {
      opacity: 0,
    });

    gsap.to(image, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}
