"use client";
import Image from "next/image";
import { MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks";
import style from "./header.module.css";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import Links from "../utilities/links/links";
import LiLinks from "../utilities/links/LiLink";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const change = (route: string) => router.replace(path, { locale: route });
  return (
    <header style={{ zIndex: "4" }}>
      <div className={style.lang}>
        <div onClick={() => change("fr")} className={style.drp}>
          <Image
            src={"/Icons/fr.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Francais (version francaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("en")} className={style.drp}>
          <Image
            src={"/Icons/en.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Anglais (version anglaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("de")} className={style.drp}>
          <Image
            src={"/Icons/de.png"}
            width={16}
            height={11}
            alt="logo du drapeaux allemand (version allemande)"
            priority={true}
          />
        </div>
      </div>
      {useMediaQuery(1024) ? <Laptop /> : <Mobile />}
    </header>
  );
}

function Mobile() {
  const router = useRouter();
  const [etat, setEtat] = useState(false);
  return (
    <nav className={style.cont}>
      <div className={style.center}>
        <Burger state={etat} setState={setEtat} />
        <Image
          src={"/Icons/logo.png"}
          width={50}
          height={50}
          alt="logo de cocosurf l ecole de surf"
          onClick={() => router.push("/")}
          style={{ zIndex: 1, backgroundColor: "white", borderRadius: "50%" }}
        />
      </div>
      {etat ? <Nav /> : undefined}
    </nav>
  );
}

function Burger({ state, setState }: { state: boolean; setState: any }) {
  const lines = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    state ? change : change;
  });
  const change = () => {
    setState(state ? false : true);
    lines.current.classList.toggle(style.active);
  };
  return (
    <div className={style.burger} onClick={change} ref={lines}>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  );
}

function Nav() {
  const router = useRouter();
  const [cour, setCour] = useState(false);
  const [petit, setPetit] = useState(false);
  const t = useTranslations("nav");
  return (
    <ul className={style.nav}>
      <LiLinks className={style.item} href={"/"}>
        {t("home")}
      </LiLinks>
      <li className={style.item} onClick={() => setCour(cour ? false : true)}>
        {t("cours")}
        <Image
          src={"/Icons/arrow.png"}
          width={10}
          height={10}
          alt="logo d une fleche d un menu deroutlant"
          className={cour ? style.arrow : undefined}
        />
      </li>
      {cour ? (
        <ul className={style.subClass}>
          <LiLinks className={style.subItem} href={"/presentationDesCours"}>
            {t("c1")}
          </LiLinks>
          <LiLinks className={style.subItem} href={"/tarifsEtReservations"}>
            {t("c2")}
          </LiLinks>
          <LiLinks className={style.subItem} href={"/plageEtEquipe"}>
            {t("c3")}
          </LiLinks>
        </ul>
      ) : undefined}
      <LiLinks className={style.item} href={"/location"}>
        {t("loc")}
      </LiLinks>
      <li
        className={style.item}
        onClick={() => {
          setPetit(petit ? false : true);
        }}
      >
        {t("petit")}
        <Image
          src={"/Icons/arrow.png"}
          width={10}
          height={10}
          alt="logo d une fleche d un menu deroutlant"
          className={petit ? style.arrow : undefined}
        />
      </li>
      {petit ? (
        <ul className={style.subClass}>
          <LiLinks className={style.subItem} href={"/carteCadeaux"}>
            {t("p1")}
          </LiLinks>
          <LiLinks className={style.subItem} href={"/bretagne"}>
            {t("p2")}
          </LiLinks>
          <LiLinks className={style.subItem} href={"/logement"}>
            {t("p3")}
          </LiLinks>
        </ul>
      ) : undefined}
      <LiLinks className={style.item} href={"/photos"}>
        {t("photo")}
      </LiLinks>
      <LiLinks className={style.item} href={"/contact"}>
        {t("contact")}
      </LiLinks>
    </ul>
  );
}
function Laptop() {
  const t = useTranslations("nav");
  const [cours, setCours] = useState(false),
    [petit, setPetit] = useState(false);
  const router = useRouter();
  return (
    <ul className={style.nav_l}>
      <LiLinks className={style.li_l} href={"/"}>
        <Image
          src={"/Icons/logo.png"}
          width={105}
          height={105}
          alt="Logo de cocosurf"
        />
      </LiLinks>
      <LiLinks className={style.li_l} href={"/"}>
        {t("home")}
      </LiLinks>
      <li
        className={style.li_l}
        onMouseEnter={() => setCours(true)}
        onMouseLeave={() => setCours(false)}
        
      >
        {t("cours")}
        {cours ? (
          <div className={style.trans} >
            <ul className={style.subpart}>
              <LiLinks className={style.li_l_sub} href={"/presentationDesCours"}>
                {t("c1")}
              </LiLinks>
              <LiLinks className={style.li_l_sub} href={"/tarifsEtReservations"}>
                {t("c2")}
              </LiLinks>
              <LiLinks className={style.li_l_sub} href={"/plageEtEquipe"}>
                {t("c3")}
              </LiLinks>
            </ul>
          </div>
        ) : undefined}
      </li>
      <LiLinks className={style.li_l} href={"/location"}>
        {t("loc")}
      </LiLinks>
      <li
        className={style.li_l}
        onMouseEnter={() => setPetit(true)}
        onMouseLeave={() => setPetit(false)}
        
      >
        {t("petit")}
        {petit ? (
          <div className={style.trans} >
            <ul className={style.subpart}>
              <LiLinks className={style.li_l_sub} href={"/carteCadeaux"}> 
                {t("p1")}
              </LiLinks>
              <LiLinks className={style.li_l_sub} href={"/bretagne"}>
                {t("p2")}
              </LiLinks>
              <LiLinks className={style.li_l_sub} href={"/logement"}>
                {t("p3")}
              </LiLinks>
            </ul>
          </div>
        ) : undefined}
      </li>
      <LiLinks className={style.li_l} href={"/photos"} >
        {t("photo")}
      </LiLinks>
      <LiLinks className={style.li_l} href={"/contact"}>
        {t("contact")}
      </LiLinks>
    </ul>
  );
}
