import {HttpMethod} from "../types/http-method";

export function rest(
    httpMethod: HttpMethod,
    url: string,
    ) {
    return (target: any, propertyName: string): any => {
        console.log('Czy to działa?')
    }
}