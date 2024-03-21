"use client";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import Image from "next/image";
import style from "./page.module.css";
import Links from "@/compoments/utilities/links/links";
import data from "@/../public/loc/slider/data.json";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("@/compoments/utilities/slider/SliderImage"),
  { ssr: false }
);

type DataImage = {
  src: string;
  w: number;
  h: number;
  alt: string;
};

const planche: DataImage = {
  src: "/loc/planche-de-surf.png",
  w: 22,
  h: 59,
  alt: "Logo d une planche de surf",
};

const body: DataImage = {
  src: "/loc/body.png",
  w: 33,
  h: 55,
  alt: "Logo d une planche de surf",
};

const wet: DataImage = {
  src: "/loc/combie.png",
  w: 28,
  h: 49,
  alt: "Logo d une planche de surf",
};

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
              <strong>Contacter l’école par téléphone</strong>
              (idéalement 24 ou 48h avant)
            </li>
            <li>
              <strong>Finaliser la réservation</strong>
              en cliquant sur le bouton ci-dessous
            </li>
          </ol>
          <div className={style.center}>
            <Links href={{ pathname: "/app/form", query: { type: false } }}>
              <button style={{ padding: "" }}>finaliser ma réservation</button>
            </Links>
          </div>
          <p>Moyens de paiement acceptés :</p>
        </section>
        <div className={style.center}>
          <div className={style.pay}>
            <Image
              src={"/payMethode/cb.png"}
              width={59}
              height={33}
              alt="Logo d une carte bancaire"
              quality={100}
            />
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
      <Footer />
    </div>
  );
}

function Case({
  name,
  temps,
  prix,
  img,
}: {
  name: string;
  temps: string;
  prix: string;
  img: DataImage;
}) {
  return (
    <li>
      <div className={style.center}>
        <Image
          src={img.src}
          width={img.w}
          height={img.h}
          alt={img.alt}
          loading="lazy"
        />
      </div>
      <div className={style.li}>
        <div className={style.str}>{name}</div>
        <div>{temps}</div>
        <div className={style.str}>{prix}</div>
      </div>
    </li>
  );
}
