import Img from "@/compoments/utilities/videos/images";
import Image from "next/image";
import style from "./cadeau.module.css"
import Btn from "@/compoments/utilities/button/btn";
import { useTranslations } from "next-intl";
import Header from "@/compoments/header/header";
import Footer from "@/compoments/footer/footer";


export default function Page() {
  const t = useTranslations("cadeau")
  return (
    <>
    <Header/>
    
    <main className={style.main}>
      <Img
        src="/cadeau/carte.png"
        alt="image d une carte cadeaux Coco Surf"
        breakPoint={768}
        size={{
          w: 300,
          h: 200,
          ww: 600,
          hh: 400,
        }}
      />
      <Image 
      src={"/Icons/palmier.png"}
      width={94}
      height={96}
      alt="palmier stylisé Coco Surf"
      />
      <h1 className={style.h1}>
        {t("h1")}
      </h1>
      <h2 className={style.h2}>
      {t("h2")}
      </h2>
      <p className={style.p}>
      {t("p1")}
      </p>
      <p className={style.p}>
      {t("p2")}
      </p>
      <div className={style.color}>

      </div>
      <ol className={style.ol}>
        <li className={style.li}>
        {t("s1")}
        </li>
        <li className={style.li}>
        {t("s2")}
        </li>
        <li className={style.li}>
        {t("s3")}
        </li>
        <li className={style.li}>
          <Btn to="tarifsEtReservations" txt={t("call")}/>
        </li>
      </ol>
    </main>
    <Footer/>
    </>
  );
}



/*
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
*/