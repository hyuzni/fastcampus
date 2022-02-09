const path = require('path') // 경로를 만들어주는 패키지. Node.js에 기본으로 깔려있음
// import path from "path" 와 같은 맥락. webpack.config.js는 모던자바스크립트 파일이 아니라서, import를 쓸 수 없다. (ES6)
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const devServer = require('webpack-dev-server')
const { merge } = require('webpack-merge')
require('@babel/polyfill') // 변수로 선언하지 않고 한번만 씀

// 개발/운영 구분하여 분개처리. 매개변수 opts에 들어있음
module.exports = (env, opts) => {
    const config = {
        // 중복되는 옵션들
        entry: { // 최초 진입점. 시작 경로를 지정하는 옵션
            app: [
                '@babel/polyfill',
                path.join(__dirname, 'main.js') // app 이라는 이름으로 main.js 에 시작. __dirname 은 현재파일의 경로를 알려줌. node에서 제공하는 변수
            ]
        },
        output: { // 번들링 결과물을 위치할 경로. 
            filename: '[name].js', // entry에서 설정한 값을 포함. 주로 다중 엔트리 포인트를 만들때 쓴다
            path: path.join(__dirname, 'dist') // 현재 경로의 dist라는 디렉토리
        }, 
        module: {
            rules: [
                // ... other rules
                // loader: 자바스크립트 파일이 아닌것들을 변환할 수 있도록 도와줌
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /.js$/, // js로 끝나는 파일을 찾는다는 정규표현식
                    exclude: /node_modules/, // node_modules 에서는 찾지 않는다
                    loader: 'babel-loader'
                },
                {
                    test: /.css$/, // js로 끝나는 파일을 찾는다는 정규표현식. /\.(scss|sass)$/  이렇게 다중 선택도 가능
                    exclude: /node_modules/, // node_modules 에서는 찾지 않는다
                    use: [
                        'vue-style-loader', // css를 vue DOM에 추가하여 스타일시트를 적용
                        'css-loader',
                        'postcss-loader'
                    ] // 동작하는 순서대로 입력해야 함. (오른쪽에서 왼쪽 순, 아래에서 위쪽 순으로 적용됨)
                },
                {
                    test: /.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader', // sass 보다 먼저 돌아가야 함 왜 안되지??????
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            // make sure to include the plugin!
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html')
            }),
            new CopyPlugin({
                patterns: [ // 프로젝트 안의 파일 디렉토리를 번들 경로에 카피에서 추가함
                    { from: 'assets/', to: '' }
                ]
            })
        ]
    }

    // 개발용
    if(opts.mode === 'development'){
        return merge(config, {
            // 추가 개발용 옵션
            devtool: 'eval',
            devServer: {
                open: true,
                hot: true // hot module replacement
            },
        })
    // 운영, 제품용
    } else {
        return merge(config, {
            // 추가 제품용 옵션
            devtool: 'cheap-module-source-map',
            plugins : [
                new CleanWebpackPlugin(), // output 경로에 지정된 기존 번들을 삭제하는 플러그인.
            ]
        })
    }
}