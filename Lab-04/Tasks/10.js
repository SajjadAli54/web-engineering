function display(obj, delimit){
    let keys = Object.keys(obj);
    if(keys.length != 0){
        for(k of keys){
            console.log(delimit + `${k} : ${obj[k]}`);
            if(typeof obj[k] == typeof {}){
                display(obj[k], delimit + "  ");
            }
        }
    }
}

let obj = {
    id : 1,
    name: 'Sajjad Ali',
    address: {
        street: 'Latifabad',
        city: 'Hyderabad',
        province: 'Sindh'
    },
    caste: 'Khaskheli',
    empty: {}
}
display(obj, "");