import Image from 'next/image'
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'

export default function Card({venueName, imgSrc, onRating} : {venueName:string, imgSrc:string, onRating:Function}) {
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-[100%] h-[60%] rounded-t-lg relative overflow-hidden'>
                <Image
                src={imgSrc}
                alt='place picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className='h-[30%] p-[10px] relative flex  justify-center'>
                <h2 className='text-[#4b5da6] text-[1.5em] pt-[5px]'>
                    {venueName}
                </h2>
            </div>
            <Rating id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            defaultValue={0}
            onChange={(e, newValue)=>{e.stopPropagation(); onRating(venueName, newValue)}}
            />
        </InteractiveCard>
    )
}