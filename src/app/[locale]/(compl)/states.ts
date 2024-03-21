"use client";
import { atom, useAtom } from "jotai";

// types //

export type formule =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "10carte"
  | "10HS"
  | "enfant"
  | "acompte"
  | "part1"
  | "part2";
type surfers = { 
  id: string;
  nom: string;
  prenom: string;
  age: number;
  poids: number;
  taille: number;
  formule: formule;
  info?: string;
};
export type paid = "cb" | "others" |"null";
export type accient = {
  nom: string | undefined;
  prenom: string | undefined;
  tel: string | undefined;
};

// cours //

const _context = atom<formule | null>(null);
//inscription //
const _date = atom<string | null>(null);
const _time = atom<string | null>(null);
const _surfers = atom<surfers[]>([]);
// pay //
const _payMethode = atom<paid>("null");
const _txtPay = atom<string | null>(null);
const _errorPay = atom<boolean>(false);
//acident//
const _accidentFiche = atom<accient>({
  nom: undefined,
  prenom: undefined,
  tel: undefined,
});
const _accidentError = atom<{
  errorNom: boolean;
  errorPremon: boolean;
  errorTel: boolean;
}>({
  errorNom: false,
  errorPremon: false,
  errorTel: false,
});

//exports //
export {
  _context,
  _date,
  _time,
  _surfers,
  _payMethode,
  _txtPay,
  _errorPay,
  _accidentFiche,
  _accidentError,
};

// class compiller //

export default class Comp {
  static coursToJson() {}
}

// exports //
