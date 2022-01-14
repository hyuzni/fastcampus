1. node, npm 버전확인 없으면 설치
2. npm init -y 
  : -y : 물어보는 내용없이 init 실행, package.json 생성. 
3. package.json 알맞게 수정 
  : license : ISC / MIT ? 찾아보기
4. webpack : 개발할 때만 필요한 모듈. 업로드엔 사용 안함. 웹사이트에서 돌아가지 않고 개발을 위해서 만들어야 되는 파일을 생성.
 ** 개발용 의존성인지 구별하여 설치 할 수 있어야 함
5. webpack 관련 모듈 설치 npm i -D webpack webpack-cli
> npm install --save-dev MODULE_NAME 
> npm i -D MODULE_NAME // 약어 표현
 : 설치가 되면 package.json 에 devDependencies 에서 해당 항목 확인할 수 있음
   webpack을 사용하기 위해 필요한 다른 모듈의 정보가 들어있는 package-lock.json 이라는 파일이 생길텐데 수정할 일은 없음
   node_modules도 마찬가지 우리가 설치한 모듈과 그 모듈을 사용하기 위해 필요한 다른 모듈이 같이 설치된 경로. 직접 수정할 일은 없음
6. webpack.config.js 라는 파일 생성. webpack 설정 파일. 셋팅 내용은 해당 파일 참고
7. webpack --mode production 으로 실행
  : 나는 이게 잘 안되서 터미널을 powershell 에서 cmd 로 바꿨고 webpack을 -g 옵션으로 다시 설치함. 이유는 모르겠음
8. vue-loader 설치(https://vue-loader.vuejs.org/guide/#manual-setup 참고)
> npm install -D vue-loader vue-template-compiler
9. vue-loader 모듈에 맞춰 webpack.config.js 수정. 소스 참고
10. App.vue 파일을 생성하고 vue를 지원할 수 있는 확장프로그램 설치. Vetur
11. vue 모듈 설치 main.js 작성. 사용할 vue 모듈을 import 하고 컴포넌트로 쓰일 App.vue 를 랜더 한다.
> npm i vue
12. vue를 쓰기위한 webpack loader 모듈을 각각 설치해주고 webpack.config.js 에 rule을 작성해줘야 함
> npm i -D babel-loader vue-style-loader css-loader
13. babel 설치
> npm i -D @babel/core @babel/preset-env
> npm i @babel/polyfill // 구형브라우져에서 안돌아 가는 기능을 돌아갈 수 있게 만듬
14. webpack.config.js에 polyfill 관련 설정 추가. require 로 추가해서 진입점에 main.js 들어가기 전 실행
15. app.js 번들 파일을 생성해서 html에 연결 dist/index.html 파일 참고 
  : 하지만 dist 경로 내에 파일은 배포용으로 번들파일을 언제든지 삭제하고 재생성할 수 있는데 매번 index.html 파일을 생성할 수 없음
16. 그래서 필요한 모듈 html-webpack-plugin webpack 에서 지정한 html에 맞춰 번들 생성시 같이 생성해줌
> npm i -D htmp-webpack-plugin
17. webpack.config.js 에 관련 소스 추가. require 로 상수 선언 해주고 plugins 영역에 내용 옵션 추가
> template: path.join(__dirname, 'index.html')
18. favicon 을 등록하기 위한 플러그인 추가. webpack.config.js plugins 추가
> npm i -D copy-webpack-plugin
19. clean webpack plugin 추가. webpack.config.js plugins 추가
> npm i -D clean-webpack-plugin
20. 개발용 실시간 reload 서버 설정(webpack-dev-server)
> npm i -D webpack-dev-server
여기서 아래 명령은 지역으로 설치해서 직접 명령은 동작하지 않음. package.json script 부분에 등록하면 지역 실행도 가능
> webpack-dev-server --mode development
