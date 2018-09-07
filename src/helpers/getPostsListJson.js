import { onlyTitle, onlyDate, onlySlug } from './utils'

export function getPostsListJson (slug) {
  // check if value is in local storage

  // else
  const url = 'https://api.github.com/repos/akmur/mdposts/contents/posts/'
  return fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      //set valu in local storage
      return myJson.map(item => {
        return {
          title: onlyTitle(item.name),
          date: onlyDate(item.name),
          slug: item.name,
          githubLink: item.name
        }
      })
    })
}
