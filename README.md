# ⚽️ Pitch View

지도에 K리그 구단들의 경기장을 표시합니다.

## ⚙️ 설치

> 클론 받은 후 의존 패키지를 설치합니다.

```bash
git clone https://github.com/sunaerocket/toylerplate.git
```

```bash
yarn install
```

## 💻 명령어

> 명령어는 설치가 성공하고 난 후에 작동합니다

- 시작: `yarn dev`
- 빌드: `yarn build`
- 프리뷰: `yarn preview`
- 코드검사: `yarn check:code`

## ⛓️ 작업 과정

- 스캐폴더로 초기화

  - 불필요한 구성 요소 제거
  - 어플리케이션 정보 수정
  - README 파일 수정

- 레이아웃 마크업

  - 좌측의 지도 영역과 우측의 장소 목록 영역으로 수평분할

- 지도 표시

  - 적절한 중앙 좌표와 줌 레벨 설정
  - 지도 고정 처리

- 마커 표시

  - 구단별 경기장 정보 목록을 받아서 마커를 표시

- 위치 정보 표시

  - 구단별 경기장 정보 목록을 받아서 위치 정보 카드를 표시

## ✨ 트러블슈팅

- 이슈#1: 새로고침 이후 마커가 사라지는 문제

  - 원인: @react-google-maps/api 라이브러리는 react 17+ 환경에서 Marker 대신 MarkerF 컴포넌트로 지원
  - 해결: MarkerF 컴포넌트로 마커를 표시

- 이슈#2: 라이브러리의 구글 지도 고정 옵션 미지원 문제

  - 원인: @react-google-maps/api 라이브러리의 Map 컴포넌트는 draggable, zoomControl, scrollwheel, disableDoubleClickZoom 옵션을 지원하지 않음
  - 대안: 모든 옵션을 지원하는 @googlemaps/react-wrapper 기반으로 수정하면 되겠지만 나머지 기능 구현부터 하고 진행

## ☑️ 점검 사항

- [x] React, TypeScript 사용
- [x] Google Maps SDK 사용
  - [ ] 지도 고정 처리
  - [x] 마커 10개 이상
- [ ] 모바일 환경에 대응하는 반응형 코드 작성
- [x] README 파일 작성
- [ ] 작업 내역을 알 수 있도록 커밋 메시지 작성
- [ ] 원격 저장소 링크로 제출

## ℹ️ UI 가이드

![figure: ui guide](public/ui-guide.png)

## 🕸️ 참고자료

- [Blog, "flex-grow is weird. Or is it?"](https://css-tricks.com/flex-grow-is-weird/)
- [Docs, Google Maps Platform](https://developers.google.com/maps/documentation/javascript/overview)
- [Docs, @react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- [Docs, vite 환경변수 설정하기](https://vitejs.dev/guide/env-and-mode.html#env-files)
- [Service, www.latlong.net](https://www.latlong.net/)
- [Docs, @googlemaps/react-wrapper](https://github.com/googlemaps/react-wrapper)
- [Post, 'section vs article'](https://stackoverflow.com/questions/7549561/section-vs-article-html5)
- [Service, box-shadow-css-generator](https://cssgenerator.org/box-shadow-css-generator.html)
