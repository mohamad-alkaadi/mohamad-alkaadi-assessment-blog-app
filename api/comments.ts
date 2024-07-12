type Comment = {
    id: number
    name: string
    email: string
    body: string
    postId: number
  }
  


export async function getPostComments(postId: number| string) {
    return fetch(`https://jsonplaceholder.typicode.com//posts/${postId}/comments`)
        .then(res => res.json())
        .then(data => data as Comment[])
    }