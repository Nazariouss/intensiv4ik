function func(string){
    let pref = ''
    let minLength = Math.min(string[0].length, string[0].length)
    for (let i = 0; i < minLength; i += 1){
        if (string[0][i] == string[1][i]){
            pref += string[0][i]
        }else {
            break
        }
    }

    if (pref != ''){
        for (let s = 0; s < string.length - 1; s += 1){
            if (string[s].startsWith(pref) != string[s+1].startsWith(pref)){
                return ''
            }
        }
        return pref
    }
    return ''
}

console.log(func(["funny", 'fuck', 'full']))