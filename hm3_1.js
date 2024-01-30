// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    n_len = nums.length
    
    for (let i = 0; i < n_len; i += 1){
        for (let j = i + 1; j < n_len; j += 1 ){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
};

// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

var mostWordsFound = function(sentences) {
    let max_length = 0
    for(let s of sentences){
        s = s.split(' ')
        if (s.length > max_length){
            max_length = s.length
        }
    }
    return max_length
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))