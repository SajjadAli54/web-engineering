function numberFact(num, f){
    return f(num);
}

console.log(numberFact(53, n => n % 2 == 0));
console.log(numberFact(53, n => n % 2 != 0));