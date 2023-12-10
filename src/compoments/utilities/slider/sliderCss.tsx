"use client"
import style from './css.module.css'
import Image from 'next/image'

export default function SliderCss() {
    
  return (
    <div className={style.box}>
        <Image 
        src={"/cours/img1.png"}
        width={screen.availWidth}
        height={(screen.availWidth * 745) / 2000}
        alt='Photo de groupe Coco Surf'
        className={style.img}
        />
        <Image 
        src={"/cours/img2.png"}
        width={screen.availWidth}
        height={(screen.availWidth * 745) / 2000}
        alt='Photo d élèves entrain de surfer'
        className={style.img}
        />  
        <Image 
        src={"/cours/img3.png"}
        width={screen.availWidth}
        height={(screen.availWidth * 745) / 2000}
        alt='Photo d élèves entrain de surfer'
        className={style.img}
        />  
        <Image 
        src={"/cours/img4.png"}
        width={screen.availWidth}
        height={(screen.availWidth * 745) / 2000}
        alt='Photo du débrifing en fin de session'
        className={style.img}
        />  
    </div>
  )
}
