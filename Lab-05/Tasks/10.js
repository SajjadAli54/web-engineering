function addKeyAndValue(array, key, value){
    for(let obj of array){
        obj[key] = value;
    }

    console.log(array);
}

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);