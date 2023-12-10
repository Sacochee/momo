import Footer from '@/compoments/footer/footer'
import Header from '@/compoments/header/header'
import Links from '@/compoments/utilities/links/links'
import React from 'react'

export default function Page() {

    return (
    <>
    <Header/>
    <main>
        <h1>
            Merci votre command a bien etais valider !
        </h1>
        <section>
            <h2>
                les informationc complémentaires ont etais envoyer par mail
            </h2>
            <div>
                <p>
                    email des informations : {}
                </p>
                <p>
                    Id de la command : 
                </p>
            </div>
            <Links href={"/"}>
                go to home
            </Links>
            <div>
                <p>
                    Si l email ne correspond pas ou une erreur a etais commmise hésite pas a nous contacter 
                </p>
                <p>
                    par tel : 06060606
                </p>
                <p>
                    page contact
                </p>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}
