"use client";
import { useSearchParams } from "next/navigation";
import style from "./style.module.css";
import Image from "next/image";
import ButtonLink from "@/compoments/ButtonLink/ButtonLink";
import png from "@/../public/Icons/error.png";

export default function page() {
  const params = useSearchParams();
  const type = params.get("type");
  const from = params.get("from");
  console.log(from)
  console.log()
  let to;
  if(from === "cours"){
    to = "/tarifsEtReservations/inscription";
  }else if(from === "loc"){
    to = "/location/inscription";
  }else{
    to = "/"
  }

  if (type?.toLowerCase() == "pay") {
    return (
      <main className={style.main}>
        <Image
          src={png}
          alt=""
          width={100}
          height={100}
          style={{ margin: "30px 0" }}
        />
        <div className={style.children}>Oups ! Une erreur est survenue</div>
        <div className={style.children}>Vous ne serez pas débité</div>
        <div className={style.children}>
          La session a dû expirer essayez de recommencer le paiement
        </div>
        <div className={style.children}>
          Si le problème persiste contacter l‘école
        </div>
        <ButtonLink
          to={to}
          txt="Revenir à l'étape précédente"
          style={{ margin: "30px 0" }}
        />
      </main>
    );
  } else {
    return (
      <main className={style.main}>
        <Image
          src={png}
          alt=""
          width={100}
          height={100}
          style={{ margin: "30px 0" }}
        />
        <div className={style.children}>Oups ! Une erreur est survenue</div>
        <div className={style.children}>
          La session a dû expirer essayez de recommencer le processus
        </div>
        <div className={style.children}>
          Si le problème persiste contacter l‘école
        </div>
        <ButtonLink
          to={to}
          txt="Revenir à l'étape précédente"
          style={{ margin: "30px 0" }}
        />
      </main>
    );
  }
}
