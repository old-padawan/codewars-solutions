/* 
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

*/


function count(string) {
  // find unique characters in the string
  const uniqueCharsSet = new Set(string.split(''));
  console.log(uniqueCharsSet);

  // create an empty object for results
  const countOfChars = {};

  // count how many times each unique character appears in the string
  for (let char of uniqueCharsSet) {

    // create a regular expression to search for each unique character in the string
    const regex = new RegExp(`${char}`, 'g');

    // find the count of each unique character in the string
    function searchChars() {
      return string.match(regex).length;
    }

    // add search results to the empty object with results
    countOfChars[char] = searchChars(string, regex);
  }

  // return the result
  return countOfChars;
}
