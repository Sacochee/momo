import { useAtom } from "jotai"
import style from "./recap.module.css"
import { Mat, mat } from "@/app/[locale]/(compl)/locationAtoms"
import { getPrice } from "../popup/planche/planche"
import { getPriceBody } from "../popup/body/body"
import { getPriceWet } from "../popup/wetswuit/Wet"
import { useEffect, useState } from "react"

export default function Recap() {
    const [mat] = useAtom(Mat)
    const[prix, setPrix] = useState(0)
    const pricePLanche = price("planche")
    const priceWet = price("body")
    const priceBOdy = price("wet")

    useEffect(()=>{
        let price : number = 0
        if(mat.planche){
            for(let i =0; i < mat.planche.length; i++){
                price += pricePLanche(mat.planche[i].time)*mat.planche[i].quantite
            }
        }
        if(mat.wet){
            for(let i =0; i < mat.wet.length; i++){
                price += priceWet(mat.wet[i].time)*mat.wet[i].quantite
            }
        }
        if(mat.body){
            for(let i =0; i < mat.body.length; i++){
                price += priceBOdy(mat.body[i].time)*mat.body[i].quantite
            }
        }
        
        setPrix(price)
    },[mat])
  return (
    <div>
        {mat.planche != undefined && <Row content={mat.planche} fnc={price("planche")} name="Planche de surf + leash"/>}
        {mat.wet != undefined && <Row content={mat.wet} fnc={price("asd")} name="Combinaison intégrale ou shorty"/>}
        {mat.body != undefined && <Row content={mat.body} fnc={price("body")} name="Bodyboard + leash"/>}
        <div className={style.total}>
            <div className={style.a}>
                Total
            </div>
            <Case content={undefined} fnc={getType}/>
            <Case content={undefined} fnc={getType}/>
            <Case content={undefined} fnc={getType} ClassName={style.rm}/>
            <div className={style.p} >
                {prix} €
            </div>
        </div>
    </div>
  )
}


function Row({content, fnc, name} : {content  : mat[], fnc : Function, name :string}){
    const [price, setPrice] = useState(0)
    const [mat] = useAtom(Mat)

    useEffect(()=>{
        let numb : number = 0;
        for(let i = 0 ; i < content.length; i++){
            numb += fnc(content[i].time!)*content[i].quantite
        }
        setPrice(numb)
    },[mat])
    return (
        <div className={style.container}>
            <div className={style.avant}>
                <div>
                    {name}
                </div>
            </div>
           <div className={style.row}>
                {content.length > 0 ? <Case content={content[0]} fnc={getType}/>  : <Case content={undefined} fnc={getType}/>}
                {content.length > 1 ? <Case content={content[1]} fnc={getType}/>  : <Case content={undefined} fnc={getType}/>}
                {content.length > 2 ? <Case content={content[2]} fnc={getType}/>  : <Case content={undefined} fnc={getType}/>}
                
            </div> 
            <div className={style.apres}>
                {price} €
            </div>
        </div>
        
    )
}


function Case({content, fnc, ClassName} : {content  : mat | undefined, fnc : (v :mat)=>retrun, ClassName? : string}){
    if(content){
        return (
            <div className={style.case}>
                <div>
                    {fnc(content).name}
                </div>
                <div>
                    {fnc(content).quantite}
                </div>
            </div>
        )
    }else 
        return (
            <div className={`${style.void} ${ClassName}`}></div>
        )
    
}

function getType(item : mat):retrun{
    switch(item.time){
        case "1t":
            return {name : "2h", quantite : item.quantite}
        case "2t":
            return {name : "journée", quantite : item.quantite}
        case "3t":
            return {name : "semaine", quantite : item.quantite}
        default:
            return {name : "semaine", quantite : 0}
    }
}

function price(v : string) : Function{
    switch(v){
        case "planche":
            return getPrice
        case "body":
            return getPriceBody
        default:
            return getPriceWet
    }
}

type retrun = {
    name : string,
    quantite : number
} 