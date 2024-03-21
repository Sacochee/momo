"use client"
import style from "./style.module.css";
import dynamic from "next/dynamic";
import Btn from "@/compoments/utilities/button/btn";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "@/compoments/hooks";
import { useEffect, useState } from "react";

export default function page() {
  const src = useSearchParams();
  const isPay : Boolean  = !src.get("pay");  

  return (
    <main className={style.main}>
      <h1 style={{textAlign : "center"}}>Inscription validée</h1>
      {
        isPay == false ? <MessageInfo/> : <p>Nous avons hâte de vous accueillir !</p>
      }
      <ul className={style.box}>
        <li className={style.li}>
          <Btn to="/"  txt="Accueil" />
        </li>
        <li className={style.li}>
          <Btn to="/contact"  txt="Contact & Accès"/>
        </li>
        <li className={style.li}>
          <Btn to="/presentationDesCours"  txt="Présentation des cours"/>
        </li>
      </ul>
      <div>
      <iframe width={useMediaQuery(749) ? 560 : 280} height={useMediaQuery(749) ? 315 : 157} src="https://www.youtube.com/embed/LdYPlNzNEaA?si=ogZvSRSNtbJwepjM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>      
      </div>
      
    </main>
  );
}



function MessageInfo(){
  return(
    <div className={style.txt}>
      <p>
        Vous avez choisi un autre moyen de paiement que la CB.
      </p>
      <p>
      Nous vous rappelons qu'il est important d'effectuer le règlement dans les termes et délais convenus avec l'école, <br/>
      afin de valider la réservation.
      </p>
      <p>
        Contactez Cocosurf en cas de changement.
      </p>
      <p>
        Merci et à bientôt, l'école Cocosurf.
      </p>
    </div>
  )
}