function printString(str) {
    console.log(str[0])

    if (str.length > 1) {
        let newStr = str.substring(1, str.length)
        printString(newStr)
    } else {
        return true
    }
}

function reverseString(str) {
    if (str.length < 2) {
        return str
    } else {
        return reverseString(str.substring(1)) + str[0]
    }
}

function isPalindrome(str) {
    let l = str.length
    if (l < 2) {
        return true
    } else if (str[0] === str[l - 1]) {
        return isPalindrome(str.substring(1, l - 1))
    } else {
        return false
    }
}

function addUpTo(arr, i) {
    return i ? arr[i] + addUpTo(arr, --i) : arr[i]
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, n) {
    if (arr.length === 1 && arr[0] !== n) {
        return false
    } else if (arr[0] === n) {
        return true
    } else {
        return includesNumber(arr.slice(1), n)
    }

    //return arr.includes(n) ? true : false
}