"use client";
import Image from "next/image";
import { MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks";
import style from "./header.module.css";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname()
  const change = (route : string) =>router.replace(path, {locale : route})
  return (
    <header style={{zIndex:"4"}}>
      <div className={style.lang}>
        <div onClick={() => change("fr")} className={style.drp}>
          <Image
            src={"/icons/fr.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Francais (version francaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("en")} className={style.drp}>
          <Image
            src={"/icons/en.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Anglais (version anglaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("de")} className={style.drp}>
          <Image
            src={"/icons/de.png"}
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
        />
      </div>
      {etat ? <Nav /> : undefined}
    </nav>
  );
}

function Burger({ state, setState }:{state : boolean, setState : any}) {
  const lines = useRef()as MutableRefObject<HTMLDivElement>;
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
      <li className={style.item} onClick={() => router.push("/")}>
        {t("home")}
      </li>
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
          <li
            className={style.subItem}
            onClick={() => router.push("/prensatation-des-cours")}
          >
            {t("c1")}
          </li>
          <li
            className={style.subItem}
            onClick={() => router.push("/tarifs-et-réservation")}
          >
            {t("c2")}
          </li>
          <li
            className={style.subItem}
            onClick={() => router.push("/l-equipe-et-la-plage")}
          >
            {t("c3")}
          </li>
        </ul>
      ) : undefined}
      <li className={style.item} onClick={() => router.push("/location")}>
        {t("loc")}
      </li>
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
          <li
            className={style.subItem}
            onClick={() => router.push("/carte-cadeau")}
          >
            {t("p1")}
          </li>
          <li
            className={style.subItem}
            onClick={() => router.push("/Surf-camp-bretagne")}
          >
            {t("p2")}
          </li>
          <li
            className={style.subItem}
            onClick={() => router.push("/logements-et-partenaires")}
          >
            {t("p3")}
          </li>
        </ul>
      ) : undefined}
      <li className={style.item} onClick={() => router.push("/photos")}>
        {t("photo")}
      </li>
      <li className={style.item} onClick={() => router.push("/contact")}>
        {t("contact")}
      </li>
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
      <li className={style.li_l} onClick={() => router.push("/")}>
        <Image src={"/Icons/logo.png"} width={105} height={105} alt = "Logo de cocosurf"/>
      </li>
      <li className={style.li_l} onClick={() => router.push("/")}>
        {t("home")}
      </li>
      <li
        className={style.li_l}
        onMouseEnter={() => setCours(true)}
        onMouseLeave={() => setCours(false)}
      >
        {t("cours")}
        {cours ? (
          <div className={style.trans}>
            <ul className={style.subpart}>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/prensatation-des-cours")}
              >
                {t("c1")}
              </li>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/tarifs-et-réservation")}
              >
                {t("c2")}
              </li>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/l-equipe-et-la-plage")}
              >
                {t("c3")}
              </li>
            </ul>
          </div>
        ) : undefined}
      </li>
      <li className={style.li_l} onClick={() => router.push("/location")}>
        {t("loc")}
      </li>
      <li
        className={style.li_l}
        onMouseEnter={() => setPetit(true)}
        onMouseLeave={() => setPetit(false)}
      >
        {t("petit")}
        {petit ? (
          <div className={style.trans}>
            <ul className={style.subpart}>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/carteCadeaux")}
              >
                {t("p1")}
              </li>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/bretagne")}
              >
                {t("p2")}
              </li>
              <li
                className={style.li_l_sub}
                onClick={() => router.push("/l-equipe-et-la-plage")}
              >
                {t("p3")}
              </li>
            </ul>
          </div>
        ) : undefined}
      </li>
      <li className={style.li_l} onClick={() => router.push("/photos")}>
        {t("photo")}
      </li>
      <li className={style.li_l} onClick={() => router.push("/contact")}>
        {t("contact")}
      </li>
    </ul>
  );
}
