"use client"
import { useRouter } from '@/navigation'
import { useState } from 'react'
import LoadingScreen from '../utilities/links/LoadingScreen'
import css from "./btn.module.css"

export default function ButtonLink({txt, to, className, style}:{txt :string, to : any, className?:string, style?: React.CSSProperties}) {
    const router  = useRouter()
    const [loading, setLoading] = useState(false)

    const move = ()=>{
        setLoading(true)
        router.push(to)
    }

  return (
   <button className={`${className} ${css.btn}`} style={{...style}} onClick={move}>
    {loading && <LoadingScreen/>}
    {txt}
   </button>
  )
}
