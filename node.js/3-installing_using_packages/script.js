// Create a new Node.js project and install the figlet package (https://www.npmjs.com/package/figlet). Write a script that uses the function from this package to output some text based art (the figlet package README has a 'Quick Start' section). Run the script with Node.js.

const figlet = require('figlet');

function fruit(selectFruit) {
    switch (selectFruit) {
        case 'apple':
            console.log(figlet.textSync('You choose the apple'))
            break;
        case 'banana':
            console.log(figlet.textSync('You choose the banana'))
            break;
        case 'kiwi':
            console.log(figlet.textSync('You choose the kiwi'))
            break;
        default: console.log(figlet.textSync('Choose a fruit'))
            break;
    }
}

fruit('apple')