import Image from 'next/image'

const NotFoundIcon = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center h-64 p-4 text-center">
      {/* GIF ou illustration */}
      <Image
        src="/assets/notfound.gif"
        width={100}
        height={100}
        alt="Not Found"
        className="w-24 h-24 sm:w-32 sm:h-32 mb-4 animate-pulse dark:rounded-3xl"
      />

      {/* Titre principal */}
      <h2 className="text-gray-700 dark:text-gray-200 text-xl sm:text-2xl font-semibold mb-2">
        No results found
      </h2>

      {/* Texte secondaire */}
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-sm">
        Try different keywords or browse popular collections.
      </p>
    </div>
  )
}

export default NotFoundIcon