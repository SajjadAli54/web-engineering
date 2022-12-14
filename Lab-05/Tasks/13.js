function filterLetters(array, letter){
    return array.filter(item => item.toLowerCase() == letter.toLowerCase()).length;
}

console.log(filterLetters(['A', 'A', 'B'], 'A'));
