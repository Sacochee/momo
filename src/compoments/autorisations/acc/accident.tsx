"use client"
import { useAtom } from "jotai";
import style from "./style.module.css";
import { _accidentError, _accidentFiche} from "@/app/[locale]/(compl)/states";

export default function Accident() {
  const [fiche, setFiche] = useAtom(_accidentFiche)
  const [err] = useAtom(_accidentError)

  return (
    <section className={style.accident}>
      <h2 className={style.accident_h2}>Fiche accident</h2>
      <p className={style.accident_p}>Personne a contacter en cas d accident</p>
      <div className={style.accident_input}>
        <p className={style.label_input}>Nom</p>

        <input
          type="text"
          placeholder="Ex : LePompier"
          onChange={(e) => setFiche({
            ...fiche,
            nom : e.target.value ? e.target.value : undefined
          }
          )}
          value={fiche.nom ? fiche.nom : ""}
          className={`${style.input} ${err.errorNom ? style.inputError : undefined}`}
        />
        {err.errorNom ? (<div className={style.errorName} id="erreur">
          Attention ce champs est obligatoire
        </div>) : undefined}

        <p className={style.label_input}>Prenom</p>
        <input
          type="text"
          placeholder="Ex : Sam"
          value={fiche.prenom ? fiche.prenom : ""}
          onChange={(e) => setFiche({
            ...fiche,
            prenom : e.target.value ? e.target.value : undefined
          })}
          className={`${style.input} ${err.errorPremon ? style.inputError : undefined}`}
        />
        {err.errorPremon ? (<div className={style.errorName} id="erreur">
          Attention ce champs est obligatoire
        </div>) : undefined}

        <p className={style.label_input}>Numéro de téléphone</p>

        <input
          type="text"
          placeholder="ex : 06 20 71 98 64"
          className={`${style.input} ${err.errorTel ? style.inputError : undefined}`}
          value={fiche.tel ? fiche.tel : ""}
          onChange={(e) => setFiche({
            ...fiche,
            tel : e.target.value ? e.target.value : undefined
          })}
        />
        {err.errorTel ? (<div className={style.errorName} id="erreur">
          Attention ce champs est obligatoire
        </div>) : undefined}
      </div>
    </section>
  );
}
