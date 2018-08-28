export function getPostsListJson (slug) {
  const url = 'https://api.github.com/repos/akmur/mdposts/contents/posts.json'
  return fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      return JSON.parse(atob(myJson.content))
    })
}
