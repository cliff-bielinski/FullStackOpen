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

  console.log('current favorite:', favorite.title)

  return ({
    title: favorite.title || '',
    author: favorite.author || '',
    likes: favorite.likes
  })
}

module.exports = { dummy, totalLikes, favoriteBlog }