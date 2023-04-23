function add(...arguments) {
    return Math.round(arguments.map((num, index) =>
        (num / (index + 1))).reduce((a, b) => a + b, 0));

}