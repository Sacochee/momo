"use client"
import Auth from './auth'
import { useAtom } from 'jotai';
import { _surfers } from '@/app/[locale]/(compl)/states';
import { MutableRefObject } from 'react';

export default function AuthProvided() {
  const [data] = useAtom(_surfers)

  const mineur = () => {
    let bool = false;
    data.forEach((item: any) => {
      if (item.age < 18) {
        bool = true;
      }
    });
    return bool;
  };

  const majeur = () => {
    let bool = false;
    data.forEach((item: any) => {
      if (item.age >= 18) {
        bool = true;
      }
    });
    return bool;
  };
  return (
    <Auth majeur={majeur} mineur={mineur}/>
  )
}
