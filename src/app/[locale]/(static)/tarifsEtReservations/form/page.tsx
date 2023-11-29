"use client"
import Footer from '@/compoments/footer/footer'
import HeaderForm from '@/compoments/inscription/header/header'
import style from "./style.module.css"
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/navigation'

export default function page() {
    const params = useSearchParams()
    const router = useRouter()
    let redirect : string;
    if(params.get("days"))
        redirect = `/tarifsEtReservations/form/inscription?days=${params.get("days")}`
    else
        redirect = '/tarifsEtReservations/form/inscription'
  return (
    <>
    <HeaderForm/>
    <main className={style.main}>
        <h1 className={style.h1}>
            Avez vous Appeller l'Ecole au préalable ?
        </h1>
        <div className={style.btns}>
            <button className={style.btn} onClick={()=>router.push(redirect as any)}>
                Oui
            </button>
            <button className={style.btn} onClick={()=>router.push("/reservationObligatoireParTelephone")}>
                non 
            </button>
        </div>
    </main>
    <Footer/>
    </>
    
  )
}
