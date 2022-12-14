function specialMultiply(a,b){
    if(b)
        return a * b;
    return function(x){
        return a * x;
    }
}

const print = console.log;
print(specialMultiply(3,4), specialMultiply(3)(2), specialMultiply(3));