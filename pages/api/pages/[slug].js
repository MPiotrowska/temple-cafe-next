import { existsSync, readFileSync } from 'fs'
 
const { error, debug } = console
const contentPath = 'content/drafts'
 
/**
* Maps a slug to the content path on the filesystem
* @param {string} slug URL segment for the unique article
* @returns {string} The relative path to the file
*/
const formatPath = (slug) => {
return `${contentPath}/${slug}.md`
}
 
/**
* Checks if a specified article exists on the filesystem as a markdown file
* @param {string} slug URL segment for the unique article
* @returns {boolean} Whether the file exisgts
*/
const pageExists = (slug) => {
try {
if (existsSync(formatPath(slug))) {
  return true
}
} catch (err) {
error(`${slug}.md does not exist in the content directory.`)
debug(err)
}
return false
}
 
const apiHandler = (req, res) => {
// Protect the API from other request types
if (req.method !== 'GET') {
res
  .status(400)
  .json({ message: `request type ${req.method} not supported` })
return
}
// 404 when article doesn't exist
if (!pageExists(req.query.slug)) {
const message = `Page ${req.query.slug} does not exist`
error(`${message} in ${contentPath}`) // Server side error log
res.status(404).json({ message }) // Error returned to client
return
}
 
const content = readFileSync(formatPath(req.query.slug), 'utf-8')
res.status(200).json({ content })
}
 
export default apiHandler