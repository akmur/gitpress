export function getPostJson (slug) {
  const url = 'https://api.github.com/repos/akmur/mdposts/contents/posts/'
  const fileExtension = '.md'
  return fetch(url + slug + fileExtension)
    .then((response) => response.json())
    .then((myJson) => {
      return atob(myJson.content)
    })
}
