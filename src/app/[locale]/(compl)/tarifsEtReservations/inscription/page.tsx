"use client";
import { useState } from "react";
import HeaderForm from "../../../../../compoments/inscription/header/header";
import Footer from "@/compoments/footer/footer";
import AddBtn from "@/compoments/inscription/comps/addBtn";
import Surfer from "@/compoments/inscription/comps/surfer";
import style from "./style.module.css";
import Overlay from "@/compoments/inscription/comps/overlay";
import Links from "@/compoments/utilities/links/links";
import { _context, _date, _surfers, _time, formule } from "../../states";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import Bar from "@/compoments/utilities/barProgress/bar";

export type Data = {
  id: string;
  nom: string;
  prenom: string;
  age: number;
  taille: number;
  poids: number;
  formule: formule;
  info?: string;
};

export default function Page() {
  const [count, setCount] = useState<number>(0);
  const [surfers, setSurfers] = useAtom(_surfers);
  const [popUp, setPopUp] = useState(false);
  const [currenteData, setCurrenteData] = useState<Data | undefined>(undefined);
  const [date] = useAtom(_date),
    [horas] = useAtom(_time),
    [errorDate, setErrorDate] = useState(false),
    [context] = useAtom(_context);

  const addData = (arg: Data) => {
    if (currenteData) {
      const newArrayData: Data[] = [];
      surfers.forEach((item) => {
        if (item.id != currenteData.id) {
          newArrayData.push(item);
          setCount(count + 1);
        } else {
          newArrayData.push(arg);
          setCount(count + 1);
        }
      });
      setSurfers(newArrayData);
    } else {
      setSurfers((d) => [...d, arg]);
      setCount(count + 1);
    }
  };

  const deleteUser = (id: string) => {
    const localData = surfers;
    if (localData) {
      const ObjLocalData = localData;
      const newArrayData: any[] = [];
      ObjLocalData.forEach((item) => {
        if (item.id != id) newArrayData.push(item);
      });
      setSurfers(newArrayData);
      setCount(count - 1);
    }
  };

  const editUser = (id: string) => {
    surfers.forEach((item) => (item.id == id ? setCurrenteData(item) : null));
    setPopUp(true);
  };

  const newSurfer = () => {
    setErrorDate(false);
    if (date != undefined && horas != undefined) {
      setErrorDate(false);
      setPopUp(true);
      setCurrenteData(undefined);
    } else {
      setErrorDate(true);
      window.scrollTo(0, 0);
    }
  };

  const completed = () => {
    if (surfers.length > 0 && date != undefined && horas != undefined)
      return false;
    else return true;
  };

  if (popUp) {
    return (
      <div className={style.center} style={{margin:"0"}}>
        <div className={style.overlay}>
          <Overlay
            data={currenteData as Data}
            cb={(d) => addData(d)}
            contexte={context as any}
            close={() => setPopUp(false)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={`${popUp ? style.flou : undefined}`}>
          <HeaderForm />
        </div>

        <main className={style.main}>
          <div className={`${popUp ? style.flou : undefined} ${style.center}`}>
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
              <div>Bulletin d'inscription</div>
              <div>Étape 1/3</div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Bar tape={1} />
            </div>

            <div className={style.topPart}>
              <span className={style.topSpan}>Nombres de Particitants :</span>
              <span className={style.topCount}>{" " + count}</span>
            </div>
            <div className={style.boxx}>
              <SelectionDate errorDate={errorDate} />

              <SectionSurfers
                data={surfers}
                editUser={editUser}
                deleteUser={deleteUser}
                newSurfer={newSurfer}
              />
            </div>
            <div className={style.center}>
              <button
                disabled={completed()}
                style={{ background: "none", border: "none" }}
              >
                <Links
                  href={"/tarifsEtReservations/inscription/autorisations"}
                  className={`${style.btnValider} ${
                    completed() ? style.btnValiderOff : undefined
                  }`}
                >
                  Valider
                </Links>
              </button>
            </div>
          </div>
        </main>
        <div className={`${popUp ? style.flou : undefined}`}>
          <Footer />
        </div>
      </>
    );
  }
}

function SectionSurfers({
  data,
  editUser,
  deleteUser,
  newSurfer,
}: {
  data: any[];
  editUser: any;
  deleteUser: any;
  newSurfer: any;
}) {
  return (
    <section className={style.box}>
      <ul className={style.ul}>
        {data.map((item) => (
          <Surfer
            data={item}
            edit={(data) => {
              editUser(data);
            }}
            rm={(data) => {
              deleteUser(data);
            }}
            key={uuidv4()}
          />
        ))}
      </ul>
      <div onClick={newSurfer}>
        <AddBtn />
      </div>
    </section>
  );
}

function SelectionDate({ errorDate }: { errorDate: boolean }) {
  const [date, setDate] = useAtom(_date);
  const [horas, setHoras] = useAtom(_time);
  return (
    <section className={style.top}>
      <div className={style.topPart}>
        {errorDate ? (
          <div className={style.topError}>
            La Date n est pas correctement complété
          </div>
        ) : undefined}
        <div className={style.topDate}>
          <span>Date de votre Premier cours :</span>
          <input
            type="date"
            value={date ? date : ""}
            onChange={(e) => setDate(e.target.value)}
            className={style.topInput}
          />
        </div>
        <div className={style.topHours}>
          <span>Heure de votre premier cours :</span>
          <input
            type="time"
            value={horas ? horas : ""}
            onChange={(e) => setHoras(e.target.value)}
            className={style.topInput}
          />
        </div>
      </div>
    </section>
  );
}
