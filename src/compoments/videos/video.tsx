"use client"
import { useMediaQuery } from "../hooks"

type props ={
  breakpoint : number, 
  src : string,
  size  : {
    ww : number,
    w : number,
    h : number,
    hh : number,
  }
}


export default function Video({ breakpoint, src, size } : props) {
  return (
    <iframe
          title="YouTube video player"
          width={useMediaQuery(breakpoint)?  size.ww : size.w }
          height={useMediaQuery(breakpoint) ? size.hh : size.h}
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{border:"none"}}
        ></iframe>
  )
}


/**
 * 
 * 
 * 
 * {
  ww : 1024 ,
  w : 300,
  hh : 600 , 
  h : 169,
}
 * <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 */