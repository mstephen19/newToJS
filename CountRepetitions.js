//Goal: Say name of item in array, then amount of times it was repeated
const results = {};

function repetitionsInArray (array) {
  array.forEach(function (i) { results[i] = (results[i] || 0) + 1; });
  return results;
};

const repeatingArray = ['cat', 'cat', 'dog', 'cat', 'dog', 'cat']
//We want -> Cat: 3, Dog: 2

/* Test
console.log(repetitionsInArray(repeatingArray));
*/

repetitionsInArray(repeatingArray);
