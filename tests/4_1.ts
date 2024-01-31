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

(async() => {
    let comments =  Comments()
    let posts = Posts()

    let com = await comments
    let pos = await posts

    console.log(com)
    console.log('---')
    console.log(pos)
})()