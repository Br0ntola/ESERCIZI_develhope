// Use a method with a callback
// Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. The documentation for this method is on the Node.js File system page:
//  https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback

import * as fs from 'node:fs'

const data = "Hello! I'm the text";

fs.writeFile('file.txt', data, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log('the data has been written')
});