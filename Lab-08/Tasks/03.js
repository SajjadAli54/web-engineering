/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
    let arr = [...array1]
    arr.push(...array2)
    return arr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    return {
        ...obj,
        [key] : val
    };
}

/** Return a new object with a key removed. */
function removeKey(obj, key) {
    let dupObj = {...obj};
    delete dupObj[key];
    return dupObj;
}

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    let dupObj = {...obj};
    dupObj[key] = val;
    return dupObj;
}