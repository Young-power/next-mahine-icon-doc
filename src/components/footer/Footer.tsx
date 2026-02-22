"use client";

import LinkData from '../nav/Link';
import { communityLinks } from './dataType';
import Link from 'next/link';
import { VercelTriangle, Zap } from 'next-mahine-icon';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-700 px-6 py-10 text-sm text-gray-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="font-semibold text-lg text-black dark:text-white">Next Mahine Icon</h2>
          <p className="mt-2">
            Server-first icon library for Next.js with zero client-side JavaScript.
            <span>
              <Zap className='inline-flex font-bold ml-3 text-yellow-500 animate-bounce animation-duration-[2s]`' />
            </span>
          </p>
          <p className="mt-1 text-gray-600 dark:text-zinc-400">
            Lightweight, fully typed, and optimized for maximum performance and developer productivity.
          </p>
        </div>

        {/* Links */}
        <div className='hidden lg:block'>
          <h3 className="font-semibold text-black dark:text-white mb-2 underline">Resources</h3>
          <ul className="space-y-1">
            <LinkData />
          </ul>
        </div>

        {/* Community */}
        <div className='hidden lg:block'>
          <h3 className="font-semibold text-black dark:text-white mb-2 underline">Community</h3>
          <ul className="space-y-1">
            {communityLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 ease-in-out"
                  >
                    <Icon />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Links */}
        <div className='w-full grid grid-cols-2 lg:hidden'>
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-2 underline">Resources</h3>
            <ul className="space-y-1">
              <LinkData />
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-2 underline">Community</h3>
            <ul className="space-y-1">
              {communityLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 ease-in-out"
                    >
                      <Icon />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs lg:text-[15px] text-gray-400 dark:text-zinc-500">
        © {new Date().getFullYear()} Next Mahine Icon. All rights reserved.
        <div className="mt-4 flex w-full justify-center">
          <button className="flex items-center gap-2 bg-black dark:bg-zinc-700 text-white dark:text-white px-3 py-2 cursor-pointer rounded hover:bg-gray-900 dark:hover:bg-zinc-800 transition-colors duration-300">
            <VercelTriangle width={25} hanging={25} />
            <span className='text-lg'>Powered by Vercel</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;