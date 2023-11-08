import {CATEGORIES} from "@/lib/data.ts";
export interface searchResultType {
    id: number,
    title: string,
}

export interface Products {
    id:number,
    image:string,
    title:string,
    amper: string,
    power:string,
    category: typeof CATEGORIES,
    specifics: {
        title: string,
        amper: string,
        power: string
    }
}