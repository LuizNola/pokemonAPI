function findNullFields (obj) {
  const nullFields = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === undefined) {
      nullFields.push(key)
    }
  }
  if (nullFields.length > 0) {
    return { Error: 'Faltam os seguintes campos: ' + nullFields.toString() }
  } else {
    return false
  }
}

module.exports = findNullFields
