function extractKey(array, key){
    return array.map((item => item[key]));
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name:
    "Matt", isInstructor:true}], "name"))