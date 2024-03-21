"use client";
import { useAtom } from "jotai";
import style from "./style.module.css";
import { _accidentError, _accidentFiche } from "@/app/[locale]/(compl)/states";
import PhoneNumberInput from "@/compoments/utilities/phone/phone";
import { useState } from "react";

export default function Accident() {
  const [fiche, setFiche] = useAtom(_accidentFiche);
  const [err] = useAtom(_accidentError);
  const [error, setError] = useState();

  return (
    <section className={style.accident}>
      <p className={style.accident_p}>Personne à contacter en cas d accident</p>
      <div className={style.accident_input}>
        <p className={style.label_input} style={err.errorNom ? {color:"red"} : undefined}>Nom</p>

        <input
          type="text"
          placeholder="Ex : Le Pompier"
          onChange={(e) =>
            setFiche({
              ...fiche,
              nom: e.target.value ? e.target.value : undefined,
            })
          }
          value={fiche.nom ? fiche.nom : ""}
          className={`${style.input} ${
            err.errorNom ? style.inputError : undefined
          }`}
        />
        {err.errorNom ? (
          <div className={style.errorName} id="erreur">
            Attention ce champs est obligatoire
          </div>
        ) : undefined}

        <p className={style.label_input} style={err.errorPremon ? {color:"red"} : undefined}>Prénom</p>
        <input
          type="text"
          placeholder="Ex : Sam"
          value={fiche.prenom ? fiche.prenom : ""}
          onChange={(e) =>
            setFiche({
              ...fiche,
              prenom: e.target.value ? e.target.value : undefined,
            })
          }
          className={`${style.input} ${
            err.errorPremon ? style.inputError : undefined
          }`}
        />
        {err.errorPremon ? (
          <div className={style.errorName} id="erreur">
            Attention ce champs est obligatoire
          </div>
        ) : undefined}

        <p className={style.label_input} style={err.errorTel ? {color:"red"} : undefined}>Numéro de téléphone</p>

        <div className={style.hey}>
          <input
            type="text"
            className={`${style.input} ${
              err.errorTel ? style.inputError : undefined
            }`}
            placeholder="ex : 06 20 71 98 64"
            value={fiche.tel ? fiche.tel : ""}
            onChange={(e) => setFiche({ ...fiche, tel: e.target.value })}
          />
        </div>
        {err.errorTel ? (
          <div className={style.errorName} id="erreur">
            Attention ce champs est obligatoire
          </div>
        ) : undefined}
      </div>
    </section>
  );
}
