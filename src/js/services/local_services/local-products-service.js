export class LocalProductsService {

    static async getAllProducts(){
        const result = await fetch('./src/data/data_sources/local_data_sources/local-products.json');
        const products = await result.json();
        return products
    }

    static post(){

    }

}