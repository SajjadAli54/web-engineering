function list(message){
    let data = []
    for(i of message){
        if(i.match(/\d+/g)){
            data.push(i);
        }
    }
    return data;
}

let data = "chas";

console.log(list(["name","abc", "Item", "pass123"]));
