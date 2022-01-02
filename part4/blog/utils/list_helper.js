const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blogPost) => sum + blogPost.likes

  return blogs.reduce(reducer, 0)
}

module.exports = { dummy, totalLikes }