import Image from 'next/image'
import MyTypewriter from '../util/TypeWriter'

const Dog = () => {
    return (
        <>
            <div className="flex justify-center mt-16 mb-3">
                <Image
                    src="/assets/mascota.gif"
                    alt="mascotte Next-Mahine"
                    width={160}      // largeur fixe
                    height={160}     // hauteur fixe
                    className="rounded-2xl shadow-lg object-contain"
                />
            </div>
            <div className='w-full justify-center flex'>
                <MyTypewriter />
            </div>
        </>
    )
}

export default Dog
