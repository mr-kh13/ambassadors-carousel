import Image from "next/image";
import styles from "./AmbassadorSignature.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function AmbassadorSignature({ src, alt }: Props) {
  return (
    <div className={styles.signature}>
      <Image src={src} alt={alt} fill />
    </div>
  );
}
