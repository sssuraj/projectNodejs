const fs = require('fs');

function functionToExecute(param) {
    if (param == 'Append') {
        fs.appendFile('./../files/' + 'mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        }); 
    }
}