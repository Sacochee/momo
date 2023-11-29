import { useRef, useState } from "react";
import { Data } from "@/app/[locale]/(static)/tarifsEtReservations/form/inscription/page";
import form from "./form.module.css" 
import {v4 as uuidv4 } from "uuid";

export default function Overlay({ data,contexte, cb, close}: { data: Data ; contexte : string; cb: (arg: Data) => void, close : ()=>void }) {
    const [prenom, setPrenom] = useState<string | undefined>(data?.prenom),
      [nom, setNom] = useState<string | undefined>(data?.nom),
      [age, setAge] = useState<number | undefined>(data?.age),
      [taille, setTaille] = useState<number | undefined>(data?.taille),
      [poid, setPoid] = useState<number | undefined>(data?.poid),
      [formule, setFormule] = useState(data?.formule),
      [info, setInfo] = useState(data?.info),
      [error, setError] = useState<string | false>();
      const pr = useRef(null), no = useRef(null), ag = useRef(null), ta = useRef(null), po = useRef(null)
      if(formule == undefined)
        setFormule(contexte)

      const createData = ()=>{
        if(prenom == undefined){
          setError("Le prenom est vide")
          pr.current?.focus()
        }else if(nom == undefined){
          setError("Le nom est vide")
          no.current?.focus()
        }else if(age == undefined){
          setError("L age est vide")
          ag.current?.focus()
        }else if(taille == undefined){
          setError("La taille est vide")
          ta.current?.focus()
        }else if(poid == undefined){
          setError("Le poids est vide")
          po.current?.focus()
        }else{
          setError(false)
          cb({
            id : data ? data.id : uuidv4(),
            nom : nom,
            prenom : prenom,
            age : age,
            taille : taille,
            poid : poid,
            formule : formule,
            info : info 
          })
          close()
        }
        
        
      }
    return (
      <div className={form.container}>
        <div className={form.close} onClick={()=>close()}>
          <span className={form.line}></span>
          <span className={form.line}></span>
        </div>
        <h2>Fiche Participant</h2>
        <div className={form.part}>
          <div className={form.name}>
            <span className={form.abrit}>Prémon du Participant :</span>
            <input
              type="text"
              value={prenom}
              onChange={(e) => regexName(e.target.value, prenom!, (e)=>setPrenom(e))}
              placeholder="ex : Morgan"
              className={form.input}
              ref={pr}
            />
          </div>
          <div className={form.name}>
            <span>Nom du Participant :</span>
            <input
              type="text"
              value={nom}
              onChange={(e) => regexName(e.target.value, nom!, (e)=>setNom(e))}
              placeholder="ex : LeMoniteur"
              className={form.input}
              ref={no}
            />
          </div>
        </div>
        <div className={form.prop}>
          <div className={form.case}>
            <span>
              Age :
            </span>
            <input
            type="number"
            value={age}
            onChange={(e) => changeNumber(+(e.target.value), (arg)=>setAge(arg))}
            className={form.sizeInput}
            min={7}
            ref={ag}
          />
          <span>
          &nbsp;ans
          </span>
          </div>
          <div>
            <span>
              taille : 
            </span><input
            type="number"
            value={taille}
            onChange={(e) => changeNumber(+(e.target.value), (arg)=>setTaille(arg))}
            className={form.sizeInput}
            min={0}
            ref={ta}
          />
          <span>
          &nbsp; cm
          </span>
          </div>
          <div>
            <span>
              poids : 
            </span>
            <input
            type="number"
            value={poid}
            onChange={(e) => changeNumber(+(e.target.value), (arg)=>setPoid(arg))}
            className={form.sizeInput}
            min={0}
            ref={po}
          /><span>
            &nbsp;kg&nbsp;
          </span>
          </div>
          
        </div>
        
        <div className={form.formule}>
          <span>
            Formules choisie :
          </span>
          <select value={formule} onChange={(e) => setFormule(e.target.value)} className={form.select}>
            <option value={"1"}>1 Cours</option>
            <option value={"2"}>2 Cours</option>
            <option value={"3"}>3 Cours</option>
            <option value={"5"}>5 Cours</option>
            <option value={"10carte"}>10 Cours A la carte</option>
            <option value={"10HS"}>10 Cours hors saisons</option>
            <option value={"enfant"}>club enfant 10 cours</option>
            <option value={"accompte"}>Accompte</option>
          </select>
          
        </div>
        <div className={form.textarea}>
          <textarea
            value={info}
            cols={30}
            placeholder="Informations complémentaires (facultatifs)"
            onChange={(e) => setInfo(e.target.value)}
            className={form.textarea_obj}
          />
        </div>
        {error ? (
          <div className={form.error}>
            Erreur : 
            {" " + error}
          </div>
        ):  undefined}
        <button className={form.btn} onClick={()=>createData()}>
          Valider
        </button>
      </div>
    );
  }
  


function regexName(arg : string, currentState : string, cb : (arg : string | undefined)=>void){
    const regex = /[^a-zA-Z]/;
    if(arg.search(regex) != -1)
      cb(currentState)
    else if(arg == ' ')
      cb(currentState)
    else if(arg == "")
      cb(undefined)
    else
        cb(arg)
}




function changeNumber(arg : number, cb : (arg : number | undefined)=>void){
  if(arg == 0)
    cb(undefined)
  else
    cb(arg)
}

