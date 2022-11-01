// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish) {
  const distanceForJumping = finish - start;
  const oneJump = 3;
  return Math.floor(
    distanceForJumping / oneJump + (distanceForJumping % oneJump)
  );
}
