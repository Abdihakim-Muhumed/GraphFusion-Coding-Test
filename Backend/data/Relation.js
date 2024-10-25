const Node = require('Node.js')

class Relation {
    constructor(from, to, relationship){
        this.from = from
        this.to = to
        this.relationship = relationship
    }
}

module.exports = Relation