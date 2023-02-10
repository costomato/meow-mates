import Image from "next/image";
import { useState } from "react";
import { Animal } from "../../types/animal";
import { LandingCard } from "./card";
import styles from "./index.module.css";

const animals: Animal[] = [
  {
    id: 1,
    name: "Catastrophe",
    image: {
      url: ["/assets/blackcat1.png", "/assets/blackcat2.png"],
      alt_text: "this cat is a catastrophe",
    },
    description: "I am not in danger, Human, I am the danger!! (meows)",
    location: 12,
    age: 2,
    tags: ["purring", "scratching", "wrecking havoc"],
  },
  {
    id: 2,
    name: "DogoCop",
    image: {
      url: ["/assets/cutedoggie.png"],
      alt_text: "The DogoCop",
    },
    description: "I am a good boy and a good cop and a good dog!!",
    location: 3,
    age: 0.8,
    tags: ["barking", "sniffing"],
  },
  {
    id: 3,
    name: "Bojack",
    image: {
      url: ["/assets/horse.png"],
      alt_text: "The grass grazer",
    },
    description: "This horse has stamina",
    location: 6,
    age: 8,
    tags: ["neeing", "running"],
  },
  {
    id: 4,
    name: "Snowolf",
    image: {
      url: ["/assets/huskey1.png", "/assets/huskey2.png"],
      alt_text: "Huskey",
    },
    description: "This dog is a headache",
    location: 4.5,
    age: 3,
    tags: ["barking", "acting cute"],
  },
  {
    id: 5,
    name: "Napolean",
    image: {
      url: ["/assets/piggie.png"],
      alt_text: "Cute pig",
    },
    description: "This is a very intelligent pig",
    location: 1.4,
    age: 0.6,
    tags: ["oink"],
  },
  {
    id: 6,
    name: "Snowhite",
    image: {
      url: ["/assets/smallhuskey.png"],
      alt_text: "Small huskey",
    },
    description: "My cute huskey",
    location: 2.7,
    age: 2,
    tags: ["howling", "howling all day"],
  },
  {
    id: 7,
    name: "Blackie",
    image: {
      url: ["/assets/whitecat.png"],
      alt_text: "Cat",
    },
    description: "Not an easy one",
    location: 9,
    age: 3,
    tags: ["cutiecat", "cute acts"],
  },
];

export const Landing = () => {
  const [stack, setStack] = useState<Animal[]>(animals);
  // const [liked, setLiked] = useState<Animal[]>([]);
  // const [disliked, setDisliked] = useState<Animal[]>([]);
  // const [last, setLast] = useState<boolean | null>(null);

  const [newStack, setNewStack] = useState<[Animal, boolean]>([]);

  // function pushToLiked(animal: Animal) {
  //   setLiked((prev) => [...prev, animal]);
  // }

  // function popFromLiked() {
  //   setLiked((prev) => prev.filter((_p, i) => i !== prev.length - 1));
  // }

  // function pushToDisliked(animal: Animal) {
  //   setDisliked((prev) => [...prev, animal]);
  // }

  // function popFromDisliked() {
  //   setDisliked((prev) => prev.filter((_p, i) => i !== prev.length - 1));
  // }

  function pushToStack(animal: Animal) {
    setStack((prev) => [...prev, animal]);
  }

  function popFromStack() {
    setStack((prev) => prev.filter((_p, i) => i !== prev.length - 1));
  }

  function pushToNewStack(animal: Animal, isLiked: boolean) {
    setNewStack((prev) => [...prev, [animal, isLiked]]);
  }

  function popFromNewStack() {
    setNewStack((prev) => prev.filter((_p, i) => i !== prev.length - 1));
  }

  // function handleLike() {
  //   pushToLiked(stack[stack.length - 1]);
  //   popFromStack();
  //   setLast(true);
  // }
  // function handleDislike() {
  //   pushToDisliked(stack[stack.length - 1]);
  //   popFromStack();
  //   setLast(false);
  // }

  function handleLike() {
    pushToNewStack(stack[stack.length - 1], true);
    popFromStack();
    // setLast(true);
  }
  function handleDislike() {
    pushToNewStack(stack[stack.length - 1], false);
    popFromStack();
    // setLast(false);
  }

  // function handleReverse() {
  //   if (last === null) return;
  //   if (last) {
  //     pushToStack(liked[liked.length - 1]);
  //     popFromLiked();
  //     setLast(null);
  //   } else {
  //     pushToStack(disliked[disliked.length - 1]);
  //     popFromDisliked();
  //     setLast(null);
  //   }
  // }

  function handleReverse() {
    if (newStack.length == 0) return;
    pushToStack(newStack[newStack.length - 1][0]);
    popFromNewStack();
  }

  return (
    <div className={styles.landing_main}>
      <div className={styles.landing_feed_body}>
        {stack.length == 0 ? (
          <div className={styles.landing_feed_empty_body}>
            <div>You've run out of swipes</div>
            <div
              className={styles.landing_page_nav_icon_wrapper}
              onClick={handleReverse}
              style={{ border: "1px solid #fed661" }}
            >
              <Image
                alt="undo-icon"
                src="/icons/undo.svg"
                width="25"
                height="25"
              />
            </div>
          </div>
        ) : (
          stack.map((animal) => (
            <div className={styles.landing_feed_element} key={animal.id}>
              <LandingCard animal={animal} />
              <div className={styles.landing_feed_element_floating_area}>
                <div className={styles.landing_feed_element_description}>
                  <div className={styles.landing_feed_element_description_left}>
                    <h2>
                      {animal.name}
                      <span> {animal.age} years old</span>
                    </h2>
                  </div>
                  <div
                    className={styles.landing_feed_element_description_right}
                  ></div>
                </div>
                <div className={styles.landing_feed_element_buttons}>
                  <div
                    className={styles.landing_page_nav_icon_wrapper}
                    onClick={handleReverse}
                    style={{ border: "1px solid #fed661" }}
                  >
                    <Image
                      alt="undo-icon"
                      src="/icons/undo.svg"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div
                    className={styles.landing_page_nav_icon_wrapper}
                    onClick={handleDislike}
                    style={{ border: "1px solid #ff434f" }}
                  >
                    <Image
                      alt="close-icon"
                      src="/icons/close.svg"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div
                    className={styles.landing_page_nav_icon_wrapper}
                    onClick={handleLike}
                    style={{ border: "1px solid #30f3ef" }}
                  >
                    <Image
                      alt="favourite-icon"
                      src="/icons/favourite.svg"
                      width="25"
                      height="25"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
