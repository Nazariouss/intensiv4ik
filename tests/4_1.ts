async function Comments(){
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    let data =  await response.json()
    return data
}

async function Posts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    let data = await response.json()
    return data
}

// let comments = Comments()
// let posts = Posts()

// console.log(comments)
// console.log(posts)