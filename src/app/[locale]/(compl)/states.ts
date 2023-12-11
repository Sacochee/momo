"use client"
import { atom, useAtom } from "jotai"

// types //

export type formule = |"1"|"2"|"3"|"4"|"5"|"10carte"|"10HS"|"enfant"|"acompte"|"part1"|"part2";
type surfers = {id:string;nom :string;prenom : string;age : number;poids : number;taille : number;formule : formule;info?:string}
export type paid = "cb" | "others"
type accient = {nom : string | undefined;prenom : string| undefined ;tel : string | undefined;pb?: string;};


// cours // 

const _context = atom<formule | null>(null)
//inscription //
const _date = atom<string | null>(null)
const _time = atom<string | null>(null)
const _surfers = atom<surfers[]>([])
// pay //
const _payMethode = atom<paid | undefined>(undefined)
const _txtPay = atom<string | null>(null)
const _errorPay = atom<boolean>(false)
//acident//
const _accidentFiche = atom<accient >({nom : undefined, prenom : undefined, tel : undefined})
const _accidentError = atom<{
    errorNom : boolean ,
    errorPremon : boolean ,
    errorTel : boolean 
}>({
    errorNom : false ,
    errorPremon :false,
    errorTel : false
})
// auth //
const _conditions = atom<{cgv : boolean, anul : boolean,photo : boolean, min?:boolean, maj?:boolean}>({cgv : false, anul : false, photo : false})
const _errorCondtions = atom<{cgv : boolean,anul : boolean, min:boolean, maj:boolean, photo : boolean }>({cgv : false, anul:false, min: false, maj :false,photo :false})
const _NameNoPhoto = atom<string | undefined>(undefined)
//exports //
export {_context, _date, _time, _surfers, _payMethode,_txtPay,_errorPay, _accidentFiche,_accidentError,
    _conditions,_errorCondtions, _NameNoPhoto}

//functions  //

export function acidentIsOK(){
    const [accidentFiche] = useAtom(_accidentFiche)
    const [error, setError] = useAtom(_accidentError)

    if(!accidentFiche?.nom)
        setError({errorNom : true,errorPremon : error?.errorPremon,errorTel: error?.errorTel})
    else
        setError({errorNom : false,errorPremon : error?.errorPremon,errorTel: error?.errorTel})
    if(!accidentFiche?.prenom)
        setError({errorNom : error?.errorNom,errorPremon : true,errorTel: error?.errorTel})
    else
        setError({errorNom : error?.errorNom,errorPremon : false,errorTel: error?.errorTel})
    if(!accidentFiche?.tel)
        setError({errorNom : error?.errorNom,errorPremon : error?.errorPremon,errorTel: true})
    else
        setError({errorNom : error?.errorNom,errorPremon : error?.errorPremon,errorTel: false})

    if(error?.errorNom == false && error?.errorPremon == false && error.errorTel == false){
        return true
    }else{
        return false
    }   
}

export function payIsOK(){
    const [pay] = useAtom(_payMethode)
    const [txt] = useAtom(_txtPay)
    const [err, setErr] = useAtom(_errorPay)

    if(pay == null){
        setErr(true)
        return false
    }else if(pay == "others"){
        if(!txt){
            setErr(true)
            return false
        }else{
            setErr(false)
            return true
        }
    }else{
        setErr(false)
        return true
    }
        
}

export function AuthIsOK(){
    const [conditons] = useAtom(_conditions)
    const [err, setError] = useAtom(_errorCondtions)
    const [name] = useAtom(_NameNoPhoto)
    
    if(conditons.anul == true && conditons.cgv == true){
        if(conditons.maj == majeur() && conditons.min == mineur()){
            setError({cgv : false, anul : false, min : false, maj : false, photo : false})
            if(conditons.photo == false){
                if(name == undefined){
                    setError({cgv : err.cgv, anul : err.anul, min : err.min, maj : err.maj, photo : true})
                    return false
                }
            }else
              return true  
        }else{
            if(conditons.min != mineur()){
                setError({cgv : err.cgv, anul : err.anul, min : true, maj : err.maj, photo : err.photo})
                return false
            }else{
                setError({cgv : err.cgv, anul : err.anul, min : false, maj : err.maj, photo : err.photo})
            }
            if(conditons.maj != majeur()){
                setError({cgv : err.cgv, anul : err.anul, min : err.min, maj : true, photo : err.photo})
                return false
            }else{
                setError({cgv : err.cgv, anul : err.anul, min : err.min, maj : false, photo : err.photo})
            }
        }
            
    }else{
        if(conditons.cgv == false){
            setError({cgv : true, anul : err.anul, min : err.min, maj : err.maj, photo : err.photo})
            return false
        }else
            setError({cgv : false, anul : err.anul, min : err.min, maj : err.maj, photo : err.photo})
        if(conditons.anul == false){
            setError({cgv : err.cgv, anul : true, min : err.min, maj : err.maj, photo : err.photo})
            return false
        }else
            setError({cgv : err.cgv, anul : false, min : err.min, maj : err.maj, photo : err.photo})
    }
}

// 2nd functions verifs //

export const majeur = () => {
    const [data]= useAtom(_surfers)
    let bool = false;
    data.forEach((item: any) => {
      if (item.age >= 18) {
        bool = true;
      }
    });
    return bool;
  };

export const mineur = () => {
    const [data]= useAtom(_surfers)
    let bool = false;
    data.forEach((item: any) => {
      if (item.age < 18) {
        bool = true;
      }
    });
    return bool;
  };

// class compiller //

export default class Comp {
    static coursToJson(){

    }
}


// exports //

