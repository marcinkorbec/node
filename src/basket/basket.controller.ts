import { Body, Controller, Delete, Inject, Param, Post } from "@nestjs/common";
import { BasketService } from "./basket.service";
import { AddProductDto } from "./dto/add-product.dto";
import { AddProductToBasketResponse, RemoveProductFromBasketResponse } from "../interfaces/basket";

@Controller('basket')
export class BasketController {
  constructor(
    @Inject(BasketService) private basketService: BasketService,
  ) {}

  @Post('/')
  addProductToBasket(
    @Body() item: AddProductDto,
  ): AddProductToBasketResponse {
    return this.basketService.addProductToBasket(item);
  }

  @Delete('/:index')
  removeProductFromBasket(
    @Param('index') index: string,
  ): RemoveProductFromBasketResponse {
    return this.basketService.removeProductFromBasket(Number(index));
  }
}
