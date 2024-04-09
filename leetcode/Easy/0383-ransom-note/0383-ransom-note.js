/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterMap = new Map();

    for (let x of magazine) {
        if (letterMap.has(x)) {
            letterMap.set(x, letterMap.get(x) + 1);
        } else {
            letterMap.set(x, 1);
        }
    }

    for (let y of ransomNote) {
        const count = letterMap.get(y);

        if (count > 0) {
            letterMap.set(y, count - 1);
        } else {
            return false;
        }
    }

    return true;
};