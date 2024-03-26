"use client";
import { formule } from "@/app/[locale]/(compl)/states";
import style from "./surfer.module.css";
import { Data } from "@/app/[locale]/(compl)/tarifsEtReservations/inscription/page";
import Image from "next/image";
import {v4 as uuidv4} from "uuid"

export default function Surfer({
  data,
  edit,
  rm,
}: {
  data: Data;
  edit: (arg: string) => void;
  rm : (arg : string) => void
}) {
  return (
    <li className={style.li} key={uuidv4()}>
      <div className={style.container}>
        <div className={style.primaire}>
          <div className={style.name}>
            <div className={style.pre}>
              <span className={style.info}>{data.prenom}</span>
            </div>
            <div className={style.pre}>
              <span className={style.info}>{data.nom}</span>
            </div>
          </div>
          <ul className={style.caracteristiques}>
            <li key={uuidv4()}>
              <span className={style.info}>{data.age}</span>

              {" ans"}
            </li>
            <li key={uuidv4()}>
              <span className={style.case}>
                <span className={style.info}>{data.taille}</span>
                {" cm"}
              </span>
              <span className={style.case}>
                <span className={style.info}>{data.poids}</span>
                {" kg"}
              </span>
            </li>
          </ul>
        </div>
        <div className={style.formule}>
          <span className={style.info}>{getNameOfFOrmule(data.formule)}</span>
        </div>
        <div className={style.btn}>
          <button className={style.el} onClick={()=>edit(data.id)}><Image
          src={"/Icons/editer.png"}
          height={15}
          width={15}
          alt=""
          /></button>
          <button className={style.el} onClick={()=>rm(data.id)}><Image
          src={"/Icons/supprimer.png"}
          height={15}
          width={15}
          alt=""
          /></button>
        </div>
      </div>
    </li>
  );
}


function getNameOfFOrmule(formule : formule) : string {
  switch(formule){
    case "1":
      return "Découverte"
    case "2" : 
      return "Découverte 2 cours"
    case "3" : 
      return "Mini stage 3 cours"
    case "4" : 
      return "Stage semaine 4 cours"
    case "5" :
      return "Stage semaine 5 cours"
    case "10carte":
      return "À la carte 10 cours"
    case "10HS" : 
      return  "Hors saison 10 cours";
    case "enfant":
        return "Club enfant 10 cours";
    case "part1" : 
      return "cours particulier 1 personne"
    case "part2":
      return "cours particulier 2 personne"
    default : 
      return "Acompte"
  }
}