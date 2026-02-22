"use client";

import React from "react";
import Author from "./@author/page";
import ButtonTop from "@/components/goTop/ButtonTop";

const License = () => {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-900 w-full py-24 transition-colors duration-300">
      <ButtonTop />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          
          {/* Carte principale */}
          <div className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 space-y-8 shadow-sm overflow-y-auto transition-colors duration-300">
            
            {/* Title */}
            <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
              📄 Next Mahine Icon License
            </h1>

            {/* License Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                ISC License
              </h2>
              <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
                <p>Copyright (c) 2026 Next Mahine Icon Contributors</p>
                <p>
                  Permission to use, copy, modify, and/or distribute this software
                  for any purpose with or without fee is hereby granted, provided
                  that the above copyright notice and this permission notice appear
                  in all copies.
                </p>
                <p>
                  This means you are free to use this library in personal,
                  commercial, and open-source projects without restriction.
                </p>
              </div>
            </section>

            <div className="border-t border-zinc-200 dark:border-zinc-700" />

            {/* Disclaimer Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                Disclaimer
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND THE AUTHORS DISCLAIM ALL
                WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED
                WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY DAMAGES ARISING
                FROM THE USE OR PERFORMANCE OF THIS SOFTWARE.
              </p>
            </section>

            <div className="border-t border-zinc-200 dark:border-zinc-700" />

            {/* Third-Party Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                Third-Party Notice
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                This project is inspired by and partially based on{" "}
                <span className="font-semibold">Lucide React</span>. Some concepts,
                structure, and design ideas are derived from the Lucide ecosystem
                to ensure consistency and usability across modern applications.
              </p>
            </section>

            <div className="border-t border-zinc-200 dark:border-zinc-700" />

            {/* MIT License Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                MIT License (Lucide / Feather Portions)
              </h2>
              <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
                <p>Copyright (c) 2013–2026 Lucide Contributors</p>
                <p>Copyright (c) 2013–2026 Cole Bemis</p>
                <p>
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files to deal in the Software without restriction...
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  The original MIT license terms apply to all portions derived from
                  Lucide and Feather.
                </p>
              </div>
            </section>

            <div className="border-t border-zinc-200 dark:border-zinc-700" />

            {/* Open Source Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                Open Source Commitment
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Next Mahine Icon is an open-source project built for developers who
                want fast, lightweight, and server-first icons in Next.js
                applications. We welcome contributions, improvements, and community
                feedback.
              </p>
            </section>

            <div className="border-t border-zinc-200 dark:border-zinc-700" />

            {/* Summary Section */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                Summary
              </h2>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
                <li>✅ Free for personal and commercial use</li>
                <li>✅ Open-source and community-driven</li>
                <li>✅ Inspired by modern icon systems</li>
                <li>❌ No warranty provided</li>
              </ul>
            </section>

            {/* Footer */}
            <div className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 text-center">
              Open Source • Built with ❤️ using Next.js ⚡
            </div>
          </div>

          {/* Author Section à droite */}
          <div className="w-full lg:w-1/3 h-fit lg:ml-16">
            <Author />
          </div>

        </div>
      </div>
    </main>
  );
};

export default License;