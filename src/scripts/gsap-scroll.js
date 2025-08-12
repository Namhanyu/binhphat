import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Animate IntroductionSection
  gsap.fromTo(
    ".introduction-section",
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
        trigger: ".introduction-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate about-third image
  gsap.fromTo(
    ".about-third",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-third",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate FeatureSections
  gsap.utils.toArray(".feature-section").forEach((section, index) => {
    // Animate the entire section
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
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate content and image separately for more dynamic effect
    const content = section.querySelector(".feature-content");
    const image = section.querySelector(".feature-image");

    if (content) {
      gsap.fromTo(
        content,
        {
          x: index % 2 === 0 ? -60 : 60,
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
            start: "top 85%",
            end: "bottom 15%",
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
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  // Animate ThreePanelSection
  gsap.fromTo(
    ".three-panel-section",
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
        trigger: ".three-panel-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate individual panels
  gsap.utils.toArray(".panel-item").forEach((panel, index) => {
    gsap.fromTo(
      panel,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: ".three-panel-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Animate NewsSection
  gsap.fromTo(
    ".news-section",
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
        trigger: ".news-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate news items
  gsap.utils.toArray(".news-item").forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: ".news-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
