import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function Topmenu() {
    return (
        <div className='h-[50px] bg-white fixed top-0 left-0 right-0
        z-30 border-t border-b border-gray-200
        flex flex-row justify-end items-center'>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image
            src={'/logo.jpg'}
            className='h-[100%] w-auto px-[10px]'
            alt='logo'
            width={0}
            height={0}
            sizes='100vh'
            />
        </div>
    )
}