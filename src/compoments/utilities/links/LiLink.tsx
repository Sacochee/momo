"use client"
import { ReactNode, useState } from "react"
import { useRouter, usePathname } from "@/navigation"
import LoadingScreen from "./LoadingScreen"

export default function LiLinks({href, children, className, onClick, style} : {href : any, children : ReactNode, className?:any, onClick?:any, style?: any}) {
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
    <li onClick={click} className={className} style={{cursor:"pointer", ...style}} >
      {load && <LoadingScreen/> }
        {children}
    </li>
  )
}