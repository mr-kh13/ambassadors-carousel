import styles from "./AmbassadorCard.module.scss";
import { AmbassadorImage } from "./AmbassadorImage";
import { AmbassadorSignature } from "./AmbassadorSignature";
import { AmbassadorBackground } from "./AmbassadorBackground";
import { AmbassadorQuote } from "./AmbassadorQuote";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  image: string;
  signature: string;
  background: string;
  title: string;
  name: string;
  quote: string;
  active?: boolean;
}

export function AmbassadorCard({
  image,
  signature,
  title,
  name,
  background,
  quote,
  active = false,
}: Props) {
  return (
    <div
      className={clsx(styles.ambassadorCard, {
        [styles.active]: active,
      })}
    >
      <div className={styles.ambassadorInfo}>
        <div className={styles.imagesWrapper}>
          <Image
            src="/icons/sports.png"
            width={56}
            height={56}
            alt="sports-icon"
            className={styles.sportsIcon}
          />
          <div className={styles.signatureWrapper}>
            <AmbassadorSignature src={signature} alt={name} />
          </div>
          <div className={styles.imageWrapper}>
            <AmbassadorImage src={image} alt={name} />
          </div>
          <AmbassadorBackground src={background} alt="background" />
        </div>
        <div className={styles.title}>{title}</div>
        <h1 className={styles.name}>
          <span>{name}</span>
        </h1>
      </div>
      <div className={styles.quote}>
        <AmbassadorQuote>{quote}</AmbassadorQuote>
      </div>
    </div>
  );
}
