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

(async()=>{
    let com = Comments()
    let pos = Posts()
    let comments = await com
    let posts = await pos

    console.log(comments)
    console.log(posts)
})()
