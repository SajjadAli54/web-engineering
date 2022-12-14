(function(message){
    let reverse = "";
    for(i of message)
        reverse = i + reverse;
    console.log(reverse);
})('Hello World');
