// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
function search(budget, prices) {
    return [...prices]
      .sort((a, b) => a - b)
      .filter((x) => x <= budget)
      .join();
  }