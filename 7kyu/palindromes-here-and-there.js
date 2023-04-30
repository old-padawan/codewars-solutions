function convertPalindromes(numbers) {
    return numbers.map((num) => 
    num.toString() === [...num.toString()].reverse().join('') ? 1 : 0);    
}