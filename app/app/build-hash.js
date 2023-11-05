const crypto = require('crypto');
const fs = require('fs');

const resultScript = 'dist/bundle.js';

const fileBuffer = fs.readFileSync(resultScript);
const hashSum = crypto.createHash('sha256');
hashSum.update(fileBuffer);

const hex = hashSum.digest('hex').substr(0,8);
const preparedData = resultScript.split('.');
fs.rename(resultScript, `${preparedData[0]}.${hex}.${preparedData[1]}`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
const jsHash = hex;

fs.readFile('public/index.html', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    let result = data.replace('/static/bundle.js', `/static/bundle.${jsHash}.js`);
  
    fs.writeFile('public/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
