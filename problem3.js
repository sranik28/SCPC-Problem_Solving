// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.  Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function mostFrequentElement(arr) {
    let counts = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

const result = mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])

console.log(result);

