import Image from "next/image";
import styles from "./AmbassadorImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function AmbassadorImage({ src, alt }: Props) {
  return (
    <div className={styles.image}>
      <Image src={src} alt={alt} fill />
    </div>
  );
}
