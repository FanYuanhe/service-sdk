'use strict';

const { sayHello } = require('service-ui-package');
const { hello } = require('service-tools-package');

function app() {
    sayHello();
    hello();
}
 app();
