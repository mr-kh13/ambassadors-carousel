"use client";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";
import type { CarouselProps, CarouselApi } from "./types";
import styles from "./Carousel.module.scss";

export function Carousel({
  children,
  className,
  classes,
  onSlideChange,
  getCarouselApi,
  align = "center",
  containScroll = "trimSnaps",
  slidesToScroll = 1,
  ...rest
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...rest,
    align,
    containScroll,
    slidesToScroll,
  });

  const slidesInView = useCallback((api: CarouselApi) => {
    if (onSlideChange) onSlideChange(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (getCarouselApi && emblaApi) getCarouselApi(emblaApi);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi && onSlideChange) {
      emblaApi.on("slidesInView", slidesInView);
    }
    return () => {
      if (emblaApi && onSlideChange) {
        emblaApi.off("slidesInView", slidesInView);
      }
    };
  }, [emblaApi, slidesInView]);

  return (
    <div ref={emblaRef} className={clsx(styles.embla, className)}>
      <div className={clsx(styles.emblaContainer, classes?.container)}>
        {children}
      </div>
    </div>
  );
}
