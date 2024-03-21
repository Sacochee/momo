import { useRef, useState } from "react";
import { Data } from "@/app/[locale]/(compl)/tarifsEtReservations/inscription/page";
import form from "./form.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Overlay({
  data,
  cb,
  close,
}: {
  data: Data;
  contexte: string;
  cb: (arg: Data) => void;
  close: () => void;
}) {
  const [prenom, setPrenom] = useState<string | undefined>(data?.prenom),
    [nom, setNom] = useState<string | undefined>(data?.nom),
    [age, setAge] = useState<number | undefined>(data?.age),
    [taille, setTaille] = useState<number | undefined>(data?.taille),
    [poid, setPoid] = useState<number | undefined>(data?.poids),
    [formule, setFormule] = useState(data?.formule),
    [info, setInfo] = useState(data?.info),
    [error, setError] = useState<string | false>();
  const createData = () => {
    cb({
      id: data ? data.id : uuidv4(),
      nom: nom!,
      prenom: prenom!,
      age: age!,
      taille: taille!,
      poids: poid!,
      formule: formule,
      info: info,
    });
    close();
  };
  return (
    <form className={form.container} onSubmit={() => createData()}>
      <div className={form.top}>
      <h2>Fiche Participant</h2>
      <div className={form.close} onClick={() => close()}>
        <span className={form.line}></span>
        <span className={form.line}></span>
      </div>
      </div>
      

      
      <div className={form.ext}>
        <div>
          <div className={form.part}>
            <div className={form.name}>
              <span className={form.abrit}>Prémon</span>
              <input
                type="text"
                value={prenom ? prenom : ""}
                onChange={(e) => setPrenom(regexName(e.target.value, prenom!))}
                placeholder="ex : Léo"
                className={form.input}
                required
              />
            </div>
            <div className={form.name}>
              <span className={form.abrit}>Nom</span>
              <input
                type="text"
                value={nom ? nom : ""}
                onChange={(e) => setNom(regexName(e.target.value, nom!))}
                placeholder="ex : Dubois"
                className={form.input}
                required={true}
              />
            </div>
          </div>
          <div className={form.prop}>
            <div className={form.case}>
              <span>Âge </span>
              <input
                type="number"
                value={age ? age : ""}
                onChange={(e) => setAge(+e.target.value)}
                placeholder="Ex 27"
                className={form.sizeInput}
                min={7}
                required={true}
              />
              <span>&nbsp;ans</span>
            </div>
            <div className={form.case}>
              <span>Taille </span>
              <input
                type="number"
                value={taille ? taille : ""}
                onChange={(e) => setTaille(+e.target.value)}
                placeholder="Ex 175 cm"
                className={form.sizeInput}
                min={0}
                required={true}
              />
              <span>&nbsp; cm</span>
            </div>
            <div className={form.case}>
              <span>Poids </span>
              <input
                type="number"
                value={poid ? poid : ""}
                onChange={(e) => setPoid(+e.target.value)}
                placeholder="Ex 70 kg"
                className={form.sizeInput}
                min={0}
                required={true}
              />
              <span>&nbsp;kg&nbsp;</span>
            </div>
          </div>
        </div>
        <div>
          <div className={form.formule}>
            <span>Formule choisie :</span>
            <select
              value={formule}
              onChange={(e) => setFormule(e.target.value as any)}
              className={form.select}
              required={true}
            >
              <option value=""> - </option>
              <option value={"1"}>1 Cours</option>
              <option value={"2"}>2 Cours</option>
              <option value={"3"}>3 Cours</option>
              <option value={"4"}>stage 4 cours</option>
              <option value={"5"}>5 Cours</option>
              <option value={"10carte"}>10 cours A la carte</option>
              <option value={"10HS"}>10 cours hors saisons</option>
              <option value={"enfant"}>Club enfant 10 cours</option>
              <option value={"part1"}>Cours particulier 1 personne</option>
              <option value={"part2"}> Cours particulier 2 personnes</option>
              <option value={"accompte"}>Acompte</option>
            </select>
          </div>

          <div className={form.textarea}>
            Notes pour l’équipe
            <textarea
              value={info ? info : ""}
              cols={25}
              rows={3}
              placeholder="problème médical ou info importante"
              onChange={(e) => setInfo(e.target.value)}
              className={form.textarea_obj}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={form.btn}>Valider</button>
      </div>
    </form>
  );
}

function regexName(arg: string, currentState: string) {
  const regex = /[^a-zA-Z ]/;
  if (arg.search(regex) != -1) return currentState;
  else if (arg == " ") return currentState;
  else return arg;
}
