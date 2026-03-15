import Link from 'next/link'

export default function TopMenuItem({title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className='width-[120px] text-center my-auto px-[10px]
        font-sans font-[10pt] text-[#637bdc]'>
            {title}
        </Link>

)
}