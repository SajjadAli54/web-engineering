function printFirstAndLast(array){
    let str = array.map(e => '' + e[0] + e[e.length-1]).join('\n');
    console.log(str);
}

printFirstAndLast(['awesome','example','of','forEach']);