function fibsLoop(num) {
    let x = 0
    let y = 1
    let z
    let answer = [x,y]

    for (let i = 2; i < num; i++) {
        z = x + y
        x = y
        y = z

        answer.push(z)
    }
    return answer
}

function fibsRecursive(num) {
    if (num == 1) {
        return[0,1]
    }
    let answer = fibsRecursive(num - 1)
    answer.push(answer[answer.length-1] + answer[answer.length-2])
    return answer
}