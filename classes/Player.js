class Player{
  constructor(specs){
    this.specs = specs
  }

  set_arsenal(arsenal){
    this.arsenal = arsenal
    return arsenal
  }
}

module.exports = Player
