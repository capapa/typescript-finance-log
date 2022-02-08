let greet: Function;

greet = () => {
    console.log('hello!');
}

const add = (a:number, b:number, c?: number | string, d: number = 10) => {
    console.log(a + b);
    console.log(c);
    console.log(d);
}

add(5, 7);

const minus = (a:number, b:number) => {
    return a - b;
}

let result = minus(10, 2);