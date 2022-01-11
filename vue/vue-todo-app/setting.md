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