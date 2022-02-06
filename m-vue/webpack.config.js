const path = require('path')

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js')   
    },
    output: {
        filename: '[name].js', // app.js entry 의 값을 가져옴. 
        path: path.join(__dirname, 'dist')
    },
    module: {},
    plugins: []
}