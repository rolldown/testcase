import { a as renamed_a1 } from "./a1.js";

export const a = 10000;
const b = { foo: a, a, c };
console.log(renamed_a1, a, b.foo);

{
  const a = 1;
  {
    const a = 1;
    {
      const a = 1;
      var c = 1000;
    }
  }
}
