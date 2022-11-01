// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript
function isItANum(str) {
  if (str === '') {
    return 'Not a phone number';
  }

  const onlyDigits = str.match(/[0-9]/g).join('');
  return /^0+/.test(onlyDigits) && onlyDigits.length === 11
    ? onlyDigits
    : 'Not a phone number';
}
