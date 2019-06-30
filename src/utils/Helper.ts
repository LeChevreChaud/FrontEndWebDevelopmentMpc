import { Product } from "../common/models/Product";

export const getRandomNumber = (start : number, end: number) : number => {
    if(start>0 && end>start){
        return Math.floor(Math.random() * end) + start
    }
    return 0;
}

export const groupBy = (xs : any, key : string) =>
    xs.reduce(function (rv:any, x:any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});

export const comparePrice = (a : Product, b:Product, ascending:boolean) =>{
    const asc : number = ascending ? 1 : -1;
    if (a.price < b.price)
        return (-1)*asc;
    if (a.price > b.price)
        return 1*asc;
    return 0;
}

export const compareAlpha = (a : string, b:string) =>{
    if (a < b)
        return (-1);
    if (a > b)
        return 1;
    return 0;
}

export const compareRating = (a : number, b:number) =>{
    if (a < b)
        return (-1);
    if (a > b)
        return 1;
    return 0;
}