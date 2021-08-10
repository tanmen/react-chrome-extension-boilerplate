const fs = require('fs');
const path = require('path');
const paths = require('../paths');
const isHtml = require('./include');

module.exports = function (entriesPath) {
  return fs.readdirSync(entriesPath)
    .map(filename => ({
      name: path.basename(filename).replace(path.extname(filename), ''),
      filename
    }))
    .filter(({name}) => !isHtml(name))
    .reduce((pre, {name, filename}) =>
      ({...pre, [name]: path.join(entriesPath, filename)}), {
      background: paths.appBackgroundJs,
      options: paths.appOptionsJs,
      popup: paths.appPopupJs,
    })
}
