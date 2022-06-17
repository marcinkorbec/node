import { Injectable } from "@nestjs/common";
import { AddProductDto } from "./dto/add-product.dto";
import { AddProductToBasketResponse, RemoveProductFromBasketResponse } from "../interfaces/basket";

@Injectable()
export class BasketService {
  private items: AddProductDto[] = []

  addProductToBasket(item: AddProductDto): AddProductToBasketResponse {
    if (
      typeof item.name !== "string" ||
      typeof item.quantity !== "number" ||
      item.name === '' ||
      item.quantity < 1
    ) {
      return {
        isSucces: false,
      }
    }
    this.items.push(item);
    console.log(this.items);
    return {
      isSucces: true,
      index: this.items.length - 1,
    }
  }

  removeProductFromBasket(index: number): RemoveProductFromBasketResponse {
    const { length, splice } = this.items;
    if (
      index < 0 ||
      index >= length
    ) {
      return {
        isSucces: false,
      };
    };

    splice(index, 1);

    console.log(this.items);

    return {
      isSucces: true,
    }
  }
}
