"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Biografía");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Quién soy</SectionHeading>
      <p className="mb-3">
        Con una sólida experiencia en ventas, decidí cambiar mi rumbo y
        sumergirme en el mundo del <span className="underline">desarrollo web</span>, graduándome como  <span className="italic">Full Stack
        en el Bootcamp de Henry</span>. Lo que más disfruto de programar es la
        irresistible frustración que surge al enfrentarme a nuevos desafíos,
        seguida de las satisfacciones inmediatas que acompañan a la  <span className="italic"> resolución
        de problemas</span>. Mis <span className="underline">habilidades</span> se centran en  <span className="italic">React, Next, Node,
        JavaScript, Express y Sequelize</span> , con <span className="underline">experiencia</span>  en TypeScript y
        Tailwind. En mi tiempo libre, me dedico a mi pasión por la fotografía y
        soy un amante del cine, especialmente de Quentin Tarantino, con  <span className="underline">"Pulp
        Fiction"</span>  como mi película favorita. Actualmente,<span className="font-medium">busco una posición a
        tiempo completo como desarrollador de software</span> , ansioso por aportar mi
        experiencia y pasión a nuevos desafíos.
      </p>
    </motion.section>
  );
}

/* <span className="underline"></span> Subrayado // <span className="italic"></span> otra tipografia //<span className="font-medium"></span> */
