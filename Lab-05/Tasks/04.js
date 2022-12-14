function isPrime(number){
    if(number < 1)
        return false;
    let limit = Math.sqrt(number);
    for(let i = 3;i<limit;i++)
        if(number % i == 0)
            return false;
    return true;
}

console.log(isPrime(2));