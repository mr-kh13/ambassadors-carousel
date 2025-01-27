import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Slide.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className }: Props) {
  return <div className={clsx(styles.emblaSlide, className)}>{children}</div>;
}
