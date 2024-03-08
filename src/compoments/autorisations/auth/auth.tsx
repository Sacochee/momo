import { useAtom } from "jotai";
import style from "./style.module.css";
import {
  _NameNoPhoto,
  _conditions,
  _errorCondtions,
  _surfers,
} from "@/app/[locale]/(compl)/states";
import { useState } from "react";
import { tree } from "next/dist/build/templates/app-page";

export default function Auth({
  majeur,
  mineur,
}: {
  majeur: Function;
  mineur: Function;
}) {
  const [err, setErr] = useAtom(_errorCondtions);
  const [conditions, setConditions] = useAtom(_conditions);
  const [name, setName] = useAtom(_NameNoPhoto);
  const [image, setImage] = useState<boolean | null>(null);
  const [an, setAn] = useState(false);

  return (
    <section className={style.section}>
      <h2 className={style.h2}>Autorisations</h2>
      <div className={style.underline}></div>
      <ul className={style.ul}>
        <li className={style.li}>
          <h3>CGV</h3>
          <div>
            <p>
              Je déclare avoir pris connaisance{" "}
              <a href="/">Des conditions générals de ventes</a>
            </p>
            {err.cgv ? (
              <div id="erreur" className={style.erreur}>
                Attention ceci est obligatoire
              </div>
            ) : undefined}
            <div className={`${style.checkContainer} ${err.cgv ? style.inputError : undefined}`}>
              <input
                type="checkbox"
                checked={conditions.cgv ? true : false}
                onChange={(e) => {
                  setConditions({
                    ...conditions,
                    cgv: e.target.checked,
                  });
                  if(e.target.checked = true)
                    setErr({...err, cgv : false})
                }}
                className={style.checkbox}
              />
              <span>J'accepte les CGV</span>
            </div>
          </div>
        </li>
        <li className={style.li}style={{position:"relative"}}>
          <h3>Conditions d'annulation</h3>
          
          <div className={`${an ? style.absolute : undefined}`}>
            {an ? (
              <div >
                <p>
                Conditions d'annulation En cas d’annulation suite à de mauvaises conditions météorologiques $
                (absence de vagues, drapeau rouge), les cours qui ne pourront pas être effectués seront, en 
                accord avec les stagiaires : remplacés par une activité de substitution (technique surf, bodyboard, 
                jeux aquatiques, etc) OU reportés à une date ultérieure OU annulés et feront l’objet d’un avoir ou 
                remboursement
                <br/>
                En cas d'annulation ou absence du fait du client : plus de 10 jours avant le début du stage : 
                remboursement complet // entre 10 et 5 jours précédent la date de début de stage : encaissement 
                des arrhes éventuels // 5 jours avant le début du stage ou durant celui-ci : l’intégralité de la 
                prestation sera facturée, pas de remboursement (sauf présentation d’un certificat médical)
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => {
                      setAn(an ? false : true);
                    }}
                    className={style.btnLire}
                  >
                    <div style={{ paddingRight: "10px" }}>Lire Moins</div>

                    <Fleche css={{ transform: "translateY(-4px)" }} />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  [...] remboursement complet // entre 10 et 5 jours précédant
                  la date de début de stage : encaissement des arrhes éventuels
                  // 5 jours avant le début du stage ou durant celui-ci :
                  l’intégralité de la prestation sera facturée, pas de
                  remboursement [...]
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => setAn(an ? false : true)}
                    className={style.btnLire}
                  >
                    <div style={{ paddingRight: "10px" }}>Lire Tout</div>
                    <Fleche css={{ transform: "rotate(90deg)" }} />
                  </button>
                </div>
              </div>
            )}

            {err.anul ? (
              <div id="erreur" className={style.erreur}>
                Attention ceci est obligatoire
              </div>
            ) : undefined}
            <div  className={`${err.anul ? style.inputError : undefined} ${style.checkContainer}`}>
              <input
              type="checkbox"
              checked={conditions.anul ? true : false}
              onChange={(e) =>{
                setConditions({
                  ...conditions,
                  anul: e.target.checked,
                })
                if(e.target.checked == true)
                  setErr({...err, anul : false})
              }
              }
              className={style.checkbox}
            />
            <span>J'accepte les C.A.</span>
            </div>
            
          </div>
        </li>
        <li className={style.li}>
          <h3>Droit à l'image</h3>
          <div>
            <p>
              En souscrivant aux prestations organisées par l’école de surf COCO
              SURF, vous autorisez cette dernière à utiliser les photos et films
              de votre image réalisés pendant votre stage, pour la production de
              tout document publicitaire et ce sans contre partie financière.
            </p>
            {err.photo ? (
              <div id="erreur" className={style.erreur}>
                Attention ceci est obligatoire
              </div>
            ) : undefined}
            <div className={style.checkContainer}>
              <input
                type="checkbox"
                checked={image ? true : image == null ? false : false}
                onChange={() => {
                  setConditions({
                    ...conditions,
                    photo: true,
                  });
                  setImage(true);
                  setName(undefined)
                  setErr({...err, photo : false})
                }}
                className={style.checkbox}
              />
              <span>J'accpète le droit à l'image</span>
            </div>
            <div className={style.checkContainer}>
              <input
                type="checkbox"
                checked={image ? false : image == null ? false : true}
                onChange={(e) => {
                  setConditions({
                    ...conditions,
                    photo: false,
                  });
                  setImage(false);
                }}
                className={style.checkbox}
              />
              <span>Je refuse le droit à l'image </span>
            </div>
          </div>
        </li>

        {mineur() ? (
          <li className={style.li}>
            <h3>Autorisation -18</h3>
            <div>
              <p>
                J'autorise mon enfant / mes enfants à suivre les activités
                décrites sur ce bulletin. Je certifie qu’il/elle est
                médicalement apte à la pratique sportive et qu’il/elle sait
                nager. En conséquence, je dégage COCO SURF de toute
                responsabilité en cas d’accident lui survenant, ou provoqué par
                suite de son inaptitude médicale ou non respect des consignes du
                moniteur.
              </p>
              {err.min ? (
                <div id="erreur" className={style.erreur}>
                  Attention ceci est obligatoire
                </div>
              ) : undefined}
              <div className={`${err.min ? style.inputError : undefined} ${style.checkContainer}`}>
                <input
                type="checkbox"
                checked={conditions.min ? true : false}
                onChange={(e) =>{
                  setConditions({ ...conditions, min: e.target.checked })
                  if(e.target.checked == true)setErr({...err, min : false})}
                }
                className={style.checkbox}
              />
              <span>J autorise mon enfant a participé a ce cours</span>
              </div>
              
            </div>
          </li>
        ) : undefined}
        {majeur() ? (
          <li className={style.li}>
            <h3>Autorisation +18</h3>
            <div>
              <p>
                Je certifie que les participants majeurs sont médicalement aptes
                à la pratique sportive et qu'ils savent nager. En conséquence,
                je dégage COCO SURF de toute responsabilité en cas d’accident
                survenant à l'un des participants, ou provoqué par suite d'une
                inaptitude physique ou médicale ou non respect des consignes du
                moniteur.{" "}
              </p>
              {err.maj ? (
                <div id="erreur" className={style.erreur}>
                  Attention ceci est obligatoire
                </div>
              ) : undefined}
              <div
                className={`${err.maj ? style.inputError : undefined} ${
                  style.checkContainer
                }`}
              >
                <input
                  type="checkbox"
                  checked={conditions.maj ? true : false}
                  onChange={(e) => {
                    setConditions({
                      ...conditions,
                      maj: e.target.checked,
                    });
                    if (e.target.checked == true)
                      setErr({
                        ...err,
                        maj: false,
                      });
                  }}
                  className={style.checkbox}
                  //mettre un trucs in checbox
                />
                <span>J'accepte la décharge +18</span>
              </div>
            </div>
          </li>
        ) : undefined}
      </ul>
    </section>
  );
}

function Fleche({ css }: { css?: Object }) {
  return (
    <div className={style.fleche} style={css as any}>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  );
}
