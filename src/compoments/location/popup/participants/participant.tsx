import style from "./part.module.css";
import { useAtom } from "jotai";
import {
  participant,
  participants,
} from "@/app/[locale]/(compl)/locationAtoms";
import { Dispatch, MouseEvent, useEffect, useRef, useState } from "react";
import { SetStateAction } from "jotai/vanilla";
import Image from "next/image";

export default function Participant({
  nb,
  setState,
  setA,
}: {
  nb: number;
  setState: any;
  setA: Dispatch<SetStateAction<boolean>>;
}) {
  const refName = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const times = Array.from({ length: nb });
  const [part, setPart] = useAtom(participants);

  const valider = (e: MouseEvent<HTMLButtonElement>) => {
    const lst: participant[] = [];
    let err = false;
    const li: NodeListOf<HTMLLIElement> | undefined =
      refName.current?.querySelectorAll("li");

    li?.forEach((item) => {
      let name = item.querySelector("input[name='name']") as HTMLInputElement;
      let details = item.querySelector(
        "input[name='details']"
      ) as HTMLInputElement;
      if (name.value != "" && details.value != "")
        lst.push({ name: name.value, details: details.value });
      else 
        err = true;
    });
    setPart(lst);

    if (!err) {
      setError(false);
      setState(false);
      setA(true);
    } else setError(true);
  };

  return (
    <div ref={refName} className={style.main}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className={style.title}
      >
        <h1>Participants</h1>
      </div>
      <div
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={() => setState()}
        className={style.close}
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
      <form className={style.center} style={{flexDirection:"column"}} onSubmit={(e)=>e.preventDefault()}>
        <ul className={style.ul} style={{marginBottom:"50px"}}>
          {times.map((_, index) => (
            <Part
              key={crypto.randomUUID()}
              part={part ? part[index] : undefined}
            />
          ))}
        </ul>
        {error && <div className={style.error}>Informations invalides</div>}
        <button
          onClick={(e) => {
            valider(e);
          }}
          
          className={style.btn}
        >
          Valider
        </button>
      </form>
    </div>
  );
}

function Part({ part }: { part: participant | undefined }) {

  const styleInput = (input: HTMLInputElement) => {
    if (input.value == "") {
      input.classList.add(style.err);
      if (input.parentElement) input.parentElement.style.color = "red";
    } else {
      input.classList.remove(style.err);
      if (input.parentElement)
        input.parentElement.style.color = "rgb(10,10,10)";
    }
  };
  return (
    <li key={crypto.randomUUID()} className={style.li}>
      <Image
        src="/Icons/personne.png"
        alt="une personne debout"
        width={26}
        height={64}
        style={{ marginRight: "20px" }}
      />
      <div>
        <div className={style.case}>
          Nom Prénom
          <input
            type="text"
            name="name"
            placeholder="Dupont Léo"
            className={style.input}
            defaultValue={part ? part.name : ""}
            required
            onInvalid={(e)=>styleInput(e.target as HTMLInputElement)}
            onChange={(e)=>styleInput(e.target as HTMLInputElement)}
            key={crypto.randomUUID()}
            onSubmitCapture={(e) =>{e.preventDefault(); console.log("rigth here")}}
          />
        </div>
        <div className={style.case}>
          Taille et Poids
          <input
            type="text"
            name="details"
            placeholder="175 cm / 70 kg"
            className={style.input}
            defaultValue={part ? part.details : ""}
            key={crypto.randomUUID()}
            required
            onInvalid={(e)=>styleInput(e.target as HTMLInputElement)}
            onChange={(e)=>styleInput(e.target as HTMLInputElement)}
          />
        </div>
      </div>
    </li>
  );
}
