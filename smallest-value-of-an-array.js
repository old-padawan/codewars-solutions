// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn === "index"
    ? arr.indexOf(Math.min(...arr))
    : Math.min(...arr);
}
