function sum(){
    console.log(arguments)

    let sum = 0;
    for(let i in arguments)
        sum += arguments[i]
    console.log(sum);
    return sum;
}

sum(1,2,3,4,5,6)
/*
[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
*/

function add(...nums){
    return nums.reduce((a, b) => a + b);
}

console.log(add(1,2,3,4,5,6))
