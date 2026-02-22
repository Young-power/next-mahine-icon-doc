"use client";

import { Check, Copy, Download } from "next-mahine-icon";
import { useState } from "react";

type Props = {
  code: string;
  filename: string;
};

export default function CodeBlockLight({ code, filename }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 transition-colors duration-300">

      {/* Buttons */}
      <div className="absolute right-2 top-2 flex gap-2">
        <button
          onClick={copy}
          className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-300"
        >
          {copied ? (
            <Check className="h-7 w-7 text-green-500" />
          ) : (
            <Copy className="h-5 w-5 text-black dark:text-zinc-200" />
          )}
        </button>

        <button
          onClick={download}
          className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-300"
        >
          <Download className="h-5 w-5 text-black dark:text-zinc-200" />
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto bg-zinc-50 dark:bg-zinc-900 p-4 text-sm lg:text-md text-zinc-900 dark:text-zinc-100 rounded-lg transition-colors duration-300">
        <code className="lg:text-md">{code}</code>
      </pre>
    </div>
  );
}