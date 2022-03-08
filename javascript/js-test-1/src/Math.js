const getMostRepeatedLetter = str => {

    if (typeof(str) !== 'string') {
        return undefined;
    }

    const chars = str.toLowerCase().split('');
    const charsMap = new Map();

    for (let char of chars) {
        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) + 1);
        } else {
            charsMap.set(char, 1);
        }
    }

    let mostRepeatedChar = undefined;
    let mostRepeatedCharTimes = 0;

   // console.log(charsMap.entries());

    for(let [key, value] of charsMap.entries()) {

        if (value > mostRepeatedCharTimes) {
            mostRepeatedChar = key;
            mostRepeatedCharTimes = value;
        }

    }

    return mostRepeatedChar;

}


module.exports = getMostRepeatedLetter;


//console.log(getMostRepeatedLetter('AABBBBCCCCCCDDDDDDDDD'));