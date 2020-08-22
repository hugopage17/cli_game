const func = require('../../functions')
const Gun = require('../weapons/Gun.js')

class Warrior{
  constructor(specs){
    this.specs = specs
  }

  set_arsenal(_, weapons){
    var arr = {
      primary:[],
      secondary:[]
    }
    _.map(weapons, w => {
      _.map(w.types, t => {
        if(t == this.specs.type){
          if(w.position == 'primary'){
            arr.primary.push(w)
          }else{
            arr.secondary.push(w)
          }
        }
      })
    })
    const pw_specs = arr.primary[func.rand_n(arr.primary.length)]
    const sw_specs = arr.secondary[func.rand_n(arr.secondary.length)]
    let primary_weapon, secondary_weapon
    switch (pw_specs.class) {
      case "gun":
        primary_weapon = new Gun(pw_specs)
      default:
        break;
    }
    switch (sw_specs.class) {
      case "gun":
        secondary_weapon = new Gun(sw_specs)
      default:
        break;
    }
    const arsenal = {
      primary_weapon:primary_weapon,
      secondary_weapon:secondary_weapon
    }
    this.arsenal = arsenal
    this.add_booster(_,{boost_1:pw_specs.booster,boost_2:sw_specs.booster})
    return arsenal
  }

  show_alliance(_, warriors){
    var alliance = []
    _.map(warriors, w => {
      if(w.name != this.specs.name && w.race == this.specs.race){
        alliance.push(w.name)
      }
    })
    return alliance
  }

  add_booster(_,arsenal){
    _.map(arsenal, b => {
      this.specs.stats[b.stat] += (b.boost*this.specs.stats[b.stat])
    })
    return `Weapons Booster applied: ${this.specs.stats}`
  }
}

module.exports = Warrior
