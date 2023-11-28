
import Image from 'next/image'
import style from "./loading.module.css"

export default function Loading() {
  return (
    <div className={style.div}>
        <Image 
        priority={true}
        src={"/Icons/palmierGif2.gif"}
        width={80}
        height={80}
        alt='"asda'
        />
    </div>
  )
}
