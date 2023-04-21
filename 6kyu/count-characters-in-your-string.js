/* 
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

Нужно посчитать все символы, которые встречаются в строке. Результаты представить в виде объекта.
Например, если есть строка aba, то результат должен быть {'a': 2, 'b': 1}.
Если строка пустая, объект должен быть тоже пустым {} 
*/


function count(string) {
  // находим уникальные символы в строке
  // find unique characters in the string
  const uniqueCharsSet = new Set(string.split(''));
  console.log(uniqueCharsSet);

  // создаем пустой объект для результатов
  // create an empty object for results
  const countOfChars = {};

  // считаем, сколько раз каждый уникальный символ встречается в строке
  // count how many times each unique character appears in the string
  for (let char of uniqueCharsSet) {

    // создаем регулярное выражение для поиска каждого уникального символа в строке
    // create a regular expression to search for each unique character in the string
    const regex = new RegExp(`${char}`, 'g');

    // ищем количество каждого уникального символа в строке
    // find the count of each unique character in the string
    function searchChars() {
      return string.match(regex).length;
    }

    // добавляем результаты поиска в пустой объект с результатами
    // add search results to the empty object with results
    countOfChars[char] = searchChars(string, regex);
  }

  // возвращаем результат
  // return the result
  return countOfChars;
}
