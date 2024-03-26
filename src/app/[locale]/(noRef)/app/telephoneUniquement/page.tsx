"use client";
import dynamic from "next/dynamic";
import style from "./style.module.css";
import Image from "next/image";
import ButtonLink from "@/compoments/ButtonLink/ButtonLink";
import { useSearchParams } from "next/navigation";
import png from "@/../public/contact/tel.png";

// const Img = dynamic(() =>);

export default function page() {
  const params = useSearchParams();
  const value = params.get("type");
  return (
    <main className={style.main}>
      <h1>La réservation par téléphone est obligatoire</h1>
      <section>
        <div className={style.part}> 
          <a href="tel:+33628051411">
            <Image
              src={png}
              alt="Image d un téléphone"
              width={100}
              height={100}
              loading="lazy"
            />
            <span>Tel : 06 28 05 14 11</span>
          </a>
          <a href="tel:+33628051411"><button>Appelez maintenant</button></a>
          
        </div>
        <div className={style.part}>
          <h3>Pourquoi appeler l'école au préalable?</h3>
          <ul>
            <li>Vérifier les disponibilités de l'école</li>
            <li>
              Obtenir toutes les informations nécessaires pour le bon
              déroulement {value == "loc" ? "d'une location":"d'un cours de surf" }
            </li>
            <li>Bénéficier de réductions dans certains cas</li>
          </ul>
          <ButtonLink
            txt={value == "loc" ? "retour à la page location" : "Tarifs et Réservations"}
            to={value == "loc" ? "/location" : "/tarifsEtReservations"}
          />
        </div>
      </section>
    </main>
  );
}
