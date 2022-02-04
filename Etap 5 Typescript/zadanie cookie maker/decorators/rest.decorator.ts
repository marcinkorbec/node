import {HttpMethod} from "../types/http-method";
import {RestDecoratorInfo} from "../types/rest-decorator";
import {MyRouter} from "../types/my-router";

export function rest(
    httpMethod: HttpMethod,
    path: string,
    ) {
    return (target: MyRouter, propertyName: string): any => {
        const ar: RestDecoratorInfo[] = (Reflect.get(target, '_restApiCalls') ?? []) as RestDecoratorInfo[];
        ar.push({
            httpMethod,
            path,
            propertyName,
        })

        Reflect.set(target, '_restApiCalls', ar);
    }
}