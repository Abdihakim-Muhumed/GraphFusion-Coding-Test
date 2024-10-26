const Node = require('./Node.js')
const Relation  = require('./Relation.js')

class Graph {
    constructor(){
        this.nodes = []
        this.relations = []
    }

    addNode(name, type){
        const checkNode = this.nodes.find(node => node.name == name && node.type ==type)
        if(!checkNode){
            const id = this.nodes.length + 1 
            const node = new Node(id, name, type)
            this.nodes.push(node)
            return node
        }
        throw new Error('Node already exists!')
    }

    addRelation(from, to, type){
        const fromNode = this.nodes.find(node => node.id == from)
        const toNode = this.nodes.find(node => node.id == to)
        if(!fromNode || !toNode){
            throw new Error('Invalid node id!')
        }
        else{
            const relation = new Relation(from, to, type)
            this.relations.push(relation)
            return relation
        }
    }
}

module.exports = Graph