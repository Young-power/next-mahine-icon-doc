"use client";

import ButtonTop from "@/components/goTop/ButtonTop";
import { CodeIcon, Eye, List, MahineIcon, NextjsIcon, Package, ReactIcon, User, Whatsapp } from "next-mahine-icon";
import Link from "next/link";

type DataLibType = {
  link: string,
  title: string,
  description: string
}

const Guide = () => {
  const dataLib: DataLibType[] = [
    {
      link: "https://next-mahine-rsc-doc.vercel.app/",
      title: "Next-mahine-rsc-inspector",
      description: " – A lightweight tool to inspect React Server Components (RSC) in Next.js projects."
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 w-full py-24 transition-colors duration-300">
      <ButtonTop />
      <main className="max-w-4xl mx-auto p-6 bg-zinc-50 dark:bg-zinc-800 text-gray-800 dark:text-zinc-300 rounded-xl transition-colors duration-300">
        
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Next Mahine Icon Guide <MahineIcon className="inline-flex" /> 
        </h1>

        {/* What is Next Mahine Icon? */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">What is Next Mahine Icon?</h2>
          <p className="mb-2">
            Next Mahine Icon is a server-first icon library for Next.js with zero client-side JavaScript.
            It provides a comprehensive collection of SVG icons that are fully typed and optimized for modern web applications.
          </p>
          <p>
            The library empowers developers to add high-quality icons quickly while maintaining small bundle sizes and maximum performance.
          </p>
        </section>

        {/* Available Icons */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-black dark:text-white">
            <List className="w-6 h-6 inline-flex" />
            Available Icons
          </h2>
          <p className="mb-2">
            Next Mahine Icon contains multiple icon variants and states, allowing you to choose the best option for your design needs.
          </p>
          <p>
            If a desired icon isn’t available, you can request a new icon, and contributors will help expand the library.
          </p>
          <p>
            With more icons to choose from, developers have more options for fast and elegant UI implementations.
          </p>
        </section>

        {/* Complete Set of Icons */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">Complete Set of Icons</h2>
          <p className="mb-2">
            As new projects and applications emerge, Next Mahine Icon aims to provide a complete set of icons for every scenario.
            All icons follow consistent design rules to maintain recognizability, readability, and style harmony.
          </p>
        </section>

        {/* Code Optimization */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-black dark:text-white">
            <CodeIcon className="inline-flex" />
            Code Optimization
          </h2>
          <p className="mb-2">
            Icons are delivered as lightweight SVGs with full tree-shaking support. Only the icons you import are included in your build,
            keeping your bundle size minimal and performance high.
          </p>
        </section>

        {/* Accessibility */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-black dark:text-white">
            <Eye className="inline-flex" />
            Accessibility
          </h2>
          <p>
            Icons are designed to convey meaning visually, but not everyone may interpret them the same way.
          </p>
          <p>
            Next Mahine Icon encourages accessible usage patterns, including proper aria attributes and descriptive titles.
          </p>
        </section>

        {/* Official Packages */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-black dark:text-white">
            <Package className="inline-flex" />
            Official Packages
          </h2>
          <p>
            Next Mahine Icon provides packages for: <br />
            <span className="font-semibold">React <ReactIcon className="text-blue-500 inline-flex" /></span> <br />
            <span className="font-semibold">Next.js <NextjsIcon width={28} height={28} className="inline-flex" /></span>.
          </p>
          <p>
            This makes it easy to integrate the icons into modern web applications with minimal setup and optimal performance.
          </p>
        </section>

        {/* Other Libraries */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-black dark:text-white">
            <User className="inline-flex" />
            Other Libraries by the Author
          </h2>
          <p className="mb-2">
            The author has also developed other useful libraries for Next.js projects:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            {dataLib.map((data, index) => (
              <li key={index}>
                <Link href={data.link} target="_blank" className="text-blue-500 hover:underline">
                  {data.title}
                </Link>
                {data.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Community */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">Community</h2>
          <p>
            If you have questions or want to contribute, join our community on Whatsapp and Discord.
            Your feedback helps the library grow and stay useful for developers worldwide.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 mt-3">
            <Link
              href="https://discord.gg/daT2d2D54"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-400 dark:bg-blue-600 w-52 px-5 py-1 rounded-lg text-zinc-50 hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <User className="w-5 h-5" /> Join our Discord
            </Link>

            <Link
              href="https://discord.gg/daT2d2D54"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-400 dark:bg-blue-600 w-52 px-5 py-1 rounded-lg text-zinc-50 hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <Whatsapp className="w-5 h-5 text-green-400" /> Join our Whatsapp
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Guide;