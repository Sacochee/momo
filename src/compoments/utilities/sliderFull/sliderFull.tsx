"use client";
import { useEffect, useState } from "react";
import style from "./slider.module.css";
import Image from "next/image";

export type obj = {
  data: {
    name: string;
    w: number;
    h: number;
    alt: string;
  }[];
  from: string;
};

export default function SliderFull({ data, from }: obj) {
  const max = data.length;
  const [i, setI] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
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

  const [droite, setDroite] = useState("white");
  const [gauche, setGauche] = useState("white");

  if (load) {
    return (
      <section className={style.section}>
        <div className={style.command}>
          <div
            onClick={() => change(-1)}
            onMouseEnter={() => setGauche("black")}
            onMouseLeave={() => setGauche("white")}
            className={style.btn}
          >
            <Arrow color={gauche} />
          </div>
          <div
            onClick={() => change(+1)}
            onMouseEnter={() => setDroite("black")}
            onMouseLeave={() => setDroite("white")}
            className={style.btn}
          >
            <Arrow color={droite} />
          </div>
        </div>
        <Image 
            src={`/${from}/${data[i].name}`}
            fill
            sizes="100vw"
            // width={screen.width}
            // height={(screen.width * data[i].h) / data[i].w}
            alt={data[i].alt}
          />
      </section>
    );
  } else {
    <div>
      loading ...
      asda
      adsasd
      adsasd
      asdasd 
      asdasda 
      asdasd a 
      asd 
    </div>
  }
}

function Arrow({ color }: { color: string }) {
  return (
    <div className={style.box_line}>
      <span className={style.line} style={{ backgroundColor: color }}></span>
      <span className={style.line} style={{ backgroundColor: color }}></span>
    </div>
  );
}
