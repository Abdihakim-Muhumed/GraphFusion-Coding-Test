class Node{
    constructor(id, name, type){
        this.id = id
        this.name = name
        this.type = type
    }

    update(name, type){
        this.name = name
        this.type = type
    }

}

module.exports = Node