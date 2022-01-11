const path = require('path') // node라는 환경에서 path를 지정해줌
const VueLoaderPlugin = require('vue-loader')

module.exports = {
    entry: { // 진입점 
        app: path.join(__dirname, 'main.js') // app 이라는 이름으로 main.js 에 시작. __dirname 은 현재파일의 경로를 알려줌. node에서 제공하는 변수
    },
    output: { // 결과물에 대한 설정
        filename: '[name].js', // app.js 진입점의 객체 name 가져옴 
        path: path.join(__dirname, 'dist') // 현재 경로의 dist라는 디렉토리
    }, 
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}