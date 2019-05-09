// const Environment = 'dev';     //开发
const Environment = 'production';  //生产

// 【模板配置项目】
const Terminal = 'window'; //pc端
// const Terminal = 'mobile'; //移动端

// 【pc端组件】
const Part = 'Record'; //备案页组件
// const Part = 'Duty'; //爱税筹PC端组件
// 【移动端组件】
// const Part = 'Tax'; //爱税筹移动端组件

const Route = {
    'dev': '/',
    'production': './'
}

const Group = {
    window: [
        {
            Record: {
                title: '明动咨询',
                packname: 'index.html',
                packroute: 'vue-static/record'
            },
            Duty: {
                title: '爱税筹',
                packname: 'index.html',
                packroute: 'vue-static/duty'
            }
        }
    ],
    mobile: [
        {
            Tax: {
                title: '爱税筹',
                packname: 'index.html',
                packroute: 'vue-static/tax'
            }
        }
    ]
}

module.exports = {
    publicPath: process.env.NODE_ENV === Environment
    ? Route[Environment]  //生产环境路径
    : Route[Environment], //开发环境路径
    assetsDir: Group[Terminal][0][Part].packroute, //打包路径
    productionSourceMap: false, //是否需要.map文件
    lintOnSave: process.env.NODE_ENV !== 'production',

    //webpack配置
    chainWebpack: config => {
        // 移除 preload 插件
        // config.plugins.delete('preload')
        // 移除 prefetch 插件
        // config.plugins.delete('prefetch')
        config.module
            .rule('images')
              .use('url-loader')
                .loader('url-loader')
                  .tap(options => Object.assign(options, { limit: 1 }))
    },
    configureWebpack: {
        performance: {  //关闭webpack打包文件过大提示
            hints: false
        }
    },
    //css 配置
    css: {
        extract: true, //是否使用css分离插件ExtractTextPlugin
        sourceMap: false, //关闭css source map
        loaderOptions: {}, //css预设器配置
        modules: false, //启用 CSS modules for all css / pre-processor files.
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pages: {
        index: {
          entry: Terminal == 'window' ? 'src/w_main.ts':'src/m_main.ts', //入口文件
          template: 'src/html/' + Terminal + '.html', //源模板
          title: Group[Terminal][0][Part].title,
          filename: Group[Terminal][0][Part].packname,  //打包文件名
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    devServer: {
        host: '0.0.0.0',
        // host: '169.254.85.253',
        port: 8080,
        https: false,
        hot: true,
        hotOnly: true,
        open: true,
        proxy: null, //设置代理
        before: app=> {}
    }
}