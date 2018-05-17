module.exports = {
    build: {
        vendor: ['~/plugins/iview']
    },
    plugins: ['~/plugins/iview'],
    css: [
        'iview/dist/styles/iview.css',
    ],
    // iview-loader
    extend (config) {
        config.module.rules.push({
            test: /\.vue$/,
            loader: 'iview-loader',
            options: {
                prefix: false
            }
        })
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],
    axios: {
        browserBaseURL: 'http://chongliu.me:8888',
        //https: true,
    },
    proxy: {
        "/api": "https://chongliu.me",
    },
    loading: { color: '#3B8070' },
}
