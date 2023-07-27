// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumeralMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumeralMap[roman[i]];
        const next = romanNumeralMap[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));

