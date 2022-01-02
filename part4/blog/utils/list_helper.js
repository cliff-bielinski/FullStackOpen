const blog = require("../models/blog")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blogPost) => sum + blogPost.likes

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (largest, current) => current.likes > largest.likes ? current : largest

  const favorite = blogs.reduce(reducer, { likes: 0 })

  return ({
    title: favorite.title || '',
    author: favorite.author || '',
    likes: favorite.likes
  })
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return { author: '', blogs: 0 }
  }

  const authors = {}

  blogs.forEach(blog => {
    authors[blog.author] = authors[blog.author] === undefined ? 1 : authors[blog.author] += 1
  })

  const result = Object
    .keys(authors)
    .reduce((largest, current) => authors[current] > authors[largest] ? current : largest)

  return { author: result, blogs: authors[result] }
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }