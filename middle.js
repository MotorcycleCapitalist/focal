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

const middle = function (array) {
  const newArray = []; //initalized to empty onject array

  if (!Array.isArray(array)) { console.log(newArray); return newArray; }
  //confirm item is array

  if (array.length <= 2) { console.log(newArray); return newArray; }
  //

  const middleIndex = Math.floor((array.length - 1) / 2);

  if (array.length % 2 == 0) {
      newArray.push(array[middleIndex]);
      newArray.push(array[middleIndex + 1]);
  } else {
      newArray.push(array[middleIndex]);
  }

  console.log(newArray);
  return newArray;

}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const food = ["eba", "amala", "ewedu", "ogbono"];
const selected = middle(food); // => ["amala", "ewedu"];
assertArraysEqual(food, ["eba", "amala", "ewedu", "ogbono"]) // => true
assertArraysEqual(food, selected) // => false