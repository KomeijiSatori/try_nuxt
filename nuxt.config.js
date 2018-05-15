module.exports = {
    build: {
        vendor: ['axios', '~/plugins/iview']
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
    loading: { color: '#3B8070' },
}
