import Image from 'next/image'
import style from './body.module.css'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai';
import { Mat, mat } from '@/app/[locale]/(compl)/locationAtoms';

export default function Body({off} : {off : () => void}) {
    const main = useRef(null);
    const [supp, setSupp] = useState({case : false, kase : false})
    const [mat, setMat] = useAtom(Mat)
    const [error, setError] = useState(false)

    const [state1, setState1] = useState<pre>(mat.body?.length && mat.body.length > 0 ? { a : mat.body[0].time, b : mat.body[0].quantite} : {a : undefined, b : undefined})
    const [state2, setState2] = useState<pre>(mat.body?.length && mat.body.length > 1 ? { a : mat.body[1].time, b : mat.body[1].quantite} : {a : undefined, b : undefined})
    const [state3, setState3] = useState<pre>(mat.body?.length && mat.body.length > 2 ? { a : mat.body[2].time, b : mat.body[2].quantite} : {a : undefined, b : undefined})
    

    useEffect(()=>{
        if(mat.body?.length == 3 ){
            setSupp({kase : true, case : true})
        }else if (mat.body?.length == 2){
            setSupp(s => ({...s, case : true}))
        }
        console.log(mat.body)
    },[])

    const valider = ()=>{
        setError(false)
        let err = false
        const div = main.current! as HTMLDivElement;
        div.querySelectorAll("section").forEach(item =>{
            const input = item.querySelector('input') as HTMLInputElement
            const inputParent = item.querySelector('input')?.parentElement as HTMLDivElement
            const select = item.querySelector('select') as HTMLSelectElement
            const selectParent = item.querySelector('select')?.parentElement as HTMLDivElement
            if(input.value == '') {input.style.borderColor = 'red'; err = true; if(inputParent) inputParent.style.color = 'red'}
            else{ input.style.borderColor = 'rgb(10,10,10)'; if(inputParent) inputParent.style.color = 'rgb(10,10,10)'}
            if(select.value == ""){ select.style.borderColor = 'red'; err = true; if(selectParent) selectParent.style.color = 'red'}
        })

        if(err == false){
            let obj : mat[] = []
            div.querySelectorAll("section").forEach(item =>{
                const input = item.querySelector('input') as HTMLInputElement
                const select = item.querySelector('select') as HTMLSelectElement
                if(input.value && select.value)
                    obj.push({time : select.value, quantite : input.valueAsNumber})
            })
            setMat({...mat, body : obj})
            off()
        }else setError(true)
        
    }

  return (
    <div className={style.wrapper} ref={main}>
        <div className={style.title}>
            <Image 
            src={"/loc/planche-de-surf.png"}
            alt=''
            width={22}
            height={59}
            style={{marginRight:"40px"}}
            className={style.image}
            />
            <h1 className={style.h1}>Bodyboard + leash</h1>
            <div className={style.close} onClick={()=>off()}>
                <span className={style.line}></span>
                <span className={style.line}></span>
            </div>
        </div>
        <div>
            <Layout rmcount={()=>{off(); setMat({...mat, body : undefined})}}>
                <Content s={state1.a} c={state1.b}/>
            </Layout>
            {supp.case && 
            <Layout rmcount={()=>setSupp({...supp, case : false})}>
                <Content s={state2.a} c={state2.b}/>
            </Layout>
            }
            {supp.kase  && 
            <Layout rmcount={()=>setSupp({...supp, kase : false})}>
                <Content s={state3.a} c={state3.b}/>
            </Layout>
            }
            <div onClick={()=>{ (supp.case == false) ? setSupp({...supp, case : true}) : supp.kase == false &&  setSupp({...supp, kase : true}) }} className={style.href}>
                Ajouter ce materiel pour une autre durée
            </div>
        </div>
        <div className={style.btnContainer}>
            <button className={style.btn} onClick={valider}>
                Valider
            </button>
        </div>
    </div>
  )
}


function Content({s, c} : {s: string | undefined , c: number | undefined}){
    const[select, setSelect] = useState<string>(s ? s : "")
    const [count, setCount] = useState<number>(c ? c : 1)
    return(
        <section className={style.content}>
            <div className={style.box}>
                <label className={style.label}>
                    Duré de la location
                    <select className={style.case} onChange={(e)=>setSelect(e.target.value)} value={select ? select : ""}>
                        <option value={""}>-</option>
                        <option value="1t">2h</option>
                        <option value="2t">Journée</option>
                        <option value="3t">Semaine</option>
                    </select>
                </label>
                <div>
                    <p>
                        Prix unité {getPriceBody(select!)} €
                    </p>
                </div>
            </div>
            <div className={style.box}>
                <label className={style.label}>
                    Quantité
                    <input type="number"  min={1} className={`${style.case} ${style.input}`} value={count ? count : ""} onChange={(e)=>setCount(e.target.valueAsNumber)}/>
                </label>
                <div>
                    <p>Sous-total {count*getPriceBody(select!) ? count*getPriceBody(select!)  : 0} €</p>
                </div>
            </div>
            
        </section>
    )
}


export function getPriceBody(v:string) : number {
    switch(v){
        case "1t":
            return 10
        case "2t":
            return 15
        case "3t":
            return 75
        default :
            return 0
    }
}

function Layout({children, rmcount} : {children : ReactNode, rmcount : ()=>void}){

    return(
        <div >
            <div className={style.delete} title='Pour supprimer ce formulaire' onClick={rmcount}>
                <Image 
                src={"/Icons/supprimer.png"}
                alt=''
                width={16}
                height={16}
                />
            </div>
            {children}
        </div>
    )
}


type pre = {
    a: undefined | string,
    b : undefined | number
}