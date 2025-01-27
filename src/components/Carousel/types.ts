import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import type { ReactNode } from "react";

export type CarouselApi = EmblaCarouselType;

export interface CarouselProps extends EmblaOptionsType {
  children: ReactNode;
  className?: string;
  classes?: { container?: string };
  onSlideChange?: (selectedSlideIndex: number) => void;
  getCarouselApi?: (carouselApi: CarouselApi) => void;
}
