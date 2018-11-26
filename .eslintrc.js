module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {   // eslint 配置规则
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,  // 函数(function) 的左空格不需要加
    'indent': 0    // 忽略缩进，缩进为0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
