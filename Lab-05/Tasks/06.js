function find(array, f){
    for(let e of array)
        if(f(e))
            return e;
}

var x = find([8,11,4,27], function(val){return val >= 10});
x = find([8,11,4,27], function(val){return val == 5});
console.log(x);