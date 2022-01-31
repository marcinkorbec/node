import { Request, Response } from "express"

export interface UserRequest extends Request {
    user: string;
    cookies: object;
};

export interface UserResponse extends Request {
    user: string;
}