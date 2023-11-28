
import { useRef, useState } from "react";
import form from 'react'

export default function grise() {
    const [date, setDate] = useState(false);
      const jj = useRef(null), mm =useRef(null), aa=useRef(null),hh=useRef(null), m = useRef(null)
      const [jour, setJour] = useState(),
      [month, setMonth] = useState(),
      [year, setYear] = useState(),
      [hours, setHours] = useState(),
      [min , setMin] = useState()
  return (
    <div className={form.gris}>
          <div className={`${form.topText} ${date ? undefined : form.toggle}`}>
          Date du premier cours :
          <div className={form.gris_box}>
            <input type="number" value={jour} className={form.dateInput} disabled={date ? false : true} ref={jj} onChange={(e)=>regexDate(e.target.value.toString(), jour!, (arg)=>{arg? mm.current.focus(): undefined}, (arg)=>setJour(arg))}/>
            <span>/</span>
            <input type="number" value={month} className={form.dateInput} disabled={date ? false : true} ref={mm} onChange={(e)=>regexDate(e.target.value.toString(), month!, (arg)=>{arg? aa.current.focus(): undefined}, (arg)=>setMonth(arg))}/>
            <span>/</span>
            <input type="number"  value={year} className={form.dateInput} disabled={date ? false : true} ref={aa} onChange={(e)=>regexDate(e.target.value.toString(), year!, (arg)=>{arg? undefined: undefined}, (arg)=>setYear(arg))}/>
          </div>
          <div>
          <input type="number" className={form.dateInput} disabled={date ? false : true} ref={jj}/>
          <span>:</span>
          <input type="number" className={form.dateInput} disabled={date ? false : true} ref={jj}/>
          </div>
          </div>
          <div className={form.text}>
            <input type="checkbox" onClick={()=>setDate(date ? false : true)}/>
            <span>Les cours de ce participant ne commance pas en meme temps que les autres</span>
            
          </div>
        </div>
  )
}


function regexDate(a : string, current : string, cb : (bool : boolean)=>void, edit : (arg : string)=>void){
    current ? undefined : current = ""
  
    if(a.length < current.length && a.length == 0)
      cb(false)
    else if(a.length > current.length && a.length == 2)
      cb(true)
    else
      edit(a)
  }