const Graph = require('./Graph.js')

const graphData = new Graph()


const getGraphData = (req, res) => {
    if(graphData.nodes.length == 0){
        res.status(403).send("Graph data is empty! Add Nodes to fetch.")
    }
    res.status(200).json(graphData)
}

const addNode = (req, res) => {
    const {id, name, type} = req.query
    const addedNode = graphData.addNode(id, name, type)
    res.status(201).json(addedNode)
}

const addRelation = (req, res) => {
    const {from, to, relationship} = req.query
    const addedRelation = graphData.addRelation(from, to, relationship)
    res.status(201).json(addedRelation)
}

module.exports = {
    getGraphData,
    addNode,
    addRelation
}