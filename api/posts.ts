type Post = {
    id: number
    title: string
    body: string
    userId: number
  }
  


export async function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data as Post[])
    }
    

    export async function getPost(postId: number| string) {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => data as Post)
    }