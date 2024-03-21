import React, { useEffect, useState } from 'react'
import style from "./phone.module.css"
import { accient } from '@/app/[locale]/(compl)/states';

export default function PhoneNumberInput({set, fiche, err} : {set : Function, fiche : accient, err : boolean}) {
  const [te, setTel] = useState("");

  const changePhone = (e : string) =>{
    "06 20 71 98 64"
    const regex = /[^0-9- ]/ 
    if(e.search(regex) != -1 ) return te
    else if (e == " ") return te
    else return e
  }

  useEffect(()=>{
    set({...fiche, tel : te != "" ? te : undefined})
  },[ te])
  return (
    <div className={style.hey}>
        <input type="text" className={style.phone} placeholder='ex : 06 20 71 98 64' value={te ? te : ""} onChange={(e)=> setTel(changePhone(e.target.value))} style={err ?{borderColor : "red"} : {}}/>
    </div>
  )
}
