function evenChars(string) {
  const lengthOfString = (string) => string.length > 1 && string.length < 100;
  return lengthOfString(string) ? [...string].filter((_, index) => (index % 2 !== 0)) : 'invalid string';
}
