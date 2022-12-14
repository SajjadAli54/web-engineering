function addKeyAndValue(array, key, value){
    return array.map(obj => {
        obj[key] = value
        return obj;
    });
}

const data = addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);

console.log(data);