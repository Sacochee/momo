"use client"
import { ReactNode, use, useState } from "react"
import { useRouter, usePathname } from "@/navigation"
import LoadingScreen from "./LoadingScreen"
import { routing } from "@/app/[locale]/(routing)/state"
import { useAtom } from "jotai"

export default function Links({href, children, className, onClick} : {href : any, children : ReactNode, className?:any, onClick?:any}) {
  const [load, setLoad] = useState(false)
  const router = useRouter()
  const path = usePathname()
  const [,setAtom] = useAtom(routing)
  const click = ()=>{
    if(onClick){
      onClick()
    }
    if(href == path){

    }else{
      setAtom(true)
      router.push(href)
      setLoad(true)
      window.scrollTo(0, 0)
    }
  }
  return (
    <div onClick={click} className={className} style={{cursor:"pointer"}}>
      {load && <LoadingScreen/> }
        {children}
    </div>
  )
}
