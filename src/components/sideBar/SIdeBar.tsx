import Logo from './Logo'
import Category from '../data/Category'
import { CategoryType } from '../data/icons'
import Dog from './Dog'

type dataType = {
    data?: CategoryType[],
    filt?: string,
    func?: ((cat: CategoryType) => void) | undefined
}

const SIdeBar = ({ filt, func, data }: dataType) => {
    return (
        <div className='fixed hidden lg:flex flex-col top-0 left-0 h-full w-64 z-50 bg-gray-100 dark:bg-zinc-900'>
            <Logo />

            {/* Mascotte animée */}
            {/* Mascotte animée */}
           <Dog />

            <div className='mt-24 h-100 overflow-auto '>
                <div className='flex flex-col'>
                    <Category filt={filt} data={data} func={func} />
                </div>
            </div>
        </div>
    )
}

export default SIdeBar