import {HttpMethod} from "./http-method";

interface RestDecoratorInfo {
    httpMethod: HttpMethod;
    path: string;
    propertyName: string;
}