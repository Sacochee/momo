"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import style from "./style.module.css";
import { useAtom } from "jotai";
import { _date, _time, _surfers } from "@/app/[locale]/(compl)/states";
import Bar from "@/compoments/utilities/barProgress/bar";
import { redirect } from "@/navigation";
import { useRef } from "react";
import AuthProvided from "@/compoments/autorisations/auth/authProvided";
import BtnValiderProvider from "@/compoments/autorisations/valider/btnValdierProvided";
import Accident from "@/compoments/autorisations/acc/accident";
import Pay from "@/compoments/autorisations/pay/pay";

export default function page() {
  const conditions = useRef<HTMLDivElement>()
  const [date] = useAtom(_date);
  const [time] = useAtom(_time);
  const [surfers] = useAtom(_surfers);
  if (date != undefined && time != undefined && surfers != undefined) {
    return (
      <>
        <HeaderForm />
        <main className={style.main}>
          <div>Bulletin d'inscription</div>
          <div>Étape 2/3</div>
          <Bar tape={2} />
          <div className={style.container}>
            <Accident />
            <Pay />
          </div>
          <AuthProvided />
          <BtnValiderProvider />
        </main>
        <Footer />
      </>
    );
  } else {
    redirect({ pathname: "/app/error", query: { type: "NoPay", from : "cours" } });
  }
}
