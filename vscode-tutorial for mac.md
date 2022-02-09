vscode 유용한 단축키 모음
⌘	커맨드 (command)
⌃	컨트롤 (control)
⌥	옵션 (option)
⇧	쉬프트 (shift)
⇪

자주 쓰는 단축키

⇧⌘c : commend 창 열기
f1 : commend palette
⌃` : 터미널 열기
⌘\ : editor 분할
⌘, : 사용자 설정 열기
⌘p : 빠른 열기, 파일로 이동
^[num] : [num]번째 탭으로 이동
^g : 라인 이동
⇧⌘\ : 매칭 브래킷으로 점프
⌘n / ⌘w : 새창 열기/창 닫기
⇧⌘s : 다른 이름 저장
⌥⌘s	: 전체 저장
⌘kw : 전체 닫기
⇧⌘v : 마크다운 미리보기 열기
⌘lo : open with live server
⌘. : 퀵 픽스

⌘kr : vscode 단축키 보기

- debug
⌘K V	마크다운 미리보기 사이드에서 열기
⌘K Z	Zen Mode (ESC로 종료)
F9	BreakPoint 전환
F5	시작, 계속
F11 / ⇧F11	스텝 들어가기, 나나기
F10	다음으로
⇧F5	멈추기
⌘K ⌘I	호버 보기

recommend plugin

Korean Language Pack for VSCODE
Auto Rename Tag
Bracket Pair Colorizer
Color Highlight
Bookmarks
Monokai Pro
Prettier
ESLint
GitLens
Debugger for Chorme

basic setting.json
{
"workbench.colorTheme": "Monokai Pro (Filter Spectrum)",
"workbench.iconTheme": "Monokai Pro (Filter Spectrum) Icons",

"prettier.printWidth": 120,
"prettier.tabWidth": 2,
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.bracketSpacing": true,
"prettier.semi": true,
"prettier.useTabs": false,
"prettier.arrowParens": "avoid",
"prettier.endOfLine": "lf",

"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
