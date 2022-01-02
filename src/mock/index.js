// 使用 Mock
import Mock from 'mockjs'
// 获取文件
const mocks = []

const modulesFiles = require.context('./data', false, /\.js$/)
modulesFiles.keys().reduce((modules, modulePath) => {
  // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  // modules[moduleName] = value.default
  mocks.push(value.default[0])
  return modules
}, {})

mocks.reverse()

console.log(mocks, 'mocks')