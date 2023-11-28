"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./slider.module.css";

export type obj = {
  data: {
    name: string;
    w: number;
    h: number;
    alt: string;
  }[];
};

export default function SliderFull({ data }: obj) {
  const max = data.length;
  const [i, setI] = useState(0);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    const time = setTimeout(() => {
      console.log("do");
    }, 1000);
    return clearTimeout(time);
  }, []);
  const change = (n: -1 | 1) => {
    if (i + n < max && i + n > 0) {
      setI(i + n);
    } else if (i + n < 0) {
      setI(max - 1);
    } else {
      setI(0);
    }
  };
  const [droite, setDroite] = useState("White");
  const [gauche, setGauche] = useState("White");
  return (
    <section className={style.section}>
      <div className={style.command}>
        <div
          onClick={() => change(-1)}
          onMouseEnter={() => setGauche("Black")}
          onMouseLeave={() => setGauche("White")}
          className={style.btn}
        >
          <Image
            src={`/Icons/select${gauche}.png`}
            width={20}
            height={20}
            alt="fleche qui pointe vers la gauche (arrière)"
          />
        </div>
        <div
          onClick={() => change(+1)}
          onMouseEnter={() => setDroite("Black")}
          onMouseLeave={() => setDroite("White")}
          className={style.btn}
        >
          <Image
            src={`/Icons/select${droite}.png`}
            width={20}
            height={20}
            alt="fleche qui pointe vers la droite (avant)"
          />
        </div>
      </div>
      <Image
        src={`/bretagne/${data[i].name}`}
        width={screen.width}
        height={(screen.width * data[i].h) / data[i].w}
        alt={data[i].alt}
      />
    </section>
  );
}
