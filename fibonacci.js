function fibsLoop(num) {
    let answer = [0,1]

    for (let i = 2; i <= num; i++) {
        answer.push((answer[i-1] + answer[i-2]))
    }
    return answer
}

function fibsRecursive(num) {
    if(num == 1) {
        return [0, 1]
    }

    let answer = fibsRecursive(num - 1)
    answer.push(answer[answer.length-1] + answer[answer.length-2])
    return answer
}