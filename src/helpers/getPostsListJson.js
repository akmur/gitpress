export function getPostsListJson () {
  const url = 'https://api.github.com/repos/akmur/mdposts/contents/'
  return fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      return myJson
    })
}
