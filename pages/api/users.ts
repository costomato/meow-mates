// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Animal } from "../../types/animal";

const animals: Animal[] = [
  {
    id: 1,
    name: "Catastrophe",
    image: {
      url: ["/assets/blackcat1.png", "/assets/blackcat2.png"],
      alt_text: "this cat is a catastrophe",
    },
    description: "I am not in danger, Human, I am the danger!! (meows)",
    location: "My Humans's House",
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
    location: "my owner's house",
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
    location: "grassfield",
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
    location: "Miami",
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
    location: "Sydney",
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
    location: "Alaska",
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
    location: "Istanbul",
    age: 3,
    tags: ["cutiecat", "cute acts"],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Animal[]>
) {
  res.status(200).json(animals);
}
