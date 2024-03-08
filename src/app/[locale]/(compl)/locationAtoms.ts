import { Atom, atom } from "jotai";

export type participant = {
    name : string,
    details : string
}

export const participants = atom<participant[] | undefined>(undefined);

type date = {
    date : string | undefined,
    heure : string |undefined,
}

export const Date = atom<date>({date : undefined, heure : undefined})

type arr = {
    planche : mat[] | undefined,
    wet : mat[] | undefined,
    body : mat[] | undefined
}

export type mat = {
    time : string
    quantite : number
}

export const Mat = atom<arr>({planche: undefined, wet : undefined , body : undefined})