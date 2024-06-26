"use client";
import style from "./css.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/compoments/utilities/slider/Loading";
import { useAtom } from "jotai";
import { routing } from "@/app/[locale]/(routing)/state";

type Data = {
  w: number;
  h: number;
  directory: string;
  img: {
    name: string;
    alt: string;
  }[];
};

export default function SliderImage({ data }: { data: Data }) {
  const w = data.w;
  const h = data.h;
  const max = data.img.length;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(0);
  const [laoding, setLoading] = useState(false);
  const [hyrat, setHydrat] = useState(false);
  const [atom, setAtom] = useAtom(routing);

  const increment = (v: 1 | -1) => {
    if (index + v >= max) setIndex(0);
    else if (index + v < 0) setIndex(max - 1);
    else setIndex(index + v);
  };

  const getHeight = (nb: number): number => {
    return (nb * h) / w;
  };

  useEffect(() => {
    setLoading(true);
    setAtom(false)
  }, [index]);

  useEffect(() => {
    setWidth(screen.availWidth);
    setHeight(getHeight(screen.availHeight));
    setHydrat(true);
  }, []);

  if (hyrat == true) {
    return (
      <div className={style.slider}>
        {!atom && (
          <div className={style.btns}>
            <button onClick={() => increment(-1)} className={style.btn}>
              <span>{""}</span>
              <span>{""}</span>
            </button>
            <button onClick={() => increment(1)} className={style.btn}>
              <span>{""}</span>
              <span>{""}</span>
            </button>
          </div>
        )}
        <div className={style.center}>
          {laoding && <Loading />}
          <Image
            src={`/${data.directory}/${data.img[index].name}`}
            alt={data.img[index].alt}
            width={width}
            height={height}
            className={style.img}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    );
  }
}
