function sumNoDuplicates(numList) {
    let sum = 0;
    const setNumList = [...new Set(numList)];
    console.log(setNumList);
    for (const num of setNumList) {
        if (numList.indexOf(num) === numList.lastIndexOf(num)) {
            sum += num;
        }
    }
    return sum;
}