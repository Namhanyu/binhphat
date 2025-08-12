import { gsap } from "gsap";

export function animateHeroSection() {
  gsap.set(".hero-inner-left", { x: -100, opacity: 0 });
  gsap.set(".hero-inner-right", { x: 100, opacity: 0 });
  gsap.set(".hero-center-content", { y: 50, opacity: 0 });

  const tl = gsap.timeline();

  tl.to(".hero-inner-left", {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  })

    .to(
      ".hero-inner-right",
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8"
    )

    .to(
      ".hero-center-content",
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
      },
      "-=0.6"
    );
}
