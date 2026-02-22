"use client";

import Typewriter from "typewriter-effect";

export default function MyTypewriter() {
  return (
    <h1 className=" font-bold flex gap-x-3 text-lg">
      <span className="bg-linear-to-r lg:text-xl from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text  font-extrabold tracking-tight text-transparent ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Ouaf ouaf !")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Aouuuuuuh !")
              .pauseFor(2000)
              .deleteAll()
              .typeString("WOUAF ! WOUAF !")
              .pauseFor(2000)
              .start();
          }}
          options={{
            loop: true,
            delay: 120,       // vitesse d’écriture
            deleteSpeed: 100,  // vitesse suppression
          }}
        />
      </span>
    </h1>
  );
}
