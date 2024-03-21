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

  const data  = [
    {
      st : t("article1.t"),
      content : [
        t("article1.1"),t("article1.2"),t("article1.3"),
      ]
    },
    {
      st : t("article2.t"),
      content : [
        t("article2.1"),t("article2.2"),t("article2.3"),
      ]
    },
    {
      st : t("article3.t"),
      content : [
        t("article3.1"),t("article3.2"),t("article3.3"),t("article3.4"),t("article3.5"),t("article3.6"),t("article3.7"),t("article3.8"),
      ]
    },
    {
      st : t("article4.t"),
      content : [
        t("article4.1"),t("article4.2")
      ]
    },
    {
      st : t("article5.t"),
      content : [
        t("article5.1")
      ]
    },
    {
      st : t("article6.t"),
      content : [
        t("article6.1")
      ]
    },
    {
      st : t("article7.t"),
      content : [
        t("article7.1"),t("article7.2"),
      ]
    },

  ]

  return (
    <>
    <Header/>
   
    <main className={style.main}>
        <h1>
          {t("title")}
        </h1>
        <section>
            {data.map(item => <Article subTitle={item.st} content={item.content}/>)}
        </section>
    </main>
    <Footer/>
     </>
  )
}


function Article({subTitle, content} : { subTitle : string, content: string[]}){
  return (
    <>
      <h3>{subTitle}</h3>
      <ul>
        {content.map(item => <li>{item}</li>)}
      </ul>
    </>
  )
}


