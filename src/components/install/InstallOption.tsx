"use client";

import { useState } from "react";
import { options, PackageManager } from "./optionData";
import { Check, Copy } from "next-mahine-icon";

const InstallOption = () => {
  const [selected, setSelected] = useState<PackageManager>("NPM");
  const [saved, setSaved] = useState<boolean>(false);

  const activeOption = options.find(o => o.item === selected)!;

  const copyFunc = () => {
    navigator.clipboard.writeText(activeOption.value);
    setSaved(true);
    setTimeout(() => setSaved(false), 5000);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">

      {/* Tabs */}
      <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl transition-colors duration-300">
        {options.map((data) => {
          const isActive = selected === data.item;

          return (
            <button
              key={data.item}
              onClick={() => setSelected(data.item)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer
                ${isActive
                  ? "bg-white text-zinc-900 shadow dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }
              `}
            >
              <span>{data.icon}</span>
              <span className="italic">{data.item}</span>
            </button>
          );
        })}
      </div>

      {/* Code block */}
      <div className="relative w-full lg:w-96 bg-zinc-100 dark:bg-zinc-800 text-black/70 dark:text-zinc-200 rounded-xl p-4 font-mono text-sm transition-colors duration-300">
        <code className="select-all font-semibold text-md lg:text-lg">
          {activeOption.value}
        </code>

        <button
          onClick={copyFunc}
          className="absolute top-3 right-0 text-xs px-1 py-1 rounded-md
                     bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-300 dark:text-zinc-200 transition-colors duration-300"
        >
          {saved
            ? <Check className="text-green-300" />
            : <Copy className="text-green-300 cursor-pointer" />}
        </button>
      </div>

    </div>
  );
};

export default InstallOption;