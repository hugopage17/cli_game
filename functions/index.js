const _ = require('underscore')
const Gun = require('../classes/weapons/Gun.js')

exports.rand_n = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}


exports.set_arsenal = (weapons, i, j) => {
  var primary_arr = []
  var secondary_arr = []
  _.map(weapons, w => {
    if(w.position == 'primary'){
      primary_arr.push(w)
    }else{
      secondary_arr.push(w)
    }
  })
  const primary_weapon = primary_arr[i]
  const secondary_weapon = secondary_arr[j]

  return {
    primary_weapon:new Gun(primary_weapon),
    secondary_weapon:new Gun(secondary_weapon)
  }
}
