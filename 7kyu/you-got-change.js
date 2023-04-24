function giveChange(amount) {
  const changeArray = [];
  let restOfMoney;

  changeArray.unshift(Math.floor(amount / 100));
  restOfMoney = amount % 100;

  changeArray.unshift(Math.floor(restOfMoney / 50));
  restOfMoney = restOfMoney % 50;

  changeArray.unshift(Math.floor(restOfMoney / 20));
  restOfMoney = restOfMoney % 20;

  changeArray.unshift(Math.floor(restOfMoney / 10));
  restOfMoney = restOfMoney % 10;

  changeArray.unshift(Math.floor(restOfMoney / 5));
  restOfMoney = restOfMoney % 5;

  changeArray.unshift(Math.floor(restOfMoney / 1));
  restOfMoney = restOfMoney % 1;

  return changeArray;
}


giveChange(365); //  [0,1,1,0,1,3]
// giveChange(217); // [2,1,1,0,0,2]