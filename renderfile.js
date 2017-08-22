var fs = require('fs')

module.exports = function renderFile(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
