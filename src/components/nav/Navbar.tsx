"use client";

import { Github, Package } from 'next-mahine-icon';
import Link from 'next/link';
import Laptop from './Laptop';
import Phone from './Phone';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../darkMode/ThemeToggle';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathName = usePathname();
   const [version, setVersion] = useState<string>("");
     


    useEffect(() => {
        const getVersion = async () => {

        try {
            const res = await fetch("/api/version");
            const data = await res.json();
            setVersion(data.version)

        } catch (error) {

            console.log(`Erreur de la récuperation de la version: ${error}`)

        }

    }
        getVersion();
    }, [])


  return (
    <header className="fixed z-40 flex w-full justify-between lg:justify-center h-20 items-center p-4 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 shadow-sm">

      {/* Logo */}
      {pathName !== "/" && (
        <div className='hidden lg:inline-block mr-56 dark:bg-white dark:rounded-full'>
          <Image src={"/assets/logo2.png"} width={60} height={60} alt='logo' />
        </div>
      )}

      {/* Mobile menu */}
      <Phone />

      {/* Laptop menu */}
      <Laptop />

      {/* Icons & Theme toggle */}
      <div className="flex justify-center items-center lg:ml-32 space-x-1">

        {/* Theme switcher */}
        <ThemeToggle />

        {/* Github */}
        <div className='flex justify-center items-center  space-x-2'>
          <Link href={"https://github.com/Young-power/next-mahine-icon"}  className='flex justify-center items-center hover:text-blue-500 transition-colors duration-300'>
            <Github className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300 ease-in-out" />
          </Link>

          {/* Package version */}
          <Link href={"https://www.npmjs.com/package/next-mahine-icon"} className='flex justify-center items-center space-x-1'>
            <Package className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300 ease-in-out" />
            <span className='text-black dark:text-white'>{version}</span>
          </Link>
        </div>


      </div>

    </header>
  );
};

export default Navbar;