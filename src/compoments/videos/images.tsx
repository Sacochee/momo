"use client"
import { Image } from "next/dist/client/image-component";
import { useMediaQuery } from "../hooks";

type objImage = {
    src : string,
    breakPoint : number,
    alt : string,
    size : {
        w:  number,
        ww : number,
        h : number,
        hh: number,
    }
}

export default function Img({src, breakPoint, alt, size}:objImage) {
  return (
    <Image
    src={src}
    width={useMediaQuery(breakPoint)? size.ww : size.w}
    height={useMediaQuery(breakPoint)? size.hh : size.h}
    alt={alt}
    />
  )
}


