
module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  copyFontAwesomeCSS: {
      src: '{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css',
      dest: '{{WWW}}/assets/css/'
  },
  copyFontAwesome: {
    src: '{{ROOT}}/node_modules/font-awesome/fonts/**/*',
    dest: '{{WWW}}/assets/fonts/'
  }
}
