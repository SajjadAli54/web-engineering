function vowelCount(str = 'Alphabet'){
    vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    obj = new Object();
    const arr = str.split('')
    for(let i = 0; i<5;i++){
        if(str.includes(vowels[i]) | str.includes(vowels[i + 5])){
            obj[vowels[i]] = arr.filter(item => item == vowels[i]).length + 
            arr.filter(item => item == vowels[i + 5]).length; 
        }
    }
    return obj;
}

console.log(vowelCount('Sajjad Ali'))