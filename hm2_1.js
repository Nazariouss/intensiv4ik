function rev_str(str){
    return str.split('').reverse().join('')
}

// console.log(rev_str("hello"))

function isPolindrom(str){
    return str === rev_str(str)
}

// console.log(isPolindrom('abba'))

function rev_arr(arr){
    arr = arr.reverse()
    let new_arr = []
    for(let i = 0; i < arr.length ; i += 1){
        if (arr[i] % 2 == 0){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

// console.log(rev_arr([1,2,3,4]))
// це попередня дз, вийшов місандерстендінг, було дві дз...

