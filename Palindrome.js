function isPalindrome(string) {
  //Removes spaces, makes letters lowercase, turns string into array
  const toArray = string.replace(/ /g, '').toLowerCase().split('');
  //Creates clone of toArray and reverses it
  const reverseArray = toArray.slice().reverse();
  //Creates joined string version of the original
  const original = toArray.join('');
  //Creates joined string version of the reversed
  const reversed = reverseArray.join('');
  //If these two strings are equal, output will be true
  if (original === reversed) {
    return true;
  } else {
    return false;
  };
}
isPalindrome('WORD HERE');

/* Tests
console.log(isPalindrome('kAyak')); //true
console.log(isPalindrome('aPpLe')); //false
console.log(isPalindrome('R a cEcAr')); //true
console.log(isPalindrome('big bug')); //false
console.log(isPalindrome('Abba')); //true
console.log(isPalindrome('ABCCBA')); //true
console.log(isPalindrome('moM'));//true
*/

/* Old code
//Removes all whitespace
string.replace(/ /g, '');

//Makes all letters lowercase
string.toLowerCase();

//Testing code above if else statement
console.log(original);
console.log(reversed);
console.log(original === reversed);
*/
