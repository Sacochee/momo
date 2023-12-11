import { useAtom } from "jotai";
import style from "./style.module.css";
import {
  _NameNoPhoto,
  _conditions,
  _errorCondtions,
  majeur,
  mineur,
} from "@/app/[locale]/(compl)/states";
import { useState } from "react";
import { useRouter } from "@/navigation";

export default function Auth() {
  const router = useRouter();
  const [err] = useAtom(_errorCondtions);
  const [conditons, setConditions] = useAtom(_conditions);
  const [name, setName] = useAtom(_NameNoPhoto);
  const [image, setImage] = useState<boolean | null>(null);
  const [an, setAn] = useState(false);

  const setCgv = (arg: boolean) => {
    setConditions({
      cgv: arg,
      anul: conditons.anul,
      min: conditons?.min,
      maj: conditons?.maj,
      photo: conditons.photo,
    });
  };

  const setAnul = (arg: boolean) => {
    setConditions({
      cgv: conditons.cgv,
      anul: arg,
      min: conditons?.min,
      maj: conditons?.maj,
      photo: conditons.photo,
    });
  };

  const setMin = (arg: boolean) => {
    setConditions({
      cgv: conditons.cgv,
      anul: conditons.anul,
      min: arg,
      maj: conditons?.maj,
      photo: conditons.photo,
    });
  };

  const setMaj = (arg: boolean) => {
    setConditions({
      cgv: conditons.cgv,
      anul: conditons.anul,
      min: conditons?.min,
      maj: arg,
      photo: conditons.photo,
    });
  };

  const setPhoto = (arg: boolean) => {
    setConditions({
      cgv: conditons.cgv,
      anul: conditons.anul,
      min: conditons?.min,
      maj: conditons?.maj,
      photo: arg,
    });
  };
  return (
    <section className={style.section}>
      <h2>Autorisations</h2>
      <ul className={style.ul}>
        <li className={style.li}>
          <h3>CGV</h3>
          <div>
            <p>
              Je déclare avoir pris connaisance{" "}
              <a href="/">Des conditions générals de ventes</a>
            </p>
            {err.cgv ? <div>Attention ceci est obligatoire</div> : undefined}
            <div className={style.lineBox}>
              <input
                type="checkbox"
                checked={conditons.cgv ? true : false}
                onChange={(e) => {
                  setCgv(e.target.checked ? true : false);
                }}
                style={{ position: "relative", top: "7px" }}
              />
              <span>J'accepte les conditions de ventes générals</span>
            </div>
          </div>
        </li>
        <li className={style.li}>
          <h3>Annulation</h3>
          <div>
            {an ? (
              <div>
                <p>
                  Conditions d'annulation En cas d’annulation suite à de
                  mauvaises conditions météorologiques (absence de vagues,
                  drapeau rouge), les cours qui ne pourront pas être effectués
                  seront, en accord avec les stagiaires : remplacés par une
                  activité de substitution (technique surf, bodyboard, jeux
                  aquatiques, etc) OU reportés à une date ultérieure OU annulés
                  et feront l’objet d’un avoir ou remboursement En cas
                  d'annulation ou absence du fait du client : plus de 10 jours
                  avant le début du stage : remboursement complet // entre 10 et
                  5 jours précédant la date de début de stage : encaissement des
                  arrhes éventuels // 5 jours avant le début du stage ou durant
                  celui-ci : l’intégralité de la prestation sera facturée, pas
                  de remboursement (sauf présentation d’un certificat médical) 1
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => {
                      setAn(an ? false : true);
                    }}
                    className={style.btnLire}
                  >
                    <div style={{paddingRight:"10px"}}>
                      Lire Moins 
                    </div>
                    
                    <Fleche css={{transform:"translateY(-4px)"}}/>
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
                    <div style={{paddingRight:"10px"}}>
                      Lire Tout
                    </div>
                    <Fleche css={{transform : "rotate(90deg)"}}/>
                  </button>
                </div>
              </div>
            )}

            {err.anul ? <div>Attention ceci est obligatoire</div> : undefined}
            <input
              type="checkbox"
              checked={conditons.anul ? true : false}
              onChange={(e) => setAnul(e.target.checked ? true : false)}
            />
            <span>J'accepte les condition d anulations</span>
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
            {err.photo ? <div>eoror</div> : undefined}
            <div>
              <input
                type="checkbox"
                checked={image ? true : image == null ? false : false}
                onChange={(e) => {
                  setPhoto(true);
                  setImage(true);
                }}
              />
              <span>J'accpète le droit à l'image</span>
            </div>
            <div>
              <input
                type="checkbox"
                checked={image ? false : image == null ? false : true}
                onChange={(e) => {
                  setPhoto(false);
                  setImage(false);
                }}
              />
              <span>Je refuse le droit à l'image </span>
            </div>

            {image == false ? (
              <div>
                <input type="text" />
              </div>
            ) : undefined}
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
              {err.min ? <div>Attention ceci est obligatoire</div> : undefined}
              <input
                type="checkbox"
                checked={conditons.min ? true : false}
                onChange={(e) => setMin(e.target.checked ? true : false)}
              />
              <span>J autorise mon enfant a participé a ce cours</span>
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
              {err.maj ? <div>Attention ceci est obligatoire</div> : undefined}
              <input
                type="checkbox"
                checked={conditons.maj ? true : undefined}
                onChange={(e) => setMaj(e.target.checked ? true : false)}
              />
              <span>Jaccepte la décharge +18</span>
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
