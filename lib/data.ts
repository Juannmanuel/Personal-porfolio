import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ADIPWeb from "@/public/ADIPWeb.jpeg";
import food from "@/public/food.jpg";
import rickandmorty from "@/public/rickandmorty.jpeg";
import portadaLassTimeEcommerce from "@/public/portadaLassTimeEcommerce.jpeg";
import quieroMiTarjeta from "@/public/QuieroMiTarjeta.jpeg";
import boonRod from "@/public/boonrod.jpeg"

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Biografía",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Aptitudes",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contáctame",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduado del Bootcamp Henry",
    location: "Mendoza, Argentina",
    description:
      "Me gradué como desarrollador Full Stack en el Bootcamp de Henry, con más de 800 horas de teoría y práctica. Durante este programa, adquirí conocimientos en tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y bases de datos.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Desarrollador Full-Stack",
    location: "Proyecto Individual: AppWeb Countries",
    description:
      "creación de la aplicación web 'Countries' como parte de mi proyecto individual en Henry. Esta aplicación permite a los usuarios explorar tarjetas con las banderas de diferentes países, proporcionando información detallada al hacer clic. En este proyecto, practiqué el manejo de estados globales y locales, formularios controlados, así como el filtrado de información, tanto individual como combinada.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Desarrollador Front-End",
    location: "La Plata, Buenos Aires",
    description:
      "Trabajé como desarrollador Front-End durante 2 meses. Durante este tiempo, tuve la oportunidad de contribuir al desarrollo de ADIP Web, una plataforma que facilita a los usuarios registrarse en el Club Deportivo ADIP, realizar pagos de cuotas mensuales y mantenerse al día con las noticias del club.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Quiero mi tarjeta!",
    location: "Mendoza, Argentina",
    description:
      "Como desarrollador Front-End, colaboré en la creación de una plataforma web para `Quiero mi tarjeta!`. Utilicé HTML, CSS y JavaScript para crear una experiencia atractiva y funcional. Los usuarios pueden explorar y personalizar diseños de tarjetas, realizar pedidos fácilmente y disfrutar de una navegación intuitiva.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  }
] as const;

export const projectsData = [
  {
    title: "BoonRod",
    description: "Desarrollo de una plataforma eCommerce para Boonrod, marca de ropa urbana. Se implementó una experiencia de compra sencilla y funcional para explorar y adquirir sus productos.",
    tags: ["React", "Redux", "SQL", "JavaScript", "HTML", "CSS", "Express.js"],
    imageUrl: boonRod,
    website: "https://boonrod.vercel.app"
  },
  {
    title: "Quiero mi tarjeta!",
    description: "Creación de una plataforma web para diseño de tarjetas. Realizando una experiencia intuitiva y funcional. Los usuarios pueden explorar y personalizar diseños fácilmente",
    tags: ["React", "vite","Redux", "CSS", "JavaScript", "Framer"],
    imageUrl: quieroMiTarjeta,
    website: "https://misquince-two.vercel.app/"
  },
  {
    title: "lassTime Food - Proyecto Individual",
    description: "Proyecto individual del bootcamp de Henry para aprobar la 4ta etapa del cursado",
    tags: ["React", "JavaScript", "Redux", "CSS", "Sequelize", "PostgreSQL", "vite"],
    imageUrl: food,
    website: "https://lass-time-food.vercel.app/"
  },
  {
    title: "ADIP Web",
    description: "Página web para el club deportivo ADIP de la provincia de Buenos Aires, La Plata, Argentina",
    tags: ["React", "Vite", "Nest.js", "Material UI", "JavaScript", "TypeScript", "Framer"],
    imageUrl: ADIPWeb,
    website: "https://front-deploy-adipweb.onrender.com/"
  },
  {
    title: "Rick and Morty",
    description: "Proyecto individual realizado entre la 2da y 3ra etapa del bootcamp de Henry",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: rickandmorty,
    website: "https://rickandmorty.fandom.com/es/wiki/Rickipedia"
  },
  {
    title: "lassTime ecommerce",
    description: "LassTime Ecommerce es un proyecto personal desarrollado como una plataforma de práctica. Explora el resultado y descubre mi enfoque en la mejora continua",
    tags: ["React", "vite","Redux","SQL", "CSS", "JavaScript"],
    imageUrl: portadaLassTimeEcommerce,
    website: "https://lass-time.vercel.app"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
