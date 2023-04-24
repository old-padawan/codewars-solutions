const mispelled = function(word1, word2) {
    if (Math.abs(word1.length - word2.length) > 1) {
      return false;
    }
  
    let count = 0;
    let index1 = 0;
    let index2 = 0;
  
    while (index1 < word1.length && index2 < word2.length) {
      if (word1[index1] !== word2[index2]) {
        count++;
  
        if (word1.length > word2.length) {
          index1++;
        } else if (word1.length < word2.length) {
          index2++;
        } else {
          index1++;
          index2++;
        }
      } else {
        index1++;
        index2++;
      }
  
      if (count > 1) {
        return false;
      }
    }
  
    return true;
  };
  