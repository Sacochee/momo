"use client"
import { useReportWebVitals  } from 'next/web-vitals'


export function WebVitale(){
    useReportWebVitals((metric)=>{console.log(metric)})
    return<></>
}