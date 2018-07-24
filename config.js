const Bundler = require('parcel-bundler');
const Path = require('path');

// 入口文件路径
const file = Path.join(__dirname, './index.html');

// Bundler 选项
const options = {
  outDir: './online', // 将生成的文件放入输出目录下，默认为 dist
  outFile: 'index.html', // 输出文件的名称
  publicUrl: './assert', // 静态资源的 url ，默认为 dist
  watch: true, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
  cache: false, // 启用或禁用缓存，默认为 true
  cacheDir: '.cache', // 缓存被放入的目录，默认为 .cache
  minify: false, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，被启用。
  target: 'browser', // 浏览器/node/electron, 默认为 browser
  https: false, // 服务器文件使用 https 或者 http，默认为 false
  logLevel: 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
  hmrPort: 0, // hmr socket 运行的端口，默认为随机空闲的端口 (node.js 中的 0 被解析为随机空闲端口)
  sourceMaps: false, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
  hmrHostname: '', // 热模块重载的主机名，默认为 ''
  detailedReport: false // 打印 bundles ，资源，文件大小以及时间的详细报告，默认为 false ，只有在禁用监听时才打印报告
};

// 使用提供的入口文件路径和选项初始化 bundler
const bundler = new Bundler(file, options);

// 运行 bundler，这将返回主 bundle
// 如果你使用监听模式，请使用这些事件，因为该 promise 只会触发一次，而不是每次重新构建

class Build {
  constructor () {
    this.init()
  }
  async init() {
    await bundler.bundle();
  }
}
module.exports = new Build()
