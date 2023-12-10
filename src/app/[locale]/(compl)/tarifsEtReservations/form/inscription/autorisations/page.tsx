"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import { Suspense, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import style from "./style.module.css";
import { useAtom } from "jotai";
import { _date, _time, _surfers } from "@/app/[locale]/(compl)/states";
import dynamic from "next/dynamic";
import SkulAcident from "@/compoments/autorisations/acc/skulAcident";
import SkullPay from "@/compoments/autorisations/pay/skull";
import SkullAuth from "@/compoments/autorisations/auth/skull";

const Accident = dynamic(
  () => import("@/compoments/autorisations/acc/accident"),
  {
    loading: () => <SkulAcident/>,
  }
);

const Pay = dynamic(() => import("@/compoments/autorisations/pay/pay"), {
  loading: () => <SkullPay/>,
});

const Auth = dynamic(() => import("@/compoments/autorisations/auth/auth"), {
  loading: () => <SkullAuth/>,
});

export default function page() {
  const [date] = useAtom(_date);
  const [time] = useAtom(_time);
  const [surfers] = useAtom(_surfers);
  if (date != undefined && time != undefined && surfers != undefined) {
    const data = {
      surfers: surfers,
      date: date,
      time: time,
    };
    const [cgv, setCgv] = useState<undefined | string>(undefined),
      [errorCgv, setErrorCgv] = useState(false),
      [anul, setAnul] = useState<undefined | string>(undefined),
      [errorAnul, setErrorAnul] = useState(false),
      [maj, setMaj] = useState<undefined | string>(undefined),
      [errorMaj, setErrorMaj] = useState(false),
      [min, setMin] = useState<undefined | string>(undefined),
      [errorMin, setErrorMin] = useState(false),
      [errorNom, setErrorNom] = useState(false),
      [nom, setNom] = useState<string | undefined>(undefined),
      [prenom, setPrenom] = useState<string | undefined>(undefined),
      [tel, setTel] = useState<string | undefined>(undefined),
      [errorPrenom, setErrorPrenom] = useState(false),
      [errorTel, setErrorTel] = useState(false),
      [errorPay, setErrorPay] = useState(false),
      [payMethode, setPayMethode] = useState<string | undefined>(undefined),
      [txtPay, setTxtPay] = useState<string | undefined>(undefined);

    const majeur = () => {
      let bool = false;
      data.surfers.forEach((item: any) => {
        if (item.age >= 18) {
          bool = true;
        }
      });
      return bool;
    };
    const mineur = () => {
      let bool = false;
      data.surfers.forEach((item: any) => {
        if (item.age < 18) {
          bool = true;
        }
      });
      return bool;
    };

    const nextState = () => {
      setErrorAnul(false);
      setErrorCgv(false);
      setErrorMaj(false);
      setErrorMin(false);
      setErrorNom(false);
      setErrorPay(false);
      setErrorPrenom(false);
      setErrorTel(false);

      let error = false;
      if (prenom == undefined) {
        error = true;
        return setErrorTel(true);
      }

      if (nom == undefined) {
        error = true;
        return setErrorNom(true);
      }

      if (tel == undefined) {
        error = true;
        return setErrorTel(true);
      }

      if (min == undefined)
        if (mineur()) {
          error = true;
          return setErrorMin(true);
        }
      if (maj == undefined)
        if (majeur()) {
          error = true;
          return setErrorMaj(true);
        }

      if (cgv == undefined) {
        error = true;
        return setErrorCgv(true);
      }

      if (anul == undefined) {
        error = true;
        return setErrorAnul(true);
      }

      if (payMethode == undefined) {
        error = true;
        return setErrorPay(true);
      }

      if (payMethode == "others") {
        if (txtPay == undefined) return setErrorPay(true);
      }
      if ((error = false)) {
        const json = {
          time: data.time,
          date: data.date,
          payMethode: "cb",
          surfers: data.surfers,
          accidentFiche: {
            nom: nom,
            prenom: prenom,
            tel: tel,
          },
        };
        console.log("here");
        createSess(json);
      }
    };
    return (
      <>
        <HeaderForm />
        <main className={style.main}>
          <h1>Vous y etes Presque !</h1>
          <Accident
            nom={nom}
            setNom={setNom}
            errorNom={errorNom}
            prenom={prenom}
            setPrenom={setPrenom}
            errorPrenom={errorPrenom}
            tel={tel}
            setTel={setTel}
            errorTel={errorTel}
          />
          <Pay
            payMethode={payMethode}
            setPayMethode={setPayMethode}
            txtPay={txtPay}
            setTxtPay={setTxtPay}
            errorPay={errorPay}
          />
          <Auth
            cgv={cgv}
            setCgv={setCgv}
            anul={anul}
            setAnul={setAnul}
            min={min}
            setMin={setMin}
            maj={maj}
            setMaj={setMaj}
            errorAnul={errorAnul}
            errorCgv={errorCgv}
            errorMaj={errorMaj}
            errorMin={errorMin}
            mineur={mineur}
            majeur={majeur}
          />
          <button onClick={nextState}>Valider</button>
        </main>
        <Footer />
      </>
    );
  } else {
    return <div>Error</div>;
  }
}

async function createSess(json: any) {
  const st = loadStripe(
    "pk_test_51OIuhCIYV55vLMC7QFKsjsUqCABzRVPIipLD650KVJQHOyx0iquQBsgIh7xosXQFD3rHCxBXHtgZ7mknlUr7nwat00IQSoWRfo"
  );
  const stripe = await st;
  const checkout = await axios.post(
    "http://localhost:8080/stripe/checkout",
    { data: JSON.stringify(json) },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(checkout);
  const result = await stripe?.redirectToCheckout({
    sessionId: checkout.data.id,
  });
  if (result?.error) {
    console.log(result.error);
  }
}

//
