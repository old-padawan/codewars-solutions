function isItANum(str) {
    if (str === '') {
     return 'Not a phone number';
 }
 
 const onlyDigits = str.match(/[0-9]/g).join('');
 return (/^0+/.test(onlyDigits) && onlyDigits.length === 11 ? onlyDigits : 'Not a phone number');
}