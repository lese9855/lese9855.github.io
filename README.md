# Seunghwan Lee — personal website, version 7

영문 개인 포트폴리오 사이트입니다. 메인 페이지와 작업 상세 페이지 4개, 특허 및 실용신안 상세 페이지 3개로 구성되어 있습니다.

## 먼저 보기

영상까지 사이트 안에서 확인하려면 ZIP 전체의 압축을 풀고, 해당 폴더에서 다음 명령을 실행하세요. Python 3의 기본 기능만 사용하므로 추가 패키지를 설치할 필요가 없습니다. Miniconda Prompt에서도 실행할 수 있습니다.

```bash
python Start-preview.py
```

브라우저가 자동으로 열리며, 주소창에 이 컴퓨터에서만 사용하는 HTTP 주소가 표시됩니다. 자동으로 열리지 않으면 터미널에 나온 주소를 브라우저에 붙여 넣으세요. 미리보기를 보는 동안 터미널 창을 열어 두고, 끝나면 Ctrl+C로 종료하세요. 영상 재생에는 인터넷 연결이 필요합니다. 이 실행 파일은 외부에 사이트를 게시하지 않습니다.

화면과 글만 빠르게 살펴보려면 `Preview.html`을 Chrome이나 Edge에서 직접 열어도 됩니다. 사진과 PDF가 포함된 독립 실행 미리보기이며, 작품과 특허의 제목을 눌러 상세 페이지로 이동할 수 있습니다. 파일로 직접 여는 경우에는 임베드 영상을 작품 이미지와 YouTube 링크로 표시합니다. 이 미리보기는 JavaScript를 사용합니다.

배포할 실제 사이트는 `website` 폴더에 있습니다. `website/index.html`을 열어도 전체 사이트를 볼 수 있습니다. 실제 사이트는 일반 HTML과 CSS로 되어 있으며, JavaScript나 빌드 도구 없이 페이지 사이를 이동할 수 있습니다.

## 파일 구성

- `Start-preview.py`: 웹주소 형태로 사이트를 열어 주는 로컬 미리보기 실행 파일
- `Preview.html`: 사진과 PDF를 포함한 독립 실행 미리보기
- `website/index.html`: 영문 소개, 사진 자리, 작업 개요, Patent / Utility Models, CV, 연락처
- `website/projects/`: 작업 상세 페이지 4개
- `website/patents/`: 특허 및 실용신안 상세 페이지 3개
- `website/styles.css`: 모든 페이지에 적용되는 공통 디자인
- `website/video-preview.js`: 파일로 직접 열었을 때 영상 대신 작품 이미지와 YouTube 링크를 표시
- `website/assets/`: 포트폴리오에서 가져온 사진과 도면
- `website/documents/`: 제공된 CV와 포트폴리오 PDF 원본
- `website/.nojekyll`: GitHub Pages에서 정적 파일을 그대로 제공하기 위한 파일

## 사진 넣기

1. 본인 사진을 `website/assets/portrait.jpg`로 저장하세요.
2. `website/index.html`의 `<div class="portrait-slot" ...>`부터 해당 `</div>`까지를 바로 아래 주석에 있는 `<figure class="portrait-slot">...</figure>`로 교체하세요.
3. 사진의 기본 표시 비율은 4:5입니다. 이미지가 잘리는 위치는 `styles.css`의 `.portrait-slot img`에서 `object-position`으로 조정할 수 있습니다.

실제 사진이 제공되지 않아 이번 버전에는 비어 있는 사진 자리만 마련했습니다. 사진을 추가한 뒤에는 `website/index.html`에서 확인하세요. `Preview.html`은 이번 버전의 별도 스냅샷이므로 소스 수정에 따라 자동으로 갱신되지 않습니다.

## 내용 수정하기

메인 페이지의 소개와 개요는 `index.html`, 세부 설명은 `projects`와 `patents` 아래의 해당 HTML에서 수정하면 됩니다. 각 페이지의 제목, 설명, 본문, 이미지 대체 텍스트도 영어로 작성되어 있습니다.

작업 제목에는 해당 상세 페이지로 가는 링크가 있습니다. 상세 페이지의 상단 경로와 마지막 링크로 메인에 돌아올 수 있고, 페이지 목차로 각 문단에 바로 이동할 수 있습니다.

CV의 Education에는 학부생 신분과 전공만 표시했습니다. Community engagement에는 초상사진 프로젝트와 Color Purple을 남겼습니다. 두 활동의 설명은 말머리표와 들여쓰기 없이 일반 문단으로 표시하며, 기존 문장과 날짜를 유지했습니다. Selected awards에는 원본 CV의 수상 두 건을 추가했으며, 그룹 부문 수상은 전시 그룹에 주어진 상이라는 점을 명시했습니다.

부전공명은 Nano-Convergence Engineering으로 수정했습니다. 두 수상 항목의 작품명 표기는 모두 Project:로 통일했고, Best Presentation에는 Awarded to my exhibition group을 별도 줄로 표시했습니다. 두 줄은 같은 본문 글자 크기와 색을 사용합니다. 수상 항목의 Color Purple에는 링크를 두지 않았습니다.

Patent / Utility Models는 Selected works 바로 다음에 독립된 항목으로 배치했습니다. 개요에는 유형, 등록번호, 등록명, 설명이 있으며, 상세 페이지 상단의 Registration record에서 제공된 KIPRIS DOI 링크로 이동할 수 있습니다. 상세 내용은 제안 배경, 원리, 도면, 개발 방향으로 구성했습니다.

메뉴는 Works, 작업 섹션은 Selected works로 표기합니다. 상세 페이지의 상단 경로와 돌아가기 링크에도 복수형을 적용했습니다. Selected works 제목 옆의 전체 연도와 CV 제목 옆의 중복 PDF 링크를 제거했으며, CV PDF는 맨 위 소개 영역에서 열 수 있습니다.

PDF를 갱신할 때는 `documents` 폴더의 파일을 같은 이름으로 교체하세요. 현재 PDF는 업로드된 원본이며, 웹사이트 수정에 맞춰 내용 자체를 다시 편집하지는 않았습니다.

## YouTube 영상

각 작업 상세 페이지에서 첫 번째 소제목 아래에 영상을 배치했습니다. I Can See 2의 두 번째 프로토타입은 Making photographs accessible 아래, 첫 번째 프로토타입은 Prototypes and feedback 아래에 있습니다. Shorts를 포함한 모든 재생 영역은 다른 사진과 같은 전체 폭을 사용하며, 기본 비율은 16:9입니다. 세로 영상의 화면 비율은 YouTube 플레이어가 유지하고 좌우에는 여백이 생깁니다. 좁은 화면에서는 조작부를 위한 최소 높이를 확보합니다.

영상은 자동 재생하지 않습니다. iframe에 영상 제목과 전체 화면 재생 기능을 지정했으며, 영상 아래에는 YouTube로 직접 이동하는 링크도 두었습니다.

YouTube 오류 153은 HTTP Referer 또는 이에 해당하는 식별 정보가 없는 요청을 나타냅니다. 기존 iframe에도 권장 설정인 strict-origin-when-cross-origin이 들어 있었으며, 이번에는 모든 페이지의 meta 태그와 미리보기 서버의 응답 헤더에도 같은 정책을 명시했습니다.

이 설정은 기존 출처 정보를 전달하는 정책이므로, HTTP 웹주소가 없는 file:// 페이지에 출처를 만들어 주지는 않습니다. 영상까지 확인할 때는 위의 Start-preview.py로 실행하거나 배포된 웹주소에서 접속하세요. file://로 직접 여는 화면에는 대체 보기를 제공하고, HTTP나 HTTPS로 접속하면 YouTube 임베드를 그대로 사용합니다. 가상의 origin이나 다른 사이트 주소를 설정하지 않습니다.

HTTP나 HTTPS로 접속한 뒤에도 153이 발생한다면 브라우저의 실제 영상 요청에 Referer가 전달되는지 확인해야 합니다. 이번 환경에서는 사용자의 브라우저 요청과 실제 재생까지 확인하지 못했습니다. 영상 업로더의 퍼가기 허용 설정은 별도의 재생 조건입니다.

공식 안내: https://support.google.com/youtube/answer/171780?hl=en

Referrer 권장 설정: https://developers.google.com/youtube/terms/required-minimum-functionality

## 반응형 배치

넓은 화면에서는 이름과 소개, 사진, Interests 순서로 배치합니다. 중간 폭에서는 사진이 이름 오른쪽에 있고, 그 아래에 Interests가 두 열로 표시됩니다. 기본 브라우저 설정 기준 768px 이하에서는 이름과 소개가 첫 행 전체를 사용합니다. 다음 행에서는 사진 왼쪽과 Interests 오른쪽을 하나의 묶음으로 배치하고, 묶음 바깥의 좌우 여백을 동일하게 두어 가운데 정렬합니다. Interests 제목과 목록, PDF 링크는 왼쪽 정렬합니다.

모바일에서 사진과 Interests의 파란 바 사이 간격은 0.75rem입니다. 사진 폭은 화면 너비의 32%를 기준으로 최소 6rem, 최대 13rem으로 설정했습니다. Interests의 기준 폭도 화면 크기에 따라 조절하며, 전체 묶음이 본문 폭을 넘지 않도록 제한했습니다. 기본 글자 크기에서 화면 너비가 375px이면 사진 폭은 약 120px이고, 파란 바까지의 간격은 12px입니다. 두 영역을 합친 묶음의 폭은 300px이며 화면 양끝에 각각 37.5px의 여백이 생깁니다. 더 좁아져도 사진과 Interests는 같은 행에 유지되며, 텍스트는 오른쪽 영역 안에서 줄바꿈됩니다.

CV의 Education, Community engagement, Selected awards 소제목은 모바일을 포함한 모든 화면 크기에서 검정색으로 표시합니다.

## 색상

상단 메뉴의 배경과 주요 섹션을 나누는 굵은 선은 #005ea5 파란색을 사용합니다. Interests와 상세 페이지 목차 옆의 세로 바도 파란색입니다. 개별 항목 사이의 얇은 구분선은 이전 회색인 #b1b4b6 또는 #d8dcdf로 복원했습니다. 이 회색 설정은 메인 페이지와 모든 상세 페이지에 공통으로 적용합니다. 메뉴에는 흰색 글자를 사용하며, 키보드 초점 표시는 노란색을 사용합니다.

색상 대비 참고: https://design-system.service.gov.uk/styles/colour/

## GitHub Pages에 올리기

1. GitHub에서 사용할 저장소를 준비하세요. 대표 개인 홈페이지라면 `본인계정명.github.io`를 저장소 이름으로 사용할 수 있습니다.
2. `website` 폴더 **안의 내용**을 저장소 최상위에 올리세요. 저장소를 열었을 때 `index.html`이 바로 보여야 합니다. `Preview.html`은 올릴 필요가 없습니다.
3. **Settings → Pages → Deploy from a branch**에서 **main**과 **/(root)**를 선택하고 저장하세요.
4. 배포 후 Pages 설정 화면에 표시된 주소에서 확인하세요.

페이지와 자료에 상대 경로를 사용하므로 개인 홈페이지와 일반 저장소의 프로젝트 페이지 모두에 사용할 수 있습니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 확인한 사항

페이지와 자료 경로, 상세 페이지의 제목 링크, 목차와 돌아가기 링크, 이미지의 실제 파일 및 크기, 대체 텍스트, 페이지 언어와 제목을 확인했습니다. 기본 글자와 링크 색상은 흰 배경에서 충분한 대비를 갖도록 정했습니다.

화면 폭에 따른 배치, 키보드 초점 표시, 본문 바로 가기, 동작 감소 설정, 인쇄 스타일을 포함했습니다. 영상 5개의 주소와 소제목별 배치, 메인 섹션 순서, 등록 링크 삽입을 확인했습니다. 이번 환경에서는 실제 데스크톱 및 모바일 브라우저 렌더링과 영상 재생 검증은 완료하지 못했습니다.

DOI는 제공된 주소를 그대로 사용했습니다. 실용신안 두 건은 공개 공보의 출원번호와 등록번호를 대조했습니다. DOI의 KIPRIS 최종 연결과 제스처 잠금 특허의 출원번호 대조는 이번 조회 환경에서 확인하지 못했습니다.

## 자료

작업 설명, 사진, 도면은 제공된 `1번포트폴리오.pdf`에 기반합니다. 학력과 활동, 등록 정보는 `1번CV.pdf`를 함께 참고했습니다. SketchUp과 3D 프린팅 사용 등 대화에서 확인된 수정 사항도 반영했습니다.

코드와 파일을 준비한 상태이며, 실제 GitHub 저장소나 공개 웹사이트에는 배포하지 않았습니다.
