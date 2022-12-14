let obj = {
    name: 'Sajjad Ali',
    age: 22,
    gender: 'Male',
    address: {
        street: 'Sindhi Society',
        calony: 'Bihaar calony',
        state: 'Sindh',
        country: 'Pakistan'
    }
}

const {name, address:{state}} = obj
console.log(name, state);

let {address} = obj
console.log(address);