function removeVowels(str = 'input'){
    vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(e => !vowels.includes(e)).join('');
}

console.log(removeVowels());