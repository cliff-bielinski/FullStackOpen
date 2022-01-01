const http = require('http')
const express = require('express')
const app = express()
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const cors = require('cors')
const mongoose = require('mongoose')

const Blog = require('./models/blog')

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
