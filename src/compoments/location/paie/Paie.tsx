import { useAtom } from "jotai"
import style from "./paie.module.css"
import { PaieMethode } from "@/app/[locale]/(compl)/locationAtoms"
import { ChangeEvent, useEffect, useRef, useState } from "react"

export default function Paie({err} : {err : boolean}) {
    const input = useRef<HTMLInputElement>(null)
    const [paie, setPaie] = useAtom(PaieMethode)
    const [popUp, setPopUp] = useState(false)
    console.log(paie)
    const valideSelect = (e : ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value == "")
            setPaie(undefined);
        else {
            setPaie({type : e.target.value})
            console.log(e.target.value)
        }
            
    }

    const valideInput = (e : ChangeEvent<HTMLInputElement>) =>{
        if(paie == undefined)
            return;
        else 
            setPaie({...paie, autre : e.target.value})
    }

    useEffect(()=>{
        if(paie?.type == "autre"){
            setPopUp(true)
        }else {
            setPopUp(false)
        }
    },[paie?.type])
  return (
    <div className={style.main}>
        <div className={style.part}>
            Méthode de paiment
            <select onChange={(e)=>valideSelect(e)} value={paie?.type ? paie.type : "null"}>
                <option value="null"> - </option>
                <option value="CB">Carte Bancaire</option>
                <option value="autre" >Autre (vu avec l’équipe)</option>
            </select>
        </div>
        {popUp && (
            <div ref={input} className={`${style.part} ${err && style.err}`}>
            Moyen de paiement convenu avec l'équipe
            <input type="text" onChange={(e)=>valideInput(e)} />
        </div>
        )}
        
    </div>
  )
}
