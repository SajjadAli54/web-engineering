const raceResults =  array => {
    let [first, second, third, ...rest] = array;
    return {
        first,
        second,
        third,
        rest
    };
}

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));