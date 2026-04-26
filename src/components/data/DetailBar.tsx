"use client";

import { Copy, X } from "next-mahine-icon";
import { IconItem } from "./icons";
import { motion } from "framer-motion";
import { toast } from "react-toastify";


type dataType = {
  select: IconItem;
  setSelect: (icon: IconItem | null) => void;
};

const copyImport = (name: string) => {
  navigator.clipboard.writeText(
    `import { ${name} } from 'next-mahine-icon'`
  )
  toast.success("Copied successfully", {
    position: "top-center",
    autoClose: 3000,
  });
}

const copyText = (name: string) => {

  navigator.clipboard.writeText(
    `<${name} />`
  );
  toast.success(
    <span>
      Copied{" "}
      <span className="font-bold text-red-400">{name}</span>{" "}
      successfully
    </span>, {
    position: "top-center",
    autoClose: 3000,
  });
}


const DetailBar = ({ select, setSelect }: dataType) => {
  return (
    <>
      {/* 🚀 Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="fixed right-0 top-0 h-screen w-80 bg-white dark:bg-zinc-900 z-50 shadow-2xl border-l border-gray-200 dark:border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col h-full dark:border dark:rounded-2xl dark:border-white">
          {/* ❌ Close button top */}
          <div className="flex justify-end">
            <button
              onClick={() => setSelect(null)}
              className="p-2 rounded-md hover:bg-red-400
              transition-colors duration-300 cursor-pointer hover:text-white  "
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ✨ Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-5 mt-4"
          >
            {/* Icon */}
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-zinc-800 shadow-inner">
              <select.component className="w-16 h-16 text-gray-700 dark:text-gray-200" />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {select.name}
            </h2>

            {/* Category */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {select.category}
            </p>

            {/* 📦 Copy import */}
            <button
              className="w-full px-4 py-2 rounded-lg 
              bg-blue-600 dark:bg-blue-500 text-white 
              hover:bg-blue-700 dark:hover:bg-blue-600 
              transition shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => copyImport(select.name)}
            >
              Copy import
            </button>

            {/* 💻 JSX preview */}
            <div className="flex items-center justify-between w-full bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 py-2 shadow-sm border border-gray-300 dark:border-zinc-700">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100 select-all">
                {`<${select.name} />`}
              </span>

              <button
                className="p-1 cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                onClick={() => copyText(select.name)}
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* 🔴 Close button bottom */}
            <button
              className="
              mt-4 w-full px-4 py-2 rounded-lg font-medium
              bg-red-500/10 text-red-500
              dark:bg-red-500/10 dark:text-red-400
              hover:bg-red-500 hover:text-white
              transition-all duration-200
              border border-red-500/30 cursor-pointer
              "
              onClick={() => setSelect(null)}
            >
              Close panel
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default DetailBar;