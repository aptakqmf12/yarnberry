# yarnberry

## 디렉터리

```
📦MonoRepo-with-YarnBerry
 ┣ 📂.git
 ┣ 📂.yarn
 ┣ 📂package
 ┃ ┣ 📂common
 ┃ ┗ 📂front
 ┣ 📜.editorconfig
 ┣ 📜.gitignore
 ┣ 📜.yarnrc.yml
 ┣ 📜README.md
 ┣ 📜package.json
 ┗ 📜yarn.lock
```

- package/common : 공통 코드 repo
- package/front : 프론트엔드 repo
- package.json : 공통 package정의 및 monorepo 세팅

## 명령

- yarn workspace [workspace명] [명령어]

`start:common` : 공통 코드 실행
`dev:front` : front프로젝트 run dev
`build:front` : front프로젝트 run build
