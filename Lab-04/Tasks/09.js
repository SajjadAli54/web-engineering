function getDays(d1, d2){
    if(typeof d1 != typeof new Date() || typeof d2 != typeof new Date())
        return false;
    return Math.abs(d2.getDate() - d1.getDate());
    
}

let date = new Date();
let date2 = new Date(2022, 04, 24);

console.log(getDays(date, date2));