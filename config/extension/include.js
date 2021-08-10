module.exports = function (name) {
  return name && ['background', 'options','popup'].includes(name.replace('runtime-', ''))
}
