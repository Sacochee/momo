import SkulAcident from "./skulAcident";
import style from "./style.module.css";

export default function Accident({
  nom,
  setNom,
  errorNom,
  prenom,
  setPrenom,
  errorPrenom,
  tel,
  setTel,
  errorTel,
}: {
    nom : string | undefined,
    setNom : Function,
    errorNom : boolean,
    prenom : string | undefined,
    setPrenom : Function,
    errorPrenom : boolean,
    tel : string | undefined,
    setTel : Function,
    errorTel : boolean
}) {
  return (
    <section className={style.accident}>
      <h2 className={style.accident_h2}>Fiche accident</h2>
      <p className={style.accident_p}>Personne a contacter en cas d accident</p>
      <div className={style.accident_input}>
        <p className={style.label_input}>Nom</p>

        <input
          type="text"
          placeholder="Ex : LePompier"
          onChange={(e) => setNom(e.target.value)}
          value={nom ? nom : ""}
          className={style.input}
        />
        <div
          style={errorNom ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>

        <p className={style.label_input}>Prenom</p>
        <input
          type="text"
          placeholder="Ex : Sam"
          value={prenom ? prenom : ""}
          onChange={(e) => setPrenom(e.target.value)}
          className={style.input}
        />
        <div
          style={errorPrenom ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>

        <p className={style.label_input}>Numéro de téléphone</p>

        <input
          type="text"
          placeholder="ex : 06 20 71 98 64"
          className={style.input}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <div
          style={errorTel ? undefined : { visibility: "hidden" }}
          className={style.errorName}
        >
          Attention ce champs est obligatoire
        </div>
      </div>
    </section>
  );
}
