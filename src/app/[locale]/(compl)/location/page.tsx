"use client";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import style from "./page.module.css";
import Links from "@/compoments/utilities/links/links";
import data from "@/../public/loc/slider/data.json";
import dynamic from "next/dynamic";
import { PayAccept, Case, FAQ } from "./PayAccept";
import { planche, wet, body } from "./PayAccept";

const Slide = dynamic(
  () => import("@/compoments/utilities/slider/SliderImage"),
  { ssr: false }
);

export default function Page() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <Slide data={data as any} />
        <article>
          <p>
            Chez COCO SURF, vous pouvez{" "}
            <strong>louer un large choix de matériel</strong> : planches en
            mousses, bodyboards et combinaisons
          </p>
          <strong>Réservation obligatoire</strong>
          <p>
            Un temps supplémentaire de 30 min est offert pour l’aller-retour du
            parking au spot !
          </p>
        </article>
        <section className={style.bulletin}>
          <strong className={style.t}>Pour réserver :</strong>
          <ol>
            <li>
              <strong>Contacter l’école par téléphone </strong>
              (idéalement 24 ou 48h avant)
            </li>
            <li>
              <strong>Finaliser la réservation </strong>
              en cliquant sur le bouton ci-dessous
            </li>
          </ol>
          <div className={style.center}>
            <Links href={{ pathname: "/app/form", query: { type: false } }}>
              <button style={{ borderRadius : "20px" }}>finaliser ma réservation</button>
            </Links>
          </div>
          <p>Moyens de paiement acceptés :</p>
        </section>
        <PayAccept />
        <section>
          <div className={style.titleTab}>MATERIEL :</div>
          <ul className={style.ul}>
            <Case
              name="Planche de surf + leash"
              temps="2h"
              prix="19€"
              img={planche}
            />
            <Case
              name="Planche de surf + leash"
              temps="Journée"
              prix="25€"
              img={planche}
            />
            <Case
              name="Planche de surf + leash"
              temps="Semaine"
              prix="100€"
              img={planche}
            />
            <Case
              name="Combinaison intégrale ou shorty"
              temps="2h"
              prix="6€"
              img={wet}
            />
            <Case
              name="Combinaison intégrale ou shorty"
              temps="Journée"
              prix="10€"
              img={wet}
            />
            <Case
              name="Combinaison intégrale ou shorty"
              temps="Semaine"
              prix="50€"
              img={wet}
            />
            <Case name="Bodyboard + leash" temps="2h" prix="10€" img={body} />
            <Case
              name="Bodyboard + leash"
              temps="Journée"
              prix="15€"
              img={body}
            />
            <Case
              name="Bodyboard + leash"
              temps="Semaine"
              prix="75€"
              img={body}
            />
          </ul>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

