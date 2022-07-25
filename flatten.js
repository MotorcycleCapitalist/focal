const eqArrays = function (array1, array2) {
    let state = false; //assume items not arrays until confirmed

    if (!Array.isArray(array1) || !Array.isArray(array2)) return state
//first confirm item is array
    if (array1.length != array2.length) return state;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            state = true;
        } else {
            return false
        }
    }
    return state;
}

const assertArraysEqual = function (array1, array2) {
    const state = eqArrays(array1, array2);
    console.log(state)
}

const flatten = function (array) {
    const flattened = [].concat.apply([], array); //elements moved into new array
    //encountered nested arrays pushed into empty array
    console.log(flattened)
    return flattened;
}


// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6];
flatten([[1, 2], [3, 4], [5, 6], [7, 8, 9], [10, 11, 12, 13, 14, 15]]); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


