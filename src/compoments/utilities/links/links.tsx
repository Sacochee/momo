"use client"
import { ReactNode, useState } from "react"
import style from "./links.module.css"
import Image from "next/image"
import { useRouter, usePathname } from "@/navigation"

export default function Links({href, children, className, onClick} : {href : any, children : ReactNode, className?:any, onClick?:any}) {
  const [load, setLoad] = useState(false)
  const router = useRouter()
  const path = usePathname()
  const click = ()=>{
    if(onClick){
      onClick()
    }
    if(href == path){

    }else{
      router.push(href)
    setLoad(true)
    window.scrollTo(0, 0)
    }
  }
  return (
    <div onClick={click} className={className} style={{cursor:"pointer"}}>
      {load ? <div className={style.div}>
        <div className={style.box}>
          <Image 
          src={"/Icons/logoNice.png"}
          width={100}
          height={100}
          alt="logo"
          priority={true}
          />
        </div>
        <p>
            Chargement de la page &nbsp;
            <span className={style.s}>.</span>
            <span className={style.s}>.</span>
            <span className={style.s}>.</span>
        </p>
      </div> : undefined}
        {children}
    </div>
  )
}
