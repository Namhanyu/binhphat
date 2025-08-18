import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scroller = document.querySelector("#snap-container");

// Make ScrollTrigger use the snapping container as its scroller
ScrollTrigger.defaults({ scroller, ease: "power2.out" });

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // ABOUT
  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  aboutTimeline
    .from(
      "#about h2",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      0.3
    )
    .from(
      "#about p",
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      0.5
    )
    .from(
      "#about button",
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      0.7
    );

  gsap.utils.toArray("#about .group").forEach((panel, index) => {
    aboutTimeline.from(
      panel,
      {
        x: 100,
        opacity: 0,
        duration: 1.2,
      },
      0.4 + index * 0.2
    );
  });

  // NEWS
  const newsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#news",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  newsTimeline
    .from(
      "#news h2",
      {
        y: -50,
        opacity: 0,
        duration: 1,
      },
      0.3
    )
    .from(
      "#news button",
      {
        y: -20,
        opacity: 0,
        duration: 0.8,
      },
      0.4
    );

  gsap.utils.toArray("#news .group").forEach((panel, index) => {
    newsTimeline.from(
      panel,
      {
        x: 100,
        opacity: 0,
        duration: 1.2,
      },
      0.5 + index * 0.2
    );
  });

  // OPERATIONS
  const operationsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#operations",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  operationsTimeline
    .from(
      "#operations .text-5xl",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      1
    )
    .from(
      "#operations .text-3xl",
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      1.3
    )
    .from(
      "#operations .text-justify",
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      1.6
    )
    .from(
      "#operations button",
      {
        y: 20,
        opacity: 0,
        duration: 1,
      },
      1.9
    );

  gsap.utils.toArray("#operations .group").forEach((panel, index) => {
    operationsTimeline.from(
      panel,
      {
        x: 100,
        opacity: 0,
        duration: 1.2,
      },
      0.3 + index * 0.5
    );
  });

  // METRICS

  const metricsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#metrics",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  metricsTimeline
    .from(
      "#metrics svg",
      {
        y: -30,
        opacity: 0,
        duration: 1,
      },
      0.3
    )
    .from(
      "#metrics h3",
      {
        y: -30,
        opacity: 0,
        duration: 1,
      },
      0.7
    );

  gsap.utils.toArray("#metrics .group").forEach((panel, index) => {
    metricsTimeline.from(
      panel,
      {
        y: 50,
        opacity: 0,
        duration: 0.7,
      },
      1 + index * 0.2
    );
  });

  // PROJECTS

  const projectsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  projectsTimeline
    .from(
      "#projects h2",
      {
        y: -50,
        opacity: 0,
        duration: 1,
      },
      0.3
    )
    .from(
      "#projects button",
      {
        y: -20,
        opacity: 0,
        duration: 0.8,
      },
      0.5
    )
    .from(
      "#projects .text-3xl",
      {
        y: -20,
        opacity: 0,
        duration: 0.8,
      },
      0.7
    )
    .from(
      "#projects .bg-white",
      {
        opacity: 0,
        duration: 0.8,
      },
      0.9
    );

  gsap.utils.toArray("#projects .group").forEach((panel, index) => {
    projectsTimeline.from(
      panel,
      {
        x: -50,
        opacity: 0,
        duration: 0.8,
      },
      0.9 + index * 0.2
    );
  });


  // INTRODUCTION PAGE

  initSectionAnimations("#hero");
  initSectionAnimations("#messages");
  initSectionAnimations("#vision");
  initSectionAnimations("#core_values");
  initSectionAnimations("#history");
  initSectionAnimations("#certification");
  initSectionAnimations("#partners");
  initSectionAnimations("#contact");

  // OPERATION FIELDS
  initSectionAnimations("#construction");
  initSectionAnimations("#electromechanical");
  initSectionAnimations("#safety");
  initSectionAnimations("#equipment");

  window.addEventListener("load", () => ScrollTrigger.refresh());
}

function initSectionAnimations(parent) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
    },
  });

  gsap.utils.toArray(`${parent} [data-animate]`).forEach((panel, index) => {
    const transform = {
      opacity: 0,
    };

    if (panel.dataset.x) {
      transform.x = Number(panel.dataset.x);
    }

    if (panel.dataset.y) {
      transform.y = Number(panel.dataset.y);
    }

    if (panel.dataset.scaleX) {
      transform.scaleX = Number(panel.dataset.scaleX);
    }

    if (panel.dataset.scaleY) {
      transform.scaleY = Number(panel.dataset.scaleY);
    }

    if (panel.dataset.duration) {
      transform.duration = Number(panel.dataset.duration);
    }

    timeline.from(
      panel,
      {
        duration: 1,
        ...transform,
      },
      0.3 + index * (Number(panel.dataset.delay) || 0.3)
    );
  });
}
