"use client";
import { AmbassadorCard } from "@/components/AmbassadorCard";
import styles from "./page.module.scss";
import { ArrowButtons, Carousel, CarouselApi } from "@/components/Carousel";
import { Slide } from "@/components/Carousel/Slide";
import { AMBASSADORS } from "@/data/ambassadors";
import { useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <div className={styles.page}>
      <Carousel
        onSlideChange={setActiveSlide}
        loop
        classes={{ container: styles.carouselContainer }}
        getCarouselApi={setCarouselApi}
      >
        {AMBASSADORS.map((ambassador, index) => {
          return (
            <Slide key={ambassador.name}>
              <AmbassadorCard
                image={ambassador.image}
                signature={ambassador.signature}
                background={ambassador.background}
                title={ambassador.tagLine}
                name={ambassador.name}
                quote={ambassador.quote}
                active={activeSlide === index}
              />
            </Slide>
          );
        })}
      </Carousel>
      <div className={styles.arrowButtonsWrapper}>
        {carouselApi && (
          <ArrowButtons
            carouselApi={carouselApi}
            classes={{ prev: styles.prevButton, next: styles.nextButton }}
          />
        )}
      </div>
      <div className={styles.background} />
    </div>
  );
}
