import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initFacilityAnimations() {
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

  // Animate Introduction Sections
  gsap.utils.toArray(".introduction-section").forEach((section, index) => {
    gsap.fromTo(section, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate FullImageSection
  gsap.utils.toArray(".full-image-section").forEach((section, index) => {
    gsap.fromTo(section, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate Facility Sections
  gsap.utils.toArray(".facility-section").forEach((section, index) => {
    gsap.fromTo(section, {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate facility content and image separately
    const content = section.querySelector(".facility-content");
    const image = section.querySelector(".facility-image");
    
    if (content) {
      gsap.fromTo(content, {
        x: index % 2 === 0 ? -10 : 10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }

    if (image) {
      gsap.fromTo(image, {
        x: index % 2 === 0 ? 10 : -10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }
  });

  // Animate facility details
  gsap.utils.toArray(".facility-detail").forEach((detail, index) => {
    gsap.fromTo(detail, {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: detail,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });
  });
}
