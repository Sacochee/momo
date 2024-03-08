import  style from "./part.module.css"
import { useAtom } from "jotai";
import { participant, participants } from "@/app/[locale]/(compl)/locationAtoms";
import { Dispatch, MouseEvent, useRef, useState } from "react";
import { SetStateAction } from "jotai/vanilla";
import Image from "next/image";

export default function Participant({nb, setState, setA} : {nb  : number, setState : any, setA : Dispatch<SetStateAction<boolean>>}) {
    const refName = useRef<HTMLDivElement>(null);
    const [error, setError] = useState(false)
    const times = Array.from({length : nb});
    const [, setPart] = useAtom(participants)
    const valider = (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let err = false;
        const li : NodeListOf<HTMLLIElement> | undefined = refName.current?.querySelectorAll("li");
        li?.forEach(item =>{
            item.querySelectorAll("input").forEach(input => {
                if(input.value == "") 
                {
                    err = true 
                    input.classList.add(style.err)
                    if(input.parentElement)
                    input.parentElement.style.color = 'red'
                }else {
                    input.classList.remove(style.err)
                    if(input.parentElement)
                    input.parentElement.style.color = 'rgb(10,10,10)'
                }
            })
                
        })
        if(!err){
            const lst : participant[] = []
            setError(false)
            li?.forEach(item =>{
                let name  = item.querySelector("input[name='name']") as HTMLInputElement
                let details = item.querySelector("input[name='details']") as HTMLInputElement
                lst.push({ name : name.value, details : details.value})
                
            })
            setPart(lst);
            setState(false)
            setA(true)
        } else setError(true)
    }
  return (
    <div ref={refName} className={style.main} >
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
           <h1>Participants</h1>
            <div style={{position:"relative",marginLeft:"40px",marginRight:"20px", width:"40px",height:"40px",cursor:"pointer"}} onClick={()=>setState()}>
                <span className={style.line}></span>
                <span className={style.line}></span>
            </div> 
        </div>
        
        <ul className={style.ul}>
           {
            times.map(()=>(
            <Part  key={crypto.randomUUID()}/>
            ))} 
        </ul>
        {error && <div className={style.error}>Informations invalides</div>}
        <button onClick={(e)=>{valider(e)}} type="button" className={style.btn} ref={el => el?.addEventListener("click", (e)=>e.preventDefault())}>Valider</button>
    </div>
    
  )
}


function Part(){
     return(
        <li key={crypto.randomUUID()} className={style.li}>
            <Image
            src="/Icons/personne.png"
            alt="une personne debout"
            width={26}
            height={64}
            style={{marginRight:"20px"}}
            />
            <div>
                <div className={style.case}>
                    Nom  Prénom
                    <input type="text"  name="name" placeholder="Morgan LeMoniteur" className={style.input} />
                </div>
                <div className={style.case}>
                    Taille  Poid
                    <input type="text" name="details" placeholder="120kg / 166cm" className={style.input}/>
                </div>
            </div>
            
        </li>
     )
}