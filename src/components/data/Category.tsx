"use client"

import { categories, CategoryType } from './icons'

type dataType = {
  data?: CategoryType[],
  filt?: string,
  func?: ((cat: CategoryType) => void) | undefined
}

const Category = ({ filt, func }: dataType) => {
  const categoryDta = categories.map((cat) => (
    <button
      key={cat}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
        ${filt === cat
          ? "bg-blue-500 text-white shadow-md dark:bg-blue-400 dark:text-black"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
      }`}
      onClick={() => func && func(cat)}
    >
      {cat}
    </button>
  ));

  return (
    <>
      {categoryDta}
    </>
  )
}

export default Category