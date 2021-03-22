function quickSort(arr) {
    if (arr.length <= 1) return [...arr]

    const left = [], right = [];

    const midValue = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), midValue, ...quickSort(right)]
}

module.exports = quickSort;