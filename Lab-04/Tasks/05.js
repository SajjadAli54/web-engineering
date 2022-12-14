function safeDriving(speed){
    if(speed <= 70)
        console.log('Good Safe Driving');
    else{
        console.log()
        let penalty = (speed - 70)/5;
        console.log(`Speed Limit Crossed by Penalty ${penalty}`);
        if(penalty > 10)
            console.log('License Suspended');
    }
}

safeDriving(123);