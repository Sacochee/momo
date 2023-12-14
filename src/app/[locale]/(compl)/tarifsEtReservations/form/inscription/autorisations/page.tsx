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
import ButtonValiderFormCours from "@/compoments/autorisations/valider/btnValider";

const Accident = dynamic(
  () => import("@/compoments/autorisations/acc/accident"),
  {
    loading: () => <SkulAcident/>,
  }
);

const Pay = dynamic(() => import("@/compoments/autorisations/pay/pay"), {
  loading: () => <SkullPay/>,
});

const Auth = dynamic(() => import("@/compoments/autorisations/auth/authProvided"), {
  loading: () => <SkullAuth/>,
});

const Btn = dynamic(()=> import("@/compoments/autorisations/valider/btnValdierProvided"),{
  loading : ()=><div>Loading...</div>
} )
export default function page() {
  const [date] = useAtom(_date);
  const [time] = useAtom(_time);
  const [surfers] = useAtom(_surfers);
  if (date != undefined && time != undefined && surfers != undefined) {
    
    return (
      <>
        <HeaderForm />
        <main className={style.main}>
          <h1 className={style.h1}>Vous y etes Presque !</h1>
          <div className={style.line}></div>
          <div className={style.container}>
            <Accident/>
            <Pay/>
          </div>
          <Auth/>
          <Btn/>
        </main>
        <Footer />
      </>
    );
  } else {
    return <div>Error</div>;
  }
}

// async function createSess(json: any) {
//   const st = loadStripe(
//     "pk_test_51OIuhCIYV55vLMC7QFKsjsUqCABzRVPIipLD650KVJQHOyx0iquQBsgIh7xosXQFD3rHCxBXHtgZ7mknlUr7nwat00IQSoWRfo"
//   );
//   const stripe = await st;
//   const checkout = await axios.post(
//     "http://localhost:8080/stripe/checkout",
//     { data: JSON.stringify(json) },
//     {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );
//   console.log(checkout);
//   const result = await stripe?.redirectToCheckout({
//     sessionId: checkout.data.id,
//   });
//   if (result?.error) {
//     console.log(result.error);
//   }
// }

//
