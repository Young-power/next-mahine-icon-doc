"use client"
import InstallOption from './InstallOption'

const Install = () => {
    return (
        <section  className='text-center mt-10  flex flex-col justify-center items-center '>

                <p className='text-3xl font-bold italic text-muted-foreground lg:text-4xl '>How to Install </p>
                <span className='font-bold tracking-wide text-xl'>Next-Mahine-Icon</span>
            
            <div className='mt-10'>
                <InstallOption />

            </div>
        </section>
    )
}

export default Install
