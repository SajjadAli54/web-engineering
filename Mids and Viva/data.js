const PI = Math.PI

function sum(...a){
    return a.reduce((x, y) => x + y);
};

function greeting(name){
    return `Hi ${name}`;
}
export {PI, sum}

export default greeting;