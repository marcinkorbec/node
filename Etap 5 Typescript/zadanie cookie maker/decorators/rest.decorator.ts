import {HttpMethod} from "../types/http-method";
import {RestDecoratorInfo} from "../types/rest-decorator";

export function rest(
    httpMethod: HttpMethod,
    url: string,
    ) {
    return (target: any, propertyName: string): any => {
        Reflect.set(target, '_restApiCall', {
            httpMethod,
            path,
            propertyName
        } as RestDecoratorInfo);
    }
}