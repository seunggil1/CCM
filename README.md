# 웹 에디터

VS code의 거의 모든 단축키들을 웹에서 쓸 수 있는 온라인 코드 에디터입니다.
페이지 자체에 탭이 있어서 각각 탭별로 에디터/문제/예제 를 보여줄 수 있습니다.
또 탭들의 위치 및 크기조절이 자유로워 

## 요구사항

프로젝트 실행에 필수적인 것들을 적어주세요.
editor/react/origianl 디렉토리에 react js 클래스를 선언하고
아래의 명령어를 통해 브라우저가 이해할 수 있는 js 파일로
editor/react 디렉토리에 컴파일 한다
npx babel --watch editor/react  --out-dir editor/src/js/react --presets react-app/prod

- Node.js >= 14
- CUDA >= 11.1

## 설치방법

npm install monaco-editor
npm install golden-layout
npm install child_process
npm install babel-cli@6 babel-preset-react-app@3

### Windows

설치 과정을 순서대로 작성하세요.

```
$ swift install packageName
```

### Linux

```
$ apt install packageName
```

## 참여인원

- 이창주, busbtvi@naver.com, 메인 개발자
- 강승길, 이메일2, 역할2

## 참고

- A 프로젝트, 링크
- B 논문, 링크
- C 교재, 링크

## 라이센스

- 해당 프로젝트의 라이센스를 표기해주세요.
- GNU 라이센스의 경우 CCM에 적용할 수 없으므로, CCM 관련 참여자들은 GNU 라이센스가 아닌 다른 라이센스를 적용해주세요.