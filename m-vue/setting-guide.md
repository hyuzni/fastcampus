1. $npm init > package.json 파일 생성 
2. vetur 설치 필요 vue 를 쓰기위한 확장 프로그램
3. Error: Cannot find module 'vue/compiler-sfc' 이 에러는 vue 3.0이상 받으면 해결
4. webpack-dev-server : 수정사항을 빠르게 확인할 수 있는 실시간 reload 서버
npm -D(개발용)으로 설치된 dependency는 전역 사용이 안됨. script로 등록해서 사용
5. scss 를 쓰기위한 sass-loader node-sass 설치
> node-sass는 문제가 많네 ... 제거 후 sass로 재 설치
6. postcss 는 뭐가 문제였는지 모르겠음 autoprefixer 를 셋팅을 해도 안되서 이것저것 해보다가 번들파일을 만들어보니 되었고 그러고 개발도 됨 왜지?? 여튼 됨