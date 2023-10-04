const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-stagram/dist' : '/',
  // assetsDir: './',
  pwa: {
    name: 'vue-stagram',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    icons: [
      {"src":"./favicon.ico","type":"image/png"},
      // {"src":"./img/icons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},
      // {"src":"./img/icons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"},
      // {"src":"./img/icons/android-chrome-maskable-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},
      // {"src":"./img/icons/android-chrome-maskable-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}
    ],
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']  // 제외하고 싶은 파일 명 (array 자료형)
    }
  }
})