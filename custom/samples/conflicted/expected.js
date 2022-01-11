const a$ = 0;
const c$ = 100;
const b$ = {
    foo: a$,
    a$
};
console.log(a$, b$.foo, c$);
const a = 10000;
const b = {
    foo: a,
    a,
    c
};
console.log(a$, a, b.foo);
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
