import Image from "next/image";
import styles from "./AmbassadorBackground.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function AmbassadorBackground({ src, alt }: Props) {
  return (
    <div className={styles.background}>
      <Image src={src} alt={alt} fill />
      <div className={styles.overlay} />
    </div>
  );
}
