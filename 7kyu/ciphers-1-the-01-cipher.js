function encode(plaintext) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const regex = /[a-z]/;
    const inputString = plaintext.toLowerCase();
    const indexOfLetter = (letter) => alphabet.indexOf(letter) % 2 === 0 ? 0 : 1;
    return [...inputString].map((letter) => regex.test(letter) ? indexOfLetter(letter) : letter).join('');
}