const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-stagram/dist' : '/',
  // assetsDir: './',
  pwa: {
    name: 'vue-stagram',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']  // 제외하고 싶은 파일 명 (array 자료형)
    }
  }
})