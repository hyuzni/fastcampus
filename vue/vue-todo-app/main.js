import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render : h => h(App)
    // 위에 축약형과 같은 의미
    // render (createElement) {
    //     return createElement(App) // element 요소를 생성한다.
    // },
})
