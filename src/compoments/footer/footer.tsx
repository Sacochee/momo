"use client";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import Image from "next/image";
import Links from "../utilities/links/links";
import ScrollTop from "../utilities/scroll/scroll";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={style.footer}>
      <ScrollTop /> 
      <div className={style.part}>
        <div className={style.title}>Infos</div>
        <div className={style.subpart}>
          <a href="tel:+33628051411" className={style.item}>
            Tél : +33 (0)6 28 05 14 11
          </a>
          <div className={style.item}>
            <Links href={"/mentionsLegales"}>
              Mentions légales
            </Links>
          </div>
          <div className={style.item}>
            <Links href={"/CGV"}>
              CGV
            </Links>
          </div>
          <div className={style.item}>2024 © Copyright Coco Surf</div>

          <a href="/" className={style.item}>
            Réalisation Lost Graphic Design // Julie Lostanlen
          </a>
        </div>
      </div>
      <div className={style.part}>
        <div className={style.title}>Réseaux sociaux</div>
        <div
          className={style.logo}
        >
          <a href="https://www.facebook.com/COCO-SURF-%C3%A9cole-de-surf-en-Charente-Maritime-828817494122745/" target="_blank" className={style.a}>
           <Image
            src={"/Icons/face.png"}
            width={30}
            height={30}
            alt="logo du lien facebook de cocosurf"
            className={style.img}
            /> 
          </a>
          <a href="https://www.facebook.com/COCO-SURF-%C3%A9cole-de-surf-en-Charente-Maritime-828817494122745/" target="_blank" className={style.a}>
            <div>Facebook</div>
          </a>
          
        </div>
        <div
          className={style.logo}
        >
          <a href="https://www.instagram.com/cocosurf_ecoledesurf/" className={style.a}>
            <Image
            src={"/Icons/insta.png"}
            width={30}
            height={30}
            alt="logo du lien instagram de cocosurf"
            className={style.img}
          />
          </a>
          <a href="https://www.instagram.com/cocosurf_ecoledesurf/" className={style.a}> 
            <div>Instagram</div>
          </a>
          
        </div>
        <div
          className={style.logo}
        >
          <a href="https://www.youtube.com/channel/UCpHW4IR4nAFnul7Ux1q1yOA" target="_blank" className={style.a}>
            <Image
            src={"/Icons/yt.png"}
            width={35}
            height={35}
            alt="logo du lien Youtube de cocosurf"
            className={style.img}
          />
          </a>
          <a href="https://www.youtube.com/channel/UCpHW4IR4nAFnul7Ux1q1yOA" target="_blank" className={style.a}>
            <div>Youtube &nbsp;&nbsp;</div>
          </a>
          
          
        </div>
      </div>
      <div className={style.part}>
        <Image
          src={"/Icons/logo_clair.png"}
          width={150}
          height={150}
          alt="logo de cocosurf l ecole de surf"
          onClick={() => router.push("/")}
        />
      </div>
      <div className={style.vide}></div>
    </footer>
  );
}
