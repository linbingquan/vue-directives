const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'vue-directives'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
}