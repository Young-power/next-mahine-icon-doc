"use client";

import { Github, Linkedin } from "next-mahine-icon";
import Image from "next/image";
import { toast, ToastContainer } from 'react-toastify'

const Author = () => {
  return (
    <section className="w-96 py-16 text-center border border-zinc-200 dark:border-zinc-700 px-3 rounded-xl bg-white dark:bg-zinc-800 transition-colors duration-300">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
        draggable={false}
      />
      {/* Photo */}
      <Image
        src="/assets/Mahine.jpg"
        alt="Mahaman Mahine Kamagaté"
        width={120}
        height={120}
        className="mx-auto rounded-full"
      />

      {/* Nom */}
      <h1 className="mt-6 text-2xl font-bold text-gray-800 dark:text-white">
        Mahaman Mahine Kamagaté
      </h1>

      {/* Description courte */}
      <p className="mt-2 text-sm text-gray-600 dark:text-zinc-300">
        <span className="font-bold">CEO</span> & <span className="font-bold">Founder of M²K-Group</span> · Web & Mobile Developer · Creator of Next Mahine Icon · JavaScript & Python Enthusiast
      </p>

      {/* Description longue */}
      <p className="mt-6 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
        I’m the creator and maintainer of <strong>next-mahine-rsc-icon</strong>.
        I build developer tools focused on improving architecture, performance,
        and developer experience in modern Next.js applications, from Côte d’Ivoire 🇨🇮.
      </p>

      {/* Réseaux et liens */}
      <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700 dark:text-zinc-300">
        <a href="https://github.com/Young-power" target="_blank" aria-label="Github">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/mahine-kamagat%C3%A9-" target="_blank" aria-label="Linkedin">
          <Linkedin />
        </a>
        <span className="hover:underline cursor-pointer"
        onClick={()=>{
                toast.success("I don't have account no yet !");

        }}
        >Buy me a coffee</span>
        <a href="https://my-portfolio-one-livid-10.vercel.app/" target="_blank" className="hover:underline">
          Portfolio
        </a>
        <a href="https://www.youtube.com/@youngworker" target="_blank" className="hover:underline">
          Youtube
        </a>
      </div>
    </section>
  );
};

export default Author;