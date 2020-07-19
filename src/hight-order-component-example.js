const f = (a) => {
    return (b) => {
        console.log(a+b)
    }
}
f(1)(2)
console.log(f(2)(3))

const add = (a, b) => a+b;
add(1,2)

const addd = (a) => (b) => a+b
addd(1)(2)

