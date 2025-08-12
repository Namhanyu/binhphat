import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initRoomAnimations() {
  // Animate PageHeroSection
  gsap.fromTo(".page-hero-section", {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3
  });

  // Animate hero content elements
  gsap.fromTo(".page-hero-content", {
    y: 80,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.6
  });

  // Animate About Section
  gsap.fromTo(".about-section", {
    y: 80,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate Facility Overview Section
  gsap.fromTo(".facility-overview-section", {
    y: 80,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".facility-overview-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate room cards/items
  gsap.utils.toArray(".room-card").forEach((card, index) => {
    gsap.fromTo(card, {
      y: 60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: index * 0.2,
      scrollTrigger: {
        trigger: ".facility-overview-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate room details
  gsap.utils.toArray(".room-detail").forEach((detail, index) => {
    gsap.fromTo(detail, {
      x: index % 2 === 0 ? -40 : 40,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: detail,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate facility images
  gsap.utils.toArray(".facility-image").forEach((image, index) => {
    gsap.fromTo(image, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate room amenities
  gsap.utils.toArray(".amenity-item").forEach((item, index) => {
    gsap.fromTo(item, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: item.closest('.amenities-section') || item,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate room tabs if present
  gsap.utils.toArray(".room-tab").forEach((tab, index) => {
    gsap.fromTo(tab, {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: tab.closest('.room-tabs') || tab,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });
}
