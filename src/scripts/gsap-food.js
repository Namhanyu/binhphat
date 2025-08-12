import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initFoodAnimations() {
  // Animate PageHeroSection
  gsap.fromTo(
    ".page-hero-section",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3,
    }
  );

  // Animate hero content elements
  gsap.fromTo(
    ".page-hero-content",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.6,
    }
  );

  // Animate Introduction Sections
  gsap.utils.toArray(".introduction-section").forEach((section, index) => {
    gsap.fromTo(
      section,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Animate FullImageSection
  gsap.fromTo(
    ".full-image-section",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".full-image-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate Menu Sections
  gsap.utils.toArray(".menu-section").forEach((section, index) => {
    gsap.fromTo(
      section,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate menu items
    gsap.utils
      .toArray(
        `${
          section.querySelector
            ? ""
            : ".menu-section:nth-child(" + (index + 1) + ")"
        } .menu-item`
      )
      .forEach((item, itemIndex) => {
        gsap.fromTo(
          item,
          {
            x: itemIndex % 2 === 0 ? -40 : 40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: itemIndex * 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none",
            },
          }
        );
      });
  });

  // Animate About Section
  gsap.fromTo(
    ".about-section",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate Course Menu Section
  gsap.fromTo(
    ".course-menu",
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".course-menu",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate Course Info Sections
  gsap.utils.toArray(".course-info-section").forEach((section, index) => {
    gsap.fromTo(
      section,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate course content and image separately
    const content = section.querySelector(".course-content");
    const image = section.querySelector(".course-image");

    if (content) {
      gsap.fromTo(
        content,
        {
          x: index % 2 === 0 ? -30 : 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (image) {
      gsap.fromTo(
        image,
        {
          x: index % 2 === 0 ? 60 : -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  // Animate Breakfast Section
  gsap.fromTo(
    ".breakfast-section",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".breakfast-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate Chef Section
  gsap.fromTo(
    ".chef-section",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".chef-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
