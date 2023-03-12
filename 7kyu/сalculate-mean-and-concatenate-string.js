// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

function mean(lst) {
    const onlyLetters = [...lst].filter((letter) =>
        letter.match(/\D/gi)).join('');
    const onlyNumbers = [...lst].filter((numbers) =>
        numbers.match(/\d/gi)).reduce((a, b) =>
            Number(a) + Number(b)) / 10;
    return [onlyNumbers, onlyLetters];
}
