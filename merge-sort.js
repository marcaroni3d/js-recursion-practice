function mergeSort(array) {
    if (array.length == 1) {
        return array
    }

    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
    const merged = []
    
    while (left.length > 0 && right.length > 0) {
        const sortedMin = left[0] < right[0] ? left : right
        const mergeElement = sortedMin.shift()
        merged.push(mergeElement)
    }

    return merged.concat(left, right)
}