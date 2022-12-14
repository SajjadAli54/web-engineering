function countdown(number){
    let id = setInterval(() => {
        if(!number){
            console.log('Done');
            clearInterval(id);
            return;
        }
        console.log(number--);
    }, 1000);
}

countdown(5);

