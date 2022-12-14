function delay(ms){
    let myPromise = new Promise(myResolve => {
        setTimeout(()  =>  myResolve(), ms);
      });
    return myPromise;
}

delay(3000).then(() => console.log('runs after three seconds'))