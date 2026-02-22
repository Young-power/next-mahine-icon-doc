import Image from 'next/image'

const Logo = () => {
    return (
        <div className='w-full h-28 my-7 flex flex-col items-center'>
            {/* Logo animé */}
            <div>
                <Image 
                    src="/assets/logo1.png" 
                    width={90} 
                    height={90} 
                    alt="logo-next-mahine-icon"
                    className="object-contain animate-spin animation-duration-[9s] dark:bg-white dark:rounded-full"
                    priority
                />
            </div>

            {/* Nom */}
        <span className="bg-linear-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text  font-extrabold tracking-tight text-transparent  text-xl mt-3">
                Next-Mahine-Icon
            </span>
        </div>
    )
}

export default Logo