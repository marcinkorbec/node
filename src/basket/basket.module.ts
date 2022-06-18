import { forwardRef, Module } from "@nestjs/common";
import { BasketController } from "./basket.controller";
import { BasketService } from "./basket.service";
import { ShopModule } from "../shop/shop.module";

@Module({
    imports: [forwardRef(()=> ShopModule)],
    controllers: [BasketController],
    providers: [BasketService],
    exports: [BasketModule]
})
export class BasketModule {
}