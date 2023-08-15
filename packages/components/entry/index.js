const path = require('path')

// 模版文件
const templateFiles = [
  '.npmrc',
  '.gitignore',
  'plopfile.mjs',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  'package.json',
  'README.md'
]
// 模版目录
const templateDirs = ['example', 'packages', 'plop-templates']

const templateFilePaths = templateFiles.map((item) => {
  // let targetFileName = item.replace(/^\./g, '_')
  console.log(item, '---item')
  if (item === 'package.json') {
    item = '_package.json'
  }
  return path.join(__dirname, '..', 'template', item)
})

const templateDirPaths = templateDirs.map((item) => {
  return path.join(__dirname, '..', 'template', item)
})

module.exports = {
  templateFilePaths,
  templateDirPaths,
  templateDirs,
  templateFiles,
  exampleDirPath: path.join(__dirname, '..', 'template', 'example'),
  packagesDirPath: path.join(__dirname, '..', 'template', 'packages'),
  plopDirPath: path.join(__dirname, '..', 'template', 'plop-templates')
}
