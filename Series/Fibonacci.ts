const Fibo = (firstTerm: number, secondTerm: number, nextTerm: number, n: number): number => {
    let fiboString: string = '' + firstTerm + ',' + secondTerm;

    for (let i: number = 2; i < n; i++) {
        fiboString += nextTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        nextTerm = firstTerm + nextTerm;
    }
    return 0;
}
let n: number = 15;
let firstTerm: number = 0;
let secondTerm: number = 1;
let nextTerm: number = firstTerm + secondTerm;
const result: number = Fibo(firstTerm, secondTerm, nextTerm, n)
console.log(result)