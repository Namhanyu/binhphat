import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initStoryAnimations() {
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

  // Animate FeatureSectionV2
  gsap.fromTo(".feature-section-v2", {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".feature-section-v2",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate feature content and images separately
  gsap.fromTo(".feature-v2-content", {
    x: -60,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.0,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".feature-section-v2",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.fromTo(".feature-v2-image", {
    x: 60,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.0,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".feature-section-v2",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate StoryTabs
  gsap.fromTo(".story-tabs", {
    y: 80,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".story-tabs",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Animate tab headers
  gsap.utils.toArray(".story-tab-header").forEach((tab, index) => {
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
        trigger: ".story-tabs",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate tab content
  gsap.fromTo(".story-tab-content", {
    y: 60,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".story-tabs",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
}
