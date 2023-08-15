import componentGenerator from './plop-templates/component/prompt.mjs'

function main(plop) {
  plop.setGenerator('component', componentGenerator)
}

export default main
