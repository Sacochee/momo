"use client";
import Links from "@/compoments/links";
import style from "./style.module.css";
import { useRouter } from "@/navigation";

export function Li({ type, duree, when, price, params }: { type: string; duree: string | undefined; when: string; price: number; params: string; }) {
  const router = useRouter();
  return (
    <li className={style.tabl_li}>
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
      <Links href={`/tarifsEtReservations/form?days=${params}`} className={style.tabl_element}>
        S'inscrire
      </Links>
    </li>
  );
}
