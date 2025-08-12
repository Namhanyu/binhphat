import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initOthersAnimations() {
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

  // Plan Card Sections Animation
  const planCardSections = document.querySelectorAll(".plan-card-section");
  planCardSections.forEach((section) => {
    const planTitle = section.querySelector(".plan-title");
    const planImage = section.querySelector(".plan-image");
    const planContents = section.querySelectorAll(".plan-content");
    const featureLinks = section.querySelectorAll(".feature-link");

    // Animate plan title
    if (planTitle) {
      gsap.set(planTitle, {
        opacity: 0,
        y: 30,
      });

      gsap.to(planTitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: planTitle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate plan image
    if (planImage) {
      gsap.set(planImage, {
        opacity: 0,
      });

      gsap.to(planImage, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: planImage,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate plan content
    if (planContents.length > 0) {
      gsap.set(planContents, {
        opacity: 0,
        x: section.classList.contains("reverse") ? 40 : -40,
      });

      gsap.to(planContents, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: planContents[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate feature links
    if (featureLinks.length > 0) {
      gsap.set(featureLinks, {
        opacity: 0,
        y: 15,
      });

      gsap.to(featureLinks, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: featureLinks[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  // Main Button Animation
  const mainButtons = document.querySelectorAll(".main-button");
  mainButtons.forEach((button, index) => {
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

  // Tea Pairing Section Animation
  const teaPairingTitle = document.querySelector(".title-section");
  if (teaPairingTitle) {
    gsap.set(teaPairingTitle, {
      opacity: 0,
      y: 30,
    });

    gsap.to(teaPairingTitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: teaPairingTitle,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }

  // Tea Pairing Items Animation
  const teaPairingSections = document.querySelectorAll(".tea-pairing-section");
  teaPairingSections.forEach((section) => {
    const teaImage = section.querySelector(".tea-image");
    const teaContent = section.querySelector(".tea-content");
    const teaTitle = section.querySelector(".tea-title");
    const teaDetails = section.querySelectorAll(".tea-detail");

    // Animate tea image
    if (teaImage) {
      gsap.set(teaImage, {
        opacity: 0,
      });

      gsap.to(teaImage, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teaImage,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate tea title
    if (teaTitle) {
      gsap.set(teaTitle, {
        opacity: 0,
        y: 30,
      });

      gsap.to(teaTitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teaTitle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate tea content
    if (teaContent) {
      gsap.set(teaContent, {
        opacity: 0,
        x: section.classList.contains("reverse") ? 40 : -40,
      });

      gsap.to(teaContent, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teaContent,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate tea details with stagger
    if (teaDetails.length > 0) {
      gsap.set(teaDetails, {
        opacity: 0,
        y: 15,
      });

      gsap.to(teaDetails, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: teaDetails[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  // About Section Animation (at bottom)
  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    const aboutContent = aboutSection.querySelector(".about-content");
    const contactItems = aboutSection.querySelectorAll(".content");

    if (aboutContent) {
      gsap.set(aboutContent, {
        opacity: 0,
        y: 50,
      });

      gsap.to(aboutContent, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContent,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate contact items with stagger
    if (contactItems.length > 0) {
      gsap.set(contactItems, {
        opacity: 0,
        x: -30,
      });

      gsap.to(contactItems, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contactItems[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }

  // Tea Pairing Header Image Animation
  const teaPairingImage = document.querySelector('img[src*="main03"]');
  if (teaPairingImage) {
    gsap.set(teaPairingImage, {
      opacity: 0,
    });

    gsap.to(teaPairingImage, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: teaPairingImage,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }
}
