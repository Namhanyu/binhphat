import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { type KeenSliderInstance } from "keen-slider";
import clsx from "clsx";
import image01 from "../../../assets/images/01.webp";
import image01_m from "../../../assets/images/home-mobile.webp";

type Banner = {
  image_url: string;
  image_sp_url: string;
};

export default function HomeSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetch(`${(import.meta as any).env.PUBLIC_API_URL}api/public/banners`)
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch(() =>
        setBanners([{ image_url: image01.src, image_sp_url: image01_m.src }])
      );
  }, []);

  if (banners.length === 0) {
    return <div className="w-screen h-screen bg-primary"></div>;
  }

  return <Slider banners={banners} />;
}

function Slider({ banners }: { banners: Banner[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState<KeenSliderInstance | null>(null);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created(slider) {
        setSlider(slider);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const goToSlide = (idx: number) => {
    if (slider) slider.moveToIdx(idx);
  };

  return (
    <div
      className={clsx(
        "h-screen relative",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-[30vh] before:pointer-events-none before:bg-gradient-to-b before:from-primary before:to-primary/0",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[30vh] after:pointer-events-none after:bg-gradient-to-t after:from-primary after:to-primary/0"
      )}
    >
      <div className="keen-slider max-h-screen h-full" ref={sliderRef}>
        {banners.map((banner, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={banner.image_sp_url || banner.image_url}
              />
              <img
                src={banner.image_url}
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      {banners.length > 1 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center gap-2 3xl:gap-[0.5vw] bottom-12 3xl:bottom-[3vw] z-10">
          {Array.from({ length: banners.length }).map((_, idx) => (
            <span
              key={idx}
              role="button"
              className={clsx(
                "cursor-pointer w-3 h-3 3xl:w-[0.75vw] 3xl:h-[0.75vw] rounded-full border border-white",
                idx === currentSlide ? "bg-primary" : "bg-white"
              )}
              aria-current={idx === currentSlide ? "true" : undefined}
              aria-label={
                idx === currentSlide
                  ? `Current slide ${idx + 1}`
                  : `Go to slide ${idx + 1}`
              }
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
