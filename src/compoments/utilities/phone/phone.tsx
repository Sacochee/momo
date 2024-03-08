import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from "./phone.module.css"
import { accient } from '@/app/[locale]/(compl)/states';
import tel from '../telephone/tel';

export default function PhoneNumberInput({set, fiche} : {set : Function, fiche : accient}) {
  const [ind, setInd] = useState("+33");
  const [te, setTel] = useState("");

  const changeInd = (e : string) =>{
    const regex = /[^0-9+]/ 
    if(e.search(regex) != -1 ) return ind
    else if (e == " ") return ind
    else return e
  }

  const changePhone = (e : string) =>{
    "06 20 71 98 64"
    const regex = /[^0-9-]/ 
    if(e.search(regex) != -1 ) return te
    else if (e == " ") return te
    else return e
  }

  useEffect(()=>{
    set({...fiche, tel : ind+te})
  },[ind, te])
  return (
    <div className={style.hey}>
        <input type="text" value={ind} onChange={(e)=>setInd(changeInd(e.target.value))} className={style.indicatif}/>
        <input type="text" className={style.phone} placeholder='ex : 06 20 71 98 64' value={te} onChange={(e)=> setTel(changePhone(e.target.value))}/>
    </div>
  )
}
