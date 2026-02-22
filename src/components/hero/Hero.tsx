import {  Zap } from 'next-mahine-icon'
const Hero = () => {


  return (
    <div className="relative w-full overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 pt-16 sm:py-20 mt-7">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-yellow-200/20 dark:bg-yellow-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-blue-200/20 dark:bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Main heading with gradient */}
        <h1 className="bg-linear-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Next-Mahine-Icon
        </h1>

        {/* Tagline with icons */}
        <div className="mt-6 space-y-2 text-lg sm:text-xl">
          <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            Server-first icons for Next.js
            <span className="font-semibold text-gray-900 dark:text-gray-100">(0 JS)</span>
            <Zap className="inline-block h-6 w-6 text-yellow-500 dark:text-yellow-400 animate-bounce animation-duration-[2s]" />
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            Lightweight, fast, and ready for SSR with Next.js.
            <Zap className="inline-block h-6 w-6 text-yellow-500 dark:text-yellow-400 animate-bounce animation-duration-[2s]" />
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            Optimized for Server Components, zero client-side bundle.
            <Zap className="inline-block h-6 w-6 text-yellow-500 dark:text-yellow-400 animate-bounce animation-duration-[2s]" />
          </p>
        </div>



        {/* Search bar */}
        <div className="mt-8 flex flex-col justify-center items-center mb-3">

          <p className="px-6 py-3 w-full rounded-2xl font-mono mb-3 
              bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900
             wrap-break-word">
            <span className="text-red-500 ">import</span>{" "}
            {"{ IconName }"} <span className='text-red-500'>from</span>  <span className='text-blue-400'>&quot;next-mahine-icon&quot;</span>;
          </p>
          
         
        </div>
      </div>
    </div>
  )
}

export default Hero