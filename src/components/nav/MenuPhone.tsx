"use client";

import { X } from "next-mahine-icon";
import { motion } from "framer-motion";
import LinkData from "./Link";
import Dog from "../sideBar/Dog";

const MenuPhone = ({ close }: { close: () => void }) => {
  return (
    <>
      {/* Overlay semi-transparent animé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black z-40"
        onClick={close}
      />

      {/* Menu sliding */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 bg-white dark:bg-zinc-900 w-2/3 h-screen z-50 shadow-lg flex flex-col transition-colors duration-300"
      >
        {/* Header */}
        <div className="flex justify-between items-center py-6 px-5 border-b border-gray-200 dark:border-zinc-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Menu</h1>
          <X
            onClick={close}
            width={28}
            height={28}
            className="text-gray-600 dark:text-gray-300 cursor-pointer"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col mt-6 px-5 space-y-4">
          <ul className="space-y-3 text-xl">
            <LinkData />
          </ul>
        </nav>
        <Dog />

        {/* Footer */}
        <div className="mt-auto px-5 py-6 border-t border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
          © 2026 MonSite. Tous droits réservés.
        </div>
      </motion.div>
    </>
  );
};

export default MenuPhone;