const loaderUtils = require('loader-utils')

function addNamespace(map, namespace) {
  if (namespace) {
    const newMap = {}
    Object.keys(map).forEach(key => {
      newMap[`--${namespace}__${key}`] = map[key]
    })
    return newMap
  }
  return map
}

function parseVars(data, namespace) {
  const list = data.replace(/[\f\n\r\t\v]/g, '').split(';')
  const map = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (!item.includes(':')) continue
    const temp = item.split(':')
    map[temp[0]] = temp[1].trim()
  }
  return addNamespace(map, namespace)
}

module.exports = function(source) {
  const { namespace } = loaderUtils.parseQuery(this.resourceQuery)
  const map = parseVars(source, namespace)

  console.log(map)

  this.callback(null, '')
  return
}
