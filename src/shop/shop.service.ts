import { Injectable } from "@nestjs/common";
import { GetListOfProductsResponse } from "../interfaces/shop-item";

@Injectable()
export class ShopService {

    getProducts(): GetListOfProductsResponse {
        return [
            {
                name: "Czekolada",
                description: "wspaniała czekolada gorzka",
                priceNet: 2.30
            },
            {
                name: "M&Ms",
                description: "wspaniałe M&Ms",
                priceNet: 5.30
            },
            {
                name: "7-Days",
                description: "wspaniały 7-Days",
                priceNet: 4.60
            }
        ];
    }

    hasProduct(name: string): boolean {
        return this.getProducts().some(item => item.name === name);
    }

    getPriceOfProduct(name: string): number {
        return this.getProducts().find(item=> item.name === name).priceNet;
    }
}
