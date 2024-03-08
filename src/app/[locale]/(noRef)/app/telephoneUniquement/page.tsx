import dynamic from "next/dynamic"
import SkullTel from "@/compoments/utilities/telephone/skull"
import style from "./style.module.css"


const Contact = dynamic(()=>import("@/compoments/utilities/telephone/tel"),{
    loading : ()=><SkullTel/>
})



export default function page() {
  return (
    <main className={style.main}>
        <h2 className={style.h2}>
            Attention CocoSurf n accepte uniquement les Réservation par Téléphone 
        </h2>
        <p className={style.p}>
            Merci de nous appellé avant de remplir ce formulaire
        </p>
        <Contact />
    </main>
  )
}
