https://www.codewars.com/kata/56576f82ab83ee8268000059/solutions/javascript
// classic solution :)
function spacey(array) {
    const result = [];
    let concatString = '';
    for (let i = 1; i <= array.length; i++) {
        concatString += array[i - 1];
        result.push(concatString);
    }
   return result;
}


spacey(['kevin', 'has', 'no', 'space']); // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']