import { getTranslations } from "next-intl/server";
import { meta } from "../../layout";
import style from "./style.module.css";
import Link from "next/link";
import Img from "@/compoments/utilities/videos/images";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "@/compoments/header/header";
import Footer from "@/compoments/footer/footer";

export async function generateMetadata({ params: { locale } }: meta) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contact"),
    description: t("contactDesc"),
  };
}

export default function Page() {
  const t = useTranslations("contact");
  const sizeLogo = { w: 75, ww: 150, h: 75, hh: 150 };
  return (
    <>
    <Header />
    
    <div className={style.all}>
      <main className={style.content}>
        <h1>{t("h1")}</h1>
        <section className={style.contact}>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link href={"tel:+33628051411"} className={style.link}>
                <Img
                  src="/contact/tel.png"
                  alt="logo d un téléphone"
                  breakPoint={1023}
                  size={sizeLogo}
                />
                +33 (0)6 28 05 14 11
              </Link>
            </li>
            <li className={style.li}>
              <Link href={""} target={"_blank"} className={style.link}>
                <Img
                  src="/contact/facebook.png"
                  alt="logo Facebook"
                  breakPoint={1023}
                  size={sizeLogo}
                />
                Facebook
              </Link>
            </li>
            <li className={style.li}>
              <Link
                href={"mailto:cocosurf.charentemaritime@gmail.com"}
                className={style.link}
              >
                <Img
                  src="/contact/mail.png"
                  alt="logo d un mail"
                  breakPoint={1023}
                  size={sizeLogo}
                />
                <span>cocosurf.</span>
                <span>charentemaritime</span>
                <span>@gmail.com</span>
              </Link>
            </li>
            <li className={style.li}>
              <Link href={""} target={"_blank"} className={style.link}>
                <Img
                  src="/contact/instagram.png"
                  alt="logo Instagram"
                  breakPoint={1023}
                  size={sizeLogo}
                />
                Instagram
              </Link>
            </li>
            <li className={style.li}>
              <Link href={""} target={"_blank"} className={style.link}>
                <Img
                  src="/contact/youtube.png"
                  alt="logo youtube"
                  breakPoint={1023}
                  size={sizeLogo}
                />
                Youtube
              </Link>
            </li>
          </ul>
        </section>
        <h2>{t("h2")}</h2>
        <section className={style.rejoindre}>
          <ol className={style.ol}>
            <li className={style.li_ol}>
              <strong>{t("s1")}</strong>
              {t("p1")}
            </li>
            <li className={style.li_ol}>
              {t("p2")}
              <strong>{t("s2")}</strong>
              {t("p3")}
              <br />
              {t("attention")}
            </li>
            <li className={style.li_ol}>
              <strong>{t("s3")}</strong>
              {t("p4")}
            </li>
            <li className={style.li_ol}>{t("s4")}</li>
            <li className={style.li_ol}>
              <Image
                src={"/contact/cocoCamion.png"}
                width={200}
                height={136}
                alt="dessin du camion de coco surf"
              />
            </li>
          </ol>
          <ul className={style.list}>
            <li className={style.li_img}>
              <Img
                src="/contact/carte.png"
                size={{ w: 300, ww: 416, h: 275, hh: 381 }}
                breakPoint={1023}
                alt="carte des localisation de coco surf"
              />
            </li>
            <li className={style.li_img}>
              <Img
                src="/contact/photo.png"
                size={{ w: 300, ww: 532, h: 200, hh: 354 }}
                breakPoint={1023}
                alt="photo de Morgan dans son camion Coco Surf"
              />
            </li>
          </ul>
        </section>
        <section className={style.center}>
          <div className={style.cart}>
            <p className={style.p}>{t("line1")}</p>
            <p className={style.p}>{t("line2")}</p>
            <p className={style.p}>{t("line3")}</p>
            <p className={style.p}>{t("line4")}</p>
          </div>
          <div className={style.cart}>
            <div className={style.velo}>
              <Image
                src={"/contact/velo.png"}
                width={145}
                height={115}
                alt="logo d un vélo"
              />
              <p className={style.desc}>Ronce-Les-Bains : 7 km</p>
              <p className={style.desc}>La tremblade : 8 km</p>
              <p className={style.desc}>Les Mathes : 10 km</p>
              <p className={style.desc}>La Palmyre : 13 km</p>
            </div>
            <div className={style.voiture}>
              <Image
                src={"/contact/voiture.png"}
                width={179}
                height={115}
                alt="logo d une voiture "
              />
              <p className={style.desc}>Marennes : 15 km</p>
              <p className={style.desc}>Saint-palais : 25 km</p>
              <p className={style.desc}>Vaux-Sur-Mer : 26 km</p>
              <p className={style.desc}>Royan : 30 km</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}
