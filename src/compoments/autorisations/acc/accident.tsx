"use client"
import { useAtom } from "jotai";
import style from "./style.module.css";
import { _accidentError, _accidentFiche} from "@/app/[locale]/(compl)/states";
import PhoneNumberInput from "@/compoments/utilities/phone/phone";

export default function Accident() {
  const [fiche, setFiche] = useAtom(_accidentFiche)
  const [err] = useAtom(_accidentError)

  return (
    <section className={style.accident}>
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

        <PhoneNumberInput set={setFiche} fiche={fiche}/>
        {err.errorTel ? (<div className={style.errorName} id="erreur">
          Attention ce champs est obligatoire
        </div>) : undefined}
      </div>
    </section>
  );
}
