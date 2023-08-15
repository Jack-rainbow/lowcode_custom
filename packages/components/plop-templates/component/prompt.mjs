import _ from 'lodash'
import changeCase from 'change-case'
import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const tplDir = path.join(__dirname, './template')

const createComponent = (sourceDir, name, data) => {
  name = changeCase.pascalCase(name)
  const outputDirt = 'packages/'
  sourceDir = path.resolve(__dirname, '../../', outputDirt, '')
  const destination = path.join(sourceDir, './', name)

  return [
    // 组件
    {
      type: 'add',
      path: path.join(
        destination,
        `${name}.${data.type === 'vue' ? 'vue' : 'jsx'}`
      ),
      templateFile: path.join(tplDir, 'component.hbs'),
      data: {
        name
      }
    },
    // 组件引用
    {
      type: 'add',
      path: path.join(destination, 'index.js'),
      templateFile: path.join(tplDir, 'index.hbs'),
      data: {
        name
      }
    },
    // package.json
    {
      type: 'add',
      path: path.join(destination, 'package.json'),
      templateFile: path.join(tplDir, 'package.hbs'),
      data: {
        name
      }
    },
    {
      type: 'add',
      path: path.join(destination, `${name}.module.scss`),
      templateFile: path.join(tplDir, 'style.hbs'),
      data: {
        name
      }
    },
    {
      type: 'add',
      path: path.join(destination, `${name}.define.meta.js`),
      templateFile: path.join(tplDir, 'meta.hbs'),
      data: {
        componentCode: data.componentCode,
        componentsName: data.componentsName
      }
    },
    {
      type: 'add',
      path: path.join(destination, 'vite.config.js'),
      templateFile: path.join(tplDir, 'viteConfig.hbs'),
      data: {
        name
      }
    }
  ]
}

const componentGenerator = {
  description: '创建组件',
  prompts: [
    {
      type: 'input',
      name: 'inputs',
      message: '请输入组件名称',
      validate: function (value) {
        if (/^\s*$/g.test(value)) {
          return '组件名称不能为空'
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件code',
      validate: function (value) {
        if (/^\s*$/g.test(value)) {
          return '组件code不能为空'
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'type',
      message: '请输入组件格式,默认为jsx',
      choices: ['jsx', 'vue'],
      default: 'jsx',
      validate: function (value) {
        if (/^(jsx|vue)+$/gi.test(value)) {
          return true
        }
        return '只能输入jsx或vue'
      }
    },

    {
      type: 'input',
      name: 'version',
      message: '输入版本号，默认为0.0.1',
      default: '0.0.1'
    }
  ],
  actions: (data) => {
    const actions = []
    const names = data.inputs
      .split(',')
      .map((item) => changeCase.pascalCase(item))
    for (let i = 0; i < names.length; i++) {
      const name = names[i]

      const compData = createComponent(data.sourceDir, _.trim(name), data)
      actions.push(...compData)
    }

    return actions
  }
}

export default componentGenerator
