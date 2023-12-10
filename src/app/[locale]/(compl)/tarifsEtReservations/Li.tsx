"use client";
import Links from "@/compoments/utilities/links/links";
import style from "./style.module.css";
import { useAtom } from "jotai";
import { _context } from "../states";
import { formule } from "../states";
import {v4 as uuidv4} from "uuid"

export function Li({ type, duree, when, price, params }: { type: string; duree: string | undefined; when: string; price: number; params: formule; }) {

  const [context, setContext] = useAtom(_context)
  return (
    <li className={style.tabl_li} key={uuidv4()}>
      <div className={style.tabl_element}>
        {type}
      </div>
      <div className={style.tabl_element}>
        {duree}
      </div>
      <div className={style.tabl_element}>
        {when}
      </div>
      <div className={style.tabl_element}>
        {price + "€"}
      </div>
      <Links href={`/tarifsEtReservations/form`} className={style.tabl_element} onClick={()=>setContext(params)}>
        S'inscrire
      </Links>
    </li>
  );
}
