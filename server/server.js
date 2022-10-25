const path = require('path')
const express = require('express')

const contactRoutes = require('./routes/contacts')
const userRoutes = require('./routes/users')
const messageRoutes = require('./routes/messages')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.resolve(__dirname, '../dist')))

server.use('/api/v1/contacts', contactRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/messages', messageRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
