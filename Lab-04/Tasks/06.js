const details = (marks) => {
    let sum = marks.reduce((a,b) => a + b)
    let average = sum / marks.length;

    console.log(`Marks = ${marks}, Average = ${average}`);
    if(average >= 80)
        console.log('Grade A1');
    else if(average >= 70){
        console.log('Grade A');
    }
    else if(average >= 60){
        console.log('Grade B');
    }
    else if(average >= 50){
        console.log('Grade C');
    }
    else{
        console.log('Grade D');
    }
}

details([0, 19.75, 99, 94]);
let a = [1,2,3]
