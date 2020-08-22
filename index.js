const Assault = require('./classes/warriors/Assault.js')
const Weapon = require('./classes/weapons/Weapon.js')
const {warriors, weapons} = require('./data.json')
const func = require('./functions')
const _ = require('underscore')

const player = new Assault(warriors[0])
player.set_arsenal(_, weapons)
const alliance = player.show_alliance(_, warriors)
