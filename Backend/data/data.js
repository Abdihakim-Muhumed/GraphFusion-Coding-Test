const Graph = require('./Graph.js')

const graphData = new Graph()


const getGraphData = (req, res) => {
    if(graphData.nodes.length == 0){
        res.status(403).send("Graph data is empty! Add Nodes to fetch.")
    }
    else{
        res.status(200).json(graphData)
    }
}

const addNode = (req, res) => {
    const {name, type} = req.query
    try {
        const addedNode = graphData.addNode(name, type)
        res.status(201).json(addedNode)    
    } catch (error) {
        res.status(403).send(error.message)
    }
}

const addRelation = (req, res) => {
    const {from, to, relationship} = req.query
    try {
        const addedRelation = graphData.addRelation(from, to, relationship)
        res.status(201).json(addedRelation)
    } catch (error) {
        res.status(403).send(error.message)
    }
}

module.exports = {
    getGraphData,
    addNode,
    addRelation
}