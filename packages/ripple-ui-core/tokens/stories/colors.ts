import { get } from 'lodash-es'
import rplColors from './../settings/color.yaml'
import theme from './../settings/theme.yaml'
const tokens = { ...theme, ...rplColors }

const getVal = (v: string) => {
  if (typeof v === 'string') {
    if (v.charAt(0) === '{') {
      const valKey = v.replace('{', '').replace('}', '')
      const refVal = get(tokens, valKey)
      return getVal(refVal)
    }
    if (v.hasOwnProperty('value')) {
      return v.value
    }
    return v
  }
}

const getVarName = (path: string[] | string) => {
  const prefix = `--rpl-`
  const normaliseArr = (val) => {
    if (Array.isArray(val)) return val
    if (typeof path === 'string') {
      return path.split('.')
    }
    return []
  }
  return `${prefix}${normaliseArr(path)
    .filter((i) => i !== '_')
    .join('-')}`
}

export const getColorSwatches = (cat) => {
  const category = get(tokens, cat)
  if (!category) return null
  return Object.keys(category)
    .filter((key) => key !== 'value')
    .map((key) => {
      const arrPath = [...cat.split('.'), key]
      return getColorSwatch(arrPath)
    })
}

export const getColorSwatch = (path) => {
  const match = get(tokens, path)
  if (!match) return null
  const value = getVal(match.value)
  return {
    ...match,
    var: getVarName(path),
    value
  }
}

export default rplColors
