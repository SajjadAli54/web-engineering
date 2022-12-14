function check(obj){
    for(i in obj){
        if(typeof obj[i] == typeof "")
            console.log(obj[i]);
    }
}

let obj = {
    id: 1,
    name: 'Sajjad',
    age: 21,
    caste: 'Khaskheli'
};

check(obj);