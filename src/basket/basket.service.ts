import { Injectable } from "@nestjs/common";
import { AddProductDto } from "./dto/add-product.dto";
import { AddProductToBasketResponse, RemoveProductFromBasketResponse } from "../interfaces/basket";

@Injectable()
export class BasketService {
  private items: AddProductDto[] = []

  addProductToBasket(item: AddProductDto): AddProductToBasketResponse {
    const { items } = this;
    const { name, quantity } = item;
    if (
      typeof name !== "string" ||
      typeof quantity !== "number" ||
      name === '' ||
      quantity < 1
    ) {
      return {
        isSucces: false,
      }
    }
    this.items.push(item);
    console.log(items);
    return {
      isSucces: true,
      index: items.length - 1,
    }
  }

  removeProductFromBasket(index: number): RemoveProductFromBasketResponse {
    const { items } = this;
    if (
      index < 0 ||
      index >= items.length
    ) {
      return {
        isSucces: false,
      };
    };

    items.splice(index, 1);

    console.log(this.items);

    return {
      isSucces: true,
    }
  }
}
