export type Animal = {
  id: number;
  name: string;
  image: {
    url: string[];
    alt_text: string;
  };
  description: string;
  location: string;
  age: number;
  tags: string[];
};
