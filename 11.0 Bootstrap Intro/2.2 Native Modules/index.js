const fs = require('fs');

fs.readFile('/Users/pranavsv/Downloads/2.2 Native Modules/message2.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 