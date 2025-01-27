import Image from "next/image";
import styles from "./AmbassadorQuote.module.scss";
import type { ReactNode } from "react";
import quoteIcon from "../../../../public/icons/quote.svg";

interface Props {
  children: ReactNode;
}

export function AmbassadorQuote({ children }: Props) {
  return (
    <div className={styles.quote}>
      <Image src={quoteIcon} alt="quote-icon" width={40.72} height={24} />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
