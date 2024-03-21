import { useAtom } from "jotai"
import style from "./paie.module.css"
import { PaieMethode } from "@/app/[locale]/(compl)/locationAtoms"
import { ChangeEvent, useEffect, useRef } from "react"

export default function Paie({err} : {err : boolean}) {
    const input = useRef<HTMLInputElement>(null)
    const [paie, setPaie] = useAtom(PaieMethode)
    const valideSelect = (e : ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value == "")
            setPaie(undefined);
        else 
            setPaie({type : e.target.value})
    }

    const valideInput = (e : ChangeEvent<HTMLInputElement>) =>{
        if(paie == undefined)
            return;
        else 
            setPaie({...paie, autre : e.target.value})
    }

    useEffect(()=>{
        if(paie?.type == "autre"){
            const i = input.current as HTMLInputElement
            i.style.display = 'flex'
        }else {
            const i = input.current as HTMLInputElement
            i.style.display = 'none'
        }
    },[paie?.type])
  return (
    <div className={style.main}>
        <div className={style.part}>
            Méthode de paiment
            <select onChange={(e)=>valideSelect(e)}>
                <option value=""> - </option>
                <option value="CB">Carte Bancaire</option>
                <option value="autre" >Autre (vu avec l’équipe)</option>
            </select>
        </div>
        <div ref={input} style={{display:'none'}} className={`${style.part} ${err && style.err}`}>
            Précisez ici
            <input type="text" onChange={(e)=>valideInput(e)} />
        </div>
    </div>
  )
}
