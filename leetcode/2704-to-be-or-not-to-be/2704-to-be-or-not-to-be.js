/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const obj = {
        toBe(x) {
            if (val === x) return true;

            throw 'Not Equal';
        },

        notToBe(x) {
            if (val !== x) return true;

            throw 'Equal';
        }
    }

    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */