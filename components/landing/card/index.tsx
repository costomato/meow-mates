import Image from "next/image";
import { Animal } from "../../../types/animal";
import styles from "./index.module.css";

type LandingCardProps = {
  animal: Animal;
};

export const LandingCard = ({ animal }: LandingCardProps) => {
  // console.log(animal, animal.image);
  return (
    <div className={styles.landing_card_main}>
      <Image
        src={animal.image.url[0]}
        fill
        style={{ objectFit: "cover" }}
        alt={animal.image.alt_text}
      />
    </div>
  );
};
