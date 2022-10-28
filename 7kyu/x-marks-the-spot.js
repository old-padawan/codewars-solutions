const xMarksTheSpot = (input) => {
    const searchX = [...input].join("").match(/x/g);
    if (!/x/g.test([...input].join("")) || searchX.length > 1) {
      console.log(false);
      return [];
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i].includes("x")) {
          return [i, input[i].indexOf("x")];
        }
      }
    }
  };