"use client"
import style from "./style.module.css";
import Links from "@/compoments/utilities/links/links";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { redirect } from "@/navigation";
import Tel from "@/compoments/utilities/telephone/tel";

export default function page() {
  const parms = useSearchParams();
  const isLesson = parms.get("type");
  if (isLesson != null) {
    return (
      <>
        <main className={style.main}>
          <h1 className={style.h1}>Avez-vous appelé l'école au préalable ?</h1>
          <div className={style.btns}>
            <Links
              href={isLesson == "true" ? "/tarifsEtReservations/inscription" : '/location/inscription'}
              className={style.btn}
            >
              Oui
            </Links>
            <Links href={{pathname:"/app/telephoneUniquement", query : {type : isLesson == "true" ? "cours" : "loc"}}} className={style.btn}>
              Non
            </Links>
          </div>
          <Tel />
        </main>
      </>
    );
  }else {
    redirect('/app/error')
  }
}
