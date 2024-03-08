"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export type breakPoint = {
    min : number
    width : number
    height : number
}

export default function ImageFormat({src, bp, alt, style}:{src : string, bp : breakPoint[], alt : string, style: {readonly [key:string] : string}}){
    const [width, setWidth] = useState(bp[0].width)
    const [height, setHeight] = useState(bp[0].height)
    useEffect(()=>{
        let max : breakPoint = { min : 0, width :0, height:0};
        bp.forEach(e=>{if(e.min <= screen.availWidth && e.min >= max.min)max = e})
        setWidth(max.width)
        setHeight(max.height)
        console.log(max)
        console.log(screen.availWidth)   
    },[])
    return (
    <div>
        <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={style.ImageFormat}
        />
    </div>
    )
}