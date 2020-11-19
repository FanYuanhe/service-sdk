'use strict';

const { log } = require('service-tools-package');

function sayHello () {
    log();
    console.log("这里是service-ui-package");
}

module.exports =  { sayHello };