"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeaderForm from "../../../../../../compoments/inscription/header/header";
import Footer from "@/compoments/footer/footer";
import AddBtn from "@/compoments/inscription/comps/addBtn";
import Surfer from "@/compoments/inscription/comps/surfer";
import style from "./style.module.css";
import { uuid } from "uuidv4";
import Overlay from "@/compoments/inscription/comps/overlay";
import { useRouter } from "@/navigation";
import Links from "@/compoments/links";

export type Data = {
  id: string;
  nom: string;
  prenom: string;
  age: number;
  taille: number;
  poid: number;
  formule:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "10carte"
    | "10HS"
    | "enfant"
    | "acompte"
    | "part1"
    | "part2"
    | string;
  info?: string;
};

const surerfstest: Data[] = [
  {
    id: uuid(),
    nom: "Morgan",
    prenom: "Fédéric",
    age: 44,
    taille: 165,
    poid: 68,
    formule: "1",
  },
];

export default function Page() {
  const params = useSearchParams().get("days");
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Data[] | []>([]);
  const [popUp, setPopUp] = useState(false);
  const [currenteData, setCurrenteData] = useState<Data | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined),
    [horas, setHoras] = useState<string | undefined>(undefined),
    [errorDate, setErrorDate] = useState(false);
  useEffect(() => {
    const preLoadData = localStorage.getItem("Data");
    if (preLoadData) {
      const objJs = JSON.parse(preLoadData);
      setData(objJs);
      setCount(objJs.length);
    }
  }, []);

  const addData = (arg: Data) => {
    if (currenteData) {
      const newArrayData: Data[] = [];
      data.forEach((item) => {
        if (item.id != currenteData.id) {
          newArrayData.push(item);
        } else {
          newArrayData.push(arg);
        }
      });
      setData(newArrayData);
      localStorage.removeItem("Data");
      localStorage.setItem("Data", JSON.stringify(newArrayData));
    } else {
      setData((d) => [...d, arg]);
      setCount(count + 1);
      localStorage.removeItem("Data");
      localStorage.setItem("Data", JSON.stringify(data));
    }
  };

  const deleteUser = (id: string) => {
    const localData = data;
    if (localData) {
      const ObjLocalData = localData;
      const newArrayData: any[] = [];
      ObjLocalData.forEach((item) => {
        if (item.id != id) newArrayData.push(item);
      });
      localStorage.removeItem("Data");
      localStorage.setItem("Data", JSON.stringify(newArrayData));
      setData(newArrayData);
      setCount(count - 1);
    }
  };

  const editUser = (id: string) => {
    data.forEach((item) => (item.id == id ? setCurrenteData(item) : null));
    setPopUp(true);
  };

  const newSurfer = () => {
    setErrorDate(false);
    console.log(errorDate);
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
    if (data.length > 0 && date != undefined && horas != undefined)
      return false;
    else return true;
  };

  const NextData = () => {
    const d = {
      date: date,
      time: horas,
      surfers: data,
    };
    sessionStorage.setItem("Data", JSON.stringify(d));
  };
  return (
    <>
      <div className={`${popUp ? style.flou : undefined}`}>
        <HeaderForm />
      </div>

      <main className={style.main}>
        {popUp ? (
          <div className={style.overlay}>
            <Overlay
              data={currenteData as Data}
              cb={(d) => addData(d)}
              contexte="1"
              close={() => setPopUp(false)}
            />
          </div>
        ) : undefined}
        <div className={`${popUp ? style.flou : undefined} ${style.center}`}>
          <div className={style.topPart}>
            <span className={style.topSpan}>Nombres de Particitants :</span>
            <span className={style.topCount}>{" " + count}</span>
          </div>
          <div className={style.boxx}>
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
                    onChange={(e) => setDate(e.target.value)}
                    className={style.topInput}
                  />
                </div>
                <div className={style.topHours}>
                  <span>Heure de votre premier cours :</span>
                  <input
                    type="time"
                    onChange={(e) => setHoras(e.target.value)}
                    className={style.topInput}
                  />
                </div>
              </div>
            </section>

            <section className={style.box}>
              {true ? (
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
                    />
                  ))}
                </ul>
              ) : undefined}

              <div onClick={newSurfer}>
                <AddBtn />
              </div>
            </section>
          </div>
          <div className={style.center}>
            <button
              onClick={NextData}
              disabled={completed()}
              style={{ background: "none", border: "none" }}
            >
              <Links
                href={"/tarifsEtReservations/form/inscription/autorisations"}
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
