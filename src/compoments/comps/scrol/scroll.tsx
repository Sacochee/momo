"use client"
import { useEffect, useState } from "react"
import style from "./style.module.css"

export default function ScrollTop() {
    const [load , setLoad] = useState(false)
    const [y, setY] = useState(0)
    useEffect(()=>{
        setLoad(true)
        window.addEventListener('scroll', ()=>setY(window.scrollY))
        return window.removeEventListener('scroll', ()=>undefined)
       
    })
    const top = ()=>{
        window.scrollTo(0,0)
    }

    if(y > 500)
        return (
        <div className={style.box} onClick={top}> 
            <span className={style.span}></span>
            <span className={style.span}></span>
        </div>
    )
    else 
        return undefined
}
