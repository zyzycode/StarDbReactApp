const f = (a) => {
    return (b) => {
        console.log(a+b)
    }
}

f(1)(2)


console.log(f(2)(3))