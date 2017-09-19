import { Component } from 'react'

import Gun from 'gun/gun.min.js'

// Add counter to chain
Gun.chain.count = function (num) {
    if (typeof num === 'number') {
        this.get(Gun.text.random()).put(num);
    }
    if (typeof num === 'function') {
        var sum = 0;
        this.map().val(function (val) {
            num(sum += val);
        });
    }
    return this;
};
  
import GunSQLite from 'gun-react-native-sqlite'
const adapter = GunSQLite.bootstrap(Gun)
const gun = new Gun()

// Add to React Component prototype for global availability
Component.prototype.$gun = gun

module.exports = gun