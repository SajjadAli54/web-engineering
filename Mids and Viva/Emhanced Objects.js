// Enhanced Object Literal

let myName = 'Sajjad Ali', gender = 'Male', age = 22, calony = 'Sindhi Society', state = 'Sindh', country = 'Pakistan';

let student = {
    myName, gender, age, calony, state, country
}


/*
console.log(student);
// Output:
{
  myName: 'Sajjad Ali',
  gender: 'Male',
  age: 22,
  calony: 'Sindhi Society',
  state: 'Sindh',
  country: 'Pakistan'
}
*/

// Computed Property
let arr = [1,2,3]
let salaries = {
  [myName] : 12000,
  [arr] : '1,2,3'
}

console.log(salaries)

/*
  console.log(salaries);
  //Output
  //{ 'Sajjad Ali': 12000, '1,2,3': '1,2,3' }
*/