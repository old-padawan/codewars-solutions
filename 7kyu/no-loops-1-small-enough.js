const smallEnough = (a, limit) => {
  return a.every((number) => number <= limit);
};

// other interesting solition
// const smallEnough = (a, limit) => Math.max(...a) <= limit
