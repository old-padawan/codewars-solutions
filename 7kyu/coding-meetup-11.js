// https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript

function getAverageAge(list) {
    const allAges = list.map((obj) => obj.age);
    const sumOfAges = allAges.reduce((a, b) => a + b, 0);
    const averageAge = Math.round(sumOfAges / list.length);
    return averageAge;
}
