function initials(n) {
    let resultString = '';
    const array = n.split(' ');

    for (let i = 0; i < array.length; i++) {
        if (i + 1 !== array.length) {
            resultString += `${array[i][0].toUpperCase()}.`;
        } else {
            resultString += `${array[i][0].toUpperCase()}${array[i].slice(1)}`;
        }
    }
    return resultString;
}