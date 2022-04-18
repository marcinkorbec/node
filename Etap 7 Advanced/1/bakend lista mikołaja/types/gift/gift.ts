import {GiftEntity} from "./gift.entity";

export type CreateGiftReq = Omit<GiftEntity, 'id'>;
export interface GetSingleGiftRes {
  giftItem: GiftEntity;
  givenCount: number
}