export default {
  name: 'map',
  expectedSupportArgumentTypes: ['function'],
  typeToFunction: {
    array: map_array,
    object: map_object,
  },
}

function map_array(mapperFunction) {
  return anArray => {
    const result = []
    for (let i = 0; i < anArray.length; i += 1) {
      const element = anArray[i]
      result.push(mapperFunction(element, i, anArray))
    }
    return result
  }
}

function map_object(mapperFunction) {
  return anObject => {
    const result = {}
    for (const key of Object.keys(anObject)) {
      const value = anObject[key]
      result[key] = mapperFunction(value, key, anObject)
    }
    return result
  }
}
