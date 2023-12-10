"use client"
import Image from "next/image"
import { useMediaQuery } from "../../hooks"

type brp = {
    src : string,
    brp1 : number,
    brp2 : number,
    alt : string,
    size : {
        w : number,
        ww : number,
        www : number,
        h : number,
        hh : number,
        hhh : number,
    }
}

export default function ImageThreeBrP({src, brp1, brp2, size, alt}: brp) {
    const brp11 = useMediaQuery(brp1)
    const brp22 = useMediaQuery(brp2)

  return (
    <Image 
    src={src}
    width={brp11? size.www : brp22? size.ww : size.w}
    height={brp11? size.hhh : brp22? size.hh : size.h}
    alt={alt}
    
    />
  )
}
