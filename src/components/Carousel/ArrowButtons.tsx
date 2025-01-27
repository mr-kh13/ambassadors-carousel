"use client";
import { useCallback, useEffect, useState } from "react";
import type { CarouselApi } from "./types";
import chevronLeft from "../../../public/icons/chevron-left.svg";
import chevronRight from "../../../public/icons/chevron-right.svg";
import Image from "next/image";
import clsx from "clsx";
import styles from "./ArrowButtons.module.scss";

export interface ArrowsProps {
  classes?: {
    next?: string;
    prev?: string;
    disabled?: string;
  };
  iconColor?: string;
  iconSize?: number;
  carouselApi: CarouselApi;
}

export function ArrowButtons({ classes, carouselApi, ...rest }: ArrowsProps) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    const apiInstance = carouselApi;
    if (apiInstance) apiInstance.scrollPrev();
  }, [carouselApi]);

  const scrollNext = useCallback(() => {
    const apiInstance = carouselApi;
    if (apiInstance) apiInstance.scrollNext();
  }, [carouselApi]);

  useEffect(() => {
    const apiInstance = carouselApi;

    const updateStates = (emblaApi: CarouselApi) => {
      setPrevBtnDisabled(!(emblaApi?.canScrollPrev() ?? false));
      setNextBtnDisabled(!(emblaApi?.canScrollNext() ?? false));
    };

    updateStates(apiInstance);

    // Setup event listeners
    if (apiInstance) {
      apiInstance.on("init", updateStates);
      apiInstance.on("reInit", updateStates);
      apiInstance.on("select", updateStates);

      return () => {
        apiInstance.off("reInit", updateStates);
        apiInstance.off("select", updateStates);
      };
    }
  }, [carouselApi]);

  if (nextBtnDisabled && prevBtnDisabled) return null;

  return (
    <>
      <button
        disabled={nextBtnDisabled}
        className={clsx(classes?.next, styles.arrowButton)}
        onClick={scrollNext}
        {...rest}
      >
        <Image src={chevronLeft} width={64} height={64} alt="chevron-left" />
      </button>
      <button
        disabled={prevBtnDisabled}
        className={clsx(classes?.prev, styles.arrowButton)}
        onClick={scrollPrev}
        {...rest}
      >
        <Image src={chevronRight} width={64} height={64} alt="chevron-right" />
      </button>
    </>
  );
}
