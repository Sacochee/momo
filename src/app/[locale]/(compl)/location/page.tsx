"use client"
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import Image from "next/image";
import style from "./page.module.css";
import Links from "@/compoments/utilities/links/links";
import data from "@/../public/loc/slider/data.json";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("@/compoments/utilities/slider/SliderImage"),{ssr : false}
);

export default function page() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <Slide data={data} />
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
              Contacter l’école par téléphone (idéalement 24 ou 48h avant)
            </li>
            <li>
              Remplir le bulletin d’inscription en ligne, en cliquant ci-dessous
            </li>
          </ol>
          <div className={style.center}>
            <Links href={{ pathname: "/app/form", query: { type: false } }}>
              <button>Bulletin de location</button>
            </Links>
          </div>
          <p>
            Pour les autres moyens de paiement ou pour une réservation de
            dernière minute, en discuter avec l’équipe.
          </p>
        </section>
        <div className={style.center}>
          <div className={style.pay}>
            <Image
              src={"/payMethode/espece.png"}
              width={59}
              height={34}
              alt="Logo d un billet"
              quality={100}
            />
            <Image
              src={"/payMethode/CQ.png"}
              width={58}
              height={46}
              alt="Logo d un chèque"
              quality={100}
            />
            <Image
              src={"/payMethode/ancv.png"}
              width={57}
              height={43}
              alt="Logo d un chèque vacance"
              quality={100}
            />
          </div>
        </div>
        <section>
          <div className={style.titleTab}>MATERIEL :</div>
          <ul className={style.ul}>
            <Case name="Planche de surf + leash" temps="2h" prix="19€" />
            <Case name="Planche de surf + leash" temps="Journée" prix="25€" />
            <Case name="Planche de surf + leash" temps="Semaine" prix="100€" />
            <Case name="Combinaison intégrale ou shorty" temps="2h" prix="6€" />
            <Case
              name="Combinaison intégrale ou shorty"
              temps="Journée"
              prix="10€"
            />
            <Case
              name="Combinaison intégrale ou shorty"
              temps="Semaine"
              prix="50€"
            />
            <Case name="Bodyboard + leash" temps="2h" prix="10€" />
            <Case name="Bodyboard + leash" temps="Journée" prix="15€" />
            <Case name="Bodyboard + leash" temps="Semaine" prix="75€" />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Case({
  name,
  temps,
  prix,
}: {
  name: string;
  temps: string;
  prix: string;
}) {
  return (
    <li>
      <div className={style.str}>{name}</div>
      <div>{temps}</div>
      <div className={style.str}>{prix}</div>
    </li>
  );
}
