"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import style from "./style.module.css";
import { useAtom } from "jotai";
import { _date, _time, _surfers } from "@/app/[locale]/(compl)/states";
import dynamic from "next/dynamic";
import SkulAcident from "@/compoments/autorisations/acc/skulAcident";
import SkullPay from "@/compoments/autorisations/pay/skull";
import SkullAuth from "@/compoments/autorisations/auth/skull";
import Bar from "@/compoments/utilities/barProgress/bar";
import { redirect } from "@/navigation";

const Accident = dynamic(
  () => import("@/compoments/autorisations/acc/accident")
);

const Pay = dynamic(() => import("@/compoments/autorisations/pay/pay"), {
  loading: () => <SkullPay />,
});

const Auth = dynamic(
  () => import("@/compoments/autorisations/auth/authProvided"),
  {
    loading: () => <SkullAuth />,
  }
);

const Btn = dynamic(
  () => import("@/compoments/autorisations/valider/btnValdierProvided"),
  {
    loading: () => <div>Loading...</div>,
  }
);
export default function page() {
  const [date] = useAtom(_date);
  const [time] = useAtom(_time);
  const [surfers] = useAtom(_surfers);
  if (date != undefined && time != undefined && surfers != undefined) {
    return (
      <>
        <HeaderForm />
        <main className={style.main}>
          <div>Bulletin d'inscription</div>
          <div>Étape 2/3</div>
          <Bar tape={2} />
          <div className={style.container}>
            <Accident />
            <Pay />
          </div>
          <Auth />
          <Btn />
        </main>
        <Footer />
      </>
    );
  } else {
    redirect({ pathname: "/app/error", query: { type: "NoPay", from : "cours" } });
  }
}
