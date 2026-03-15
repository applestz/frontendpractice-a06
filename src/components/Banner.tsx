import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className='block p-[5px] m-[0] w-[100vw] h-[40vh] relative'>
            <Image
            src={'/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className='text-white relative top-[100px] z-20 text-center'>
                <h1 className='text-4xl font-bold pb-[10px]'>where every event finds its venue</h1>
                <h3 className='text-l font-bold'>
                    Finding the perfect venue has never been easier.
                    Whether it's a wedding, coporate event, or private party,
                    we connecting people to the perfect place.
                </h3>
            </div>
        </div>
    )
}