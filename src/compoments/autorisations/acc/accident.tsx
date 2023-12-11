"use client"
import { useAtom } from "jotai";
import style from "./style.module.css";
import { _accidentError, _accidentFiche } from "@/app/[locale]/(compl)/states";

export default function Accident() {
  const [fiche, setFiche] = useAtom(_accidentFiche)
  const [err] = useAtom(_accidentError)

  const assignNom = (arg : string) =>{
    const obj = fiche
    Object.assign(obj, {nom : arg})
    setFiche(obj)
  }
  const assignPrenom = (arg : string) =>{
    const obj = fiche
    Object.assign(obj, {prenom : arg})
    setFiche(obj)
  }
  const assignTel = (arg : string) =>{
    const obj = fiche
    Object.assign(obj, {tel : arg})
    setFiche(obj)
  }

  return (
    <section className={style.accident}>
      <h2 className={style.accident_h2}>Fiche accident</h2>
      <p className={style.accident_p}>Personne a contacter en cas d accident</p>
      <div className={style.accident_input}>
        <p className={style.label_input}>Nom</p>

        <input
          type="text"
          placeholder="Ex : LePompier"
          onChange={(e) => assignNom(e.target.value)}
          value={fiche.nom ? fiche.nom : ""}
          className={style.input}
        />
        <div
          style={err.errorNom ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>

        <p className={style.label_input}>Prenom</p>
        <input
          type="text"
          placeholder="Ex : Sam"
          value={fiche.prenom ? fiche.prenom : ""}
          onChange={(e) => assignPrenom(e.target.value)}
          className={style.input}
        />
        <div
          style={err.errorPremon ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>

        <p className={style.label_input}>Numéro de téléphone</p>

        <input
          type="text"
          placeholder="ex : 06 20 71 98 64"
          className={style.input}
          value={fiche.tel ? fiche.tel : ""}
          onChange={(e) => assignTel(e.target.value)}
        />
        <div
          style={err.errorTel ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>
      </div>
    </section>
  );
}
