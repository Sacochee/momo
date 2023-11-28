import Header from "@/compoments/header/header"
import style from "./style.module.css"
import { useTranslations } from "next-intl"
import Footer from "@/compoments/footer/footer"


export const metadata = {
    title : "useTranslations()",
    description : "useTranslations()"
}

export default function Pages() {
  const t = useTranslations("cgv")
  return (
    <>
    <Header/>
   
    <main>
        <h1>
          fasfas
        </h1>
        <section>
            <h2>{t("uu")}</h2>
            <ul>
                <li>asasd</li>
                <li>asd</li>
                <li>d</li>
            </ul>
        </section>
    </main>
    <Footer/>
     </>
  )
}
