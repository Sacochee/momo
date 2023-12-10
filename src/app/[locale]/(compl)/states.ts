"use client"
import { atom } from "jotai"

// types //

export type formule = |"1"|"2"|"3"|"4"|"5"|"10carte"|"10HS"|"enfant"|"acompte"|"part1"|"part2";
type surfers = {id:string;nom :string;prenom : string;age : number;poids : number;taille : number;formule : formule;info?:string}
type paid = "cb" | "others"
type accient = {nom : string;prenom : string ;tel : string ;pb?: string;};


// cours // 

const _context = atom<formule | null>(null)

const _date = atom<string | null>(null)
const _time = atom<string | null>(null)
const _surfers = atom<surfers[]>([])

const _payMethode = atom<paid | null>(null)
const _accidentFiche = atom<accient | null>(null)



// class compiller //

export default class Comp {
    static coursToJson(){

    }
}


// exports //

export {_context, _date, _time, _surfers, _payMethode, _accidentFiche,}