import {HttpMethod} from "../types/http-method";
import {RestDecoratorInfo} from "../types/rest-decorator";
import {MyRouter} from "../types/my-router";

export function rest(
    httpMethod: HttpMethod,
    path: string,
    ) {
    return (target: MyRouter, propertyName: string): any => {
        Reflect.set(target, '_restApiCall', {
            httpMethod,
            path,
            propertyName,
        } as RestDecoratorInfo);
    }
}