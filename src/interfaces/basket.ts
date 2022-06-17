export type AddProductToBasketResponse = {
  isSucces: true;
  index: number;
} | {
  isSucces: false;
}

export interface RemoveProductFromBasketResponse {
  isSucces: boolean;
}