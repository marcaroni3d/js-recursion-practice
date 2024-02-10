// return sum of all nubmers from 1 up to n passed in
function sumRange(n) {
    if (n == 1) return 1
    else return n + sumRange(n - 1)
}

// multiply base by itself exponent number of times
function power(base, exponent) {
    if (exponent == 0) return 1
    else return base * power(base, exponent - 1)
}

// return factorial of n
function factorial(n) {
    if (n == 1) return 1
    else return n * factorial(n - 1)
}

// accept array and a callback, return true if every value in array returns true when passed as parameter to callback
function all(array, callback) {
    let copy = [...array]
    
    if (copy.length === 0) return true

    if (callback(copy[0])) {
        copy.shift()
        return all(copy, callback)
    } else return false
}
    // test cases
    let allAreLessThanSeven = all([1,2,9], function(num) {
        return num < 7
    })

    let allAreLessThanTen = all([1,2,9], function(num) {
        return num < 10
    })

// take in array and return product of them all
function productOfArray(array) {
    if (array.length === 0) return 1;
    return array.shift() * productOfArray(array)
}

// search for value in a nested object, return true if it does
function contains(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value)
        }
        if (obj[key] === value) {
            return true;
        }
    }
    return false
}
    //test case
    let nestedObject = {
        data: {
            info: {
                stuff: {
                    thing: {
                        moreStuff: {
                            magicNumber: 44,
                            something: 'foo2'
                        }
                    }
                }
            }
        }
    }

