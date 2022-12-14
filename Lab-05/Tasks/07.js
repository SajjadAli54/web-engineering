function findIndex(array, f){
    for(let index in array)
        if(f(array[index]))
            return index;
}

var a = findIndex([8,11,4,27], function(val){return val >= 10});
var b = findIndex([8,11,4,27], function(val){return val === 7});

console.log(a, b);