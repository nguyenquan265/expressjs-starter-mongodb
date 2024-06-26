// Definition: Function to filter object based on allowed fields
export const filterObj = (obj, ...allowedFields) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (allowedFields.includes(key)) {
      acc[key] = obj[key]
    }

    return acc
  }, {})
}
