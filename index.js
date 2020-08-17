const Player = require('./classes/Player.js')
const Weapon = require('./classes/weapons/Weapon.js')
const {players, weapons} = require('./data.json')
const func = require('./functions')

const player = new Player(players[functions.rand_n(players.length)])
player.set_arsenal(func.set_arsenal(weapons, functions.rand_n(weapons.length), functions.rand_n(weapons.length)))
player.arsenal.primary_weapon.show()
