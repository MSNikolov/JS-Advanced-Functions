function solution (a){
    return function sum (b){
        return a+b;
    }
}

let add5 = solution(5);

console.log(add5(3))