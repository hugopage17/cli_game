const Weapon = require('./Weapon.js')

class Gun extends Weapon{
  constructor(specs){
    super(specs)
  }

  show(){
    console.log(this.log_data());
  }
}

module.exports = Gun
