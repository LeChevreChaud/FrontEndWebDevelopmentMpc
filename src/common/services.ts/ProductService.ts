import {Category, Product, Subcategory } from "../models/Product";
import { CategorySearch } from "../models/SearchProduct";

/* *rubic81*
Data was accessed using Azuer web api */

class ProductService {

  public async getAllCategories(): Promise<Array<CategorySearch>> {

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const getHeader: RequestInit = {
        method: 'GET',
        headers: header
    };

    const response = await fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`, getHeader)
    return await response.json() as Array<CategorySearch>;
  }

  public async getAllProducts(): Promise<Array<Product>> {

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const getHeader: RequestInit = {
        method: 'GET',
        headers: header
    };

    const response = await fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`, getHeader)
    const categories  = await response.json() as Array<Category>;
    let items : Array<Product> = [];
    categories.map(categ => categ.subcategories.map(x => {items = [...items, ...x.items]}));
    return items;
  }

  public async getCarouselProducts(): Promise<Array<Subcategory>> {

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const getHeader: RequestInit = {
        method: 'GET',
        headers: header
    };

    const response = await fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`, getHeader)
    const categories  = await response.json() as Array<Category>;
    let subcategories : Array<Subcategory> = [];
    categories.map(x => { subcategories = [...subcategories, ...x.subcategories]});
    return subcategories.slice(0,5);
  }

  public async getProductByName(name:string): Promise<Product> {

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const getHeader: RequestInit = {
        method: 'GET',
        headers: header
    };

    const response = await fetch(`https://webmppcapstone.blob.core.windows.net/data/itemsdata.json`, getHeader)
    const categories  = await response.json() as Array<Category>;
    let items : Array<Product> = [];
    categories.map(categ => categ.subcategories.map(x => {items = [...items, ...x.items]}));
    return items.filter(x => x.name === name)[0];
  }


}

export default new ProductService();
