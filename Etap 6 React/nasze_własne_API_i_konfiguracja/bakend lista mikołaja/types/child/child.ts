import {ChildEntity} from "./child.entity";

export type CreateChildReq = Omit<ChildEntity, 'id'>;