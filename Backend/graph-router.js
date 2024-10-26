const express = require('express')
const graphRouter = express.Router()

const {
    getGraphData,
    addNode,
    addRelation
} = require('./data/data.js')

graphRouter.get('/', getGraphData)
graphRouter.post('/nodes', addNode)
graphRouter.post('/relations', addRelation)

module.exports = graphRouter