"use client";
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
          <span className={style.info}>{data.formule}</span>&nbsp;cours
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
