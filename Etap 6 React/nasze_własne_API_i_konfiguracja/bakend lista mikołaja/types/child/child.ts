import {ChildEntity} from "./child.entity";
import {GiftEntity} from "../gift";

export type CreateChildReq = Omit<ChildEntity, 'id'>;

export interface ListChildrenRes {
  childrenList: ChildEntity[];
  giftsList: GiftEntity[];
}

export interface SetGiftForChildReq {
  giftId: string;
}