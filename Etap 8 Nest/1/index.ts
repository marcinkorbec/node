import {HelloWorldModule} from './modules/hello-world';
import {CalcModule} from "./modules/calc";

class Test {
  someMethod(
    // @inject(HelloWorldModule, CalcModule)
    helloWorld?: HelloWorldModule,
    calc?: CalcModule,
  ) {
    helloWorld.hello();
    console.log(calc.sum(7, 3))
  }
}

const test = new Test();
test.someMethod();