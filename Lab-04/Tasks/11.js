function findMin(list){
    let min = list[0]
    for (v of list)
        if(v < min)
            min = v;
    return min;
}

function findOccurrencesAndReplace(list, value){
    let count = 0;
    for(k in list)
        if(list[k] == min){
            list[k] = -1;
            count++;
        }
    return count
}

let list = [1,-123,3,-123,5,6];
let min = findMin(list);
console.log(findOccurrencesAndReplace(list, min));
console.log(list);
