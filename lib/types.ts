import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  website: string;  // Agrega esta línea
};
