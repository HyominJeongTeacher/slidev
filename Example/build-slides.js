/**
 * ============================================================================
 * [Slidev 자동 빌드 스크립트: build-slides.js]
 * 
 * 1. 필요한 라이브러리 및 패키지 설치
 *    $ npm install -D @slidev/cli @slidev/theme-seriph
 * 
 * 2. package.json scripts 설정 (권장)
 *    "scripts": {
 *      "generate": "node build-slides.js",
 *      "dev": "node build-slides.js && slidev --open",
 *      "build": "node build-slides.js && slidev build"
 *    }
 * 
 * 3. 실행 커맨드 (Terminal)
 *    - 마크다운 파일 자동 생성만 실행할 때:
 *      $ node build-slides.js
 * 
 *    - 생성 후 Slidev 개발 서버 실행 (웹 브라우저 자동 열기):
 *      $ npx slidev --open
 * 
 *    - 최종 정적 HTML/PDF 빌드:
 *      $ npx slidev build
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// 1. Slidev 슬라이드 데이터 (총 4개 섹션)
const slideData = [
  {
    fileName: "Sec01",
    pages: [
      "# HTML & CSS 기초\n\n웹 페이지의 구조와 스타일을 작성하는 기본 언어입니다.",
      "# 주요 HTML 태그\n\n- `<h1>` ~ `<h6>`: 제목\n- `<p>`: 본문\n- `<div>`: 영역 구분"
    ]
  },
  {
    fileName: "Sec02",
    pages: [
      "# JavaScript 동적 제어\n\n웹 페이지에 동적인 기능을 부여합니다.",
      "# 변수 선언 방식\n\n1. `const`: 재할당 불가능\n2. `let`: 재할당 가능\n3. `var`: 권장하지 않음"
    ]
  },
  {
    fileName: "Sec03",
    pages: [
      "# Node.js 소개\n\nChrome V8 엔진 기반의 JavaScript 런타임입니다."
    ]
  },
  {
    fileName: "Sec04",
    pages: [
      "# Express 프레임워크\n\nNode.js를 위한 라우팅 및 웹 서버 개발 프레임워크입니다.",
      "# 간단한 서버 코드 예시\n\n```js\nconst express = require('express');\nconst app = express();\napp.listen(3000);\n```"
    ]
  }
];

// 2. 루트 sections 디렉토리 준비
const sectionsDir = path.join(__dirname, 'sections');
fs.mkdirSync(sectionsDir, { recursive: true });

// 3. 루트 slides.md 헤더 생성
let mainIndexContent = [
  '---',
  'theme: seriph',
  'title: 웹 개발 입문 강의 자료',
  'info: Node.js로 자동 생성된 Slidev 프레젠테이션',
  'class: text-center',
  'drawings:',
  '  persist: false',
  'transition: slide-left',
  'mdc: true',
  '---',
  '',
  '# 웹 개발 입문',
  '자동 생성된 Slidev 슬라이드입니다.',
  ''
].join('\n');

// 4. sections 폴더 내 파일 생성 및 slides.md 연결
slideData.forEach((item) => {
  const fileName = `${item.fileName}.md`;
  const filePath = path.join(sectionsDir, fileName);

  // 개별 슬라이드 페이지 합치기 (Slidev 분리자 `---`)
  const fileContent = item.pages.join('\n\n---\n\n');
  fs.writeFileSync(filePath, fileContent, 'utf-8');

  // main slides.md 에 include 구문 작성
  const relativePath = `./sections/${fileName}`;
  mainIndexContent += `\n---\nsrc: ${relativePath}\n---\n`;
});

// 5. 메인 slides.md 생성
fs.writeFileSync(path.join(__dirname, 'slides.md'), mainIndexContent, 'utf-8');

console.log('✅ [Slidev] sections/ 폴더 내 Sec01.md ~ Sec04.md 생성 완료!');