function filterKey(array, key){
    return array.filter(item => item[key]);
}

const data = filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true,
isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")

console.log(data);