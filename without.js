const eqArrays = function (array1, array2) {
  let state = false;

  if (!Array.isArray(array1) || !Array.isArray(array2)) return state

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


const without = function (source, itemsToRemove) {
  const newArray = []; //new array to be returned

  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) return newArray
  //confirming that source is actually an array
  //if not an array return empty object

  for (let i = 0; i < source.length; i++) { //loop thru source array
      if (!itemsToRemove.includes(source[i])) {
          newArray.push(source[i]);
      }
  }
  console.log(newArray)
  return newArray;
}

//TEST CASE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

without([1, 2, 3, [4, 5], 6], [1, 6]) // => [2, 3, [4, 5] ]
without([1, 2, 3, [4, 5], 6], [[4, 5], 6]) // => [1, 2, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true