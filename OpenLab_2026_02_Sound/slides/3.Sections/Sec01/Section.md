---
theme: default
highlighter: shiki
transition: slide-left
title: '실험 장비 및 프로그램 소개'
---

# 실험 장비 및 프로그램 소개

<!--
이번 섹션에서는 소리 실험에 활용할 수 있는 MBL 장비와 센서,
신호 발생 도구, 모바일 앱 및 Google Colab 분석 환경을 소개합니다.
이후 실험에서 데이터를 어떻게 수집하고 분석하는지 연결해서 설명합니다.
-->

---
layout: default
---

# 목차

<ul class="list-disc pl-8 space-y-3 text-2xl">
  <li>MBL &amp; 센서 장비</li>
  <li>신호 발생 &amp; 가상 실험</li>
  <li>모바일 앱 &amp; Colab</li>
</ul>

<!--
이번 섹션에서 다룰 세 가지 내용을 소개합니다.
먼저 MBL과 센서 장비를 살펴보고,
이후 신호 발생 및 가상 실험 도구와
모바일 앱·Colab 분석 환경을 차례로 확인합니다.
-->

---
layout: default
---


# 1-1. MBL 및 측정 센서 소개

<div class="grid grid-cols-2 gap-8 mt-6">

  <div class="p-4 border rounded-xl">

  <h3>🎙️ Vernier Go Direct® Sound Sensor</h3>

  <ul>
    <li>블루투스(BLE) 및 USB를 지원하는 무선 소리 센서</li>
    <li>음압 파형과 소리 크기 실시간 수집</li>
    <li>최대 100,000Hz 샘플링 레이트 지원</li>
    <li>스마트폰, 태블릿, PC와 연결 가능</li>
  </ul>

  ```text
  [소리 발생] → [Go Direct Sound] → [Bluetooth/USB 전송]
  ```

  </div>

  <div class="p-4 border rounded-xl">

  <h3>🎤 유선 마이크로폰 & LabQuest</h3>

  <ul>
    <li>마이크로폰으로 소리를 전기 신호로 변환</li>
    <li>LabQuest에서 아날로그-디지털 변환(ADC)</li>
    <li>시간에 따른 정밀한 파형 수집</li>
    <li>샘플링 레이트와 측정 범위 직접 설정</li>
  </ul>

  ```text
  [소리 발생] → [마이크로폰] → [LabQuest] → [파형 분석]
  ```

  </div>

</div>

<!--
무선 센서는 설치와 이동이 편리합니다.
유선 마이크로폰과 LabQuest는 측정 조건을 세밀하게 조절하고
정밀한 파형을 수집하는 데 유리합니다.
샘플링 레이트가 충분히 높아야 소리의 파형을 왜곡 없이 기록할 수 있습니다.
-->

---
layout: default
---

# 1-2. 함수발생기

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 border rounded-xl">

<h3> 함수발생기</h3>

<ul>
  <li>정현파, 사각파, 삼각파 등 표준 전기 신호 생성</li>
  <li>Hz 단위의 정밀한 주파수 설정</li>
  <li>진폭(Vpp) 조절</li>
  <li>발생 신호와 소리의 관계 탐구</li>
</ul>

</div>

<div class="p-5 border rounded-xl flex flex-col items-center">

<a href="https://www.tek.com/en/datasheet/arbitrary-function-generator-0"
  target="_blank"  >
  <img src="https://www.tek.com/-/media/images/datasheets/afg2021_en_us_75w_28089_06/afg2021productjpg.jpg"
    alt="Tektronix AFG2021 함수발생기"
    class="max-h-60 object-contain"
  />
</a>

<a href="https://www.tek.com/en/datasheet/arbitrary-function-generator-0"
  target="_blank"
  class="mt-4 text-sm text-blue-600 underline">
※ 모델명: Tektronix AFG2021
</a>

</div>

</div>

<!--
함수발생기는 다양한 표준 파형을 생성하고 주파수와 진폭을 정밀하게 조절하는 장비입니다.
-->

---
layout: default
---

# 1-3. 실습 전 측정 준비

<div class="grid grid-cols-2 gap-8 mt-6">

  <div class="p-5 border rounded-xl">
    <h3>측정 구성</h3>
    <ol>
      <li>스피커와 마이크를 약 30 cm 떨어뜨려 설치</li>
      <li>함수발생기 또는 기준 음원으로 소리 재생</li>
      <li>센서를 PC 또는 LabQuest에 연결</li>
      <li>동일한 거리와 입력 조건을 기록</li>
    </ol>
  </div>

  <div class="p-5 border rounded-xl">
    <h3>기록할 측정 조건</h3>
    <ul>
      <li>음원 종류와 설정 주파수</li>
      <li>샘플링레이트 $f_s$와 측정 시간</li>
      <li>마이크와 스피커 사이 거리</li>
      <li>CSV 파일명과 측정 단위</li>
    </ul>
  </div>

</div>

<div class="mt-6 p-4 border rounded-xl text-center">
  <strong>권장:</strong> 440 Hz 기준음은 $f_s \geq 2\times440\text{ Hz}$를 만족하도록 설정하고,
  파형 관찰을 위해서는 그보다 충분히 높은 샘플링레이트를 사용한다.
</div>

---
layout: default
---

# 1-4. 가상 실험 도구

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 border rounded-xl">

  <h3>💻 자바실험실</h3>

  <ul>
    <li>진폭과 진동수에 따른 파형 변화 시뮬레이션</li>
    <li>파형과 소리의 관계를 직관적으로 확인</li>
    <li>실제 장비를 사용하기 전 개념 탐색</li>
  </ul>

</div>

<div class="p-5 border rounded-xl">

  <h3>🎹 Musica</h3>

  <ul>
    <li>건반별 정확한 주파수의 소리 재생</li>
    <li>순수파와 악기에서 발생하는 복합파 비교</li>
    <li>음정과 주파수의 관계 탐구</li>
  </ul>

</div>

</div>

<!--
자바실험실에서는 진폭과 진동수를 바꾸며 파형의 변화를 관찰합니다.
Musica에서는 순수한 소리와 악기 소리의 파형 및 음색 차이를 비교할 수 있습니다.
두 도구를 활용하면 소리의 물리적 특성을 시뮬레이션과 청각 경험으로 함께 이해할 수 있습니다.
-->

---
layout: default
---

# 1-5. 모바일 센서 앱과 Colab

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-5 border rounded-xl">

  <h3>📱 Physics Toolbox</h3>

  <ul>
    <li>오실로스코프: 시간에 따른 파형 확인</li>
    <li>스펙트럼 분석기: FFT를 통한 주파수 성분 분석</li>
    <li>톤 제네레이터: 기준 소리 생성</li>
    <li>측정 데이터를 <code>.csv</code> 형식으로 추출</li>
    <li>세부 사용 절차는 별도 실습 자료로 추후 제공</li>
  </ul>

</div>

<div class="p-5 border rounded-xl">

  <h3>🐍 Google Colab</h3>

  <ul>
    <li>웹 브라우저 기반 Jupyter Notebook 환경</li>
    <li><code>numpy</code>, <code>matplotlib</code>, <code>scipy</code> 활용</li>
    <li>CSV 데이터 업로드 및 시각화</li>
    <li>파형 분석과 FFT 결과 비교</li>
  </ul>

</div>

</div>

<div class="mt-6 p-4 border rounded-xl text-center text-lg">

  [스마트폰 수집] ➔ [CSV 추출] ➔ [Colab 업로드] ➔ [파이썬 시각화·FFT 분석]

</div>

<!--
스마트폰 앱에서 측정한 데이터를 CSV 파일로 저장한 뒤 Colab으로 가져옵니다.
Colab에서는 파형을 그래프로 나타내고 FFT를 이용해 주파수 성분을 분석합니다.
이 과정을 통해 측정, 전송, 분석의 전체 흐름을 확인할 수 있습니다.
-->

---
layout: default
---

# Summary & Next Steps

<div class="grid grid-cols-2 gap-8 mt-8">

  <div class="p-6 border rounded-xl">

  <h3>✅ 이번 섹션의 핵심</h3>

  <div class="text-xl leading-relaxed mt-4">
    데이터 수집<br />
    ➔ CSV 전송<br />
    ➔ Colab 업로드<br />
    ➔ 파이썬 분석
  </div>

  </div>

  <div class="p-6 border rounded-xl">

  <h3>➡️ 다음 단계</h3>

  <ul class="mt-4">
    <li>스피커와 마이크의 작동 원리</li>
    <li>소리의 3요소</li>
    <li>맥놀이와 파동의 간섭</li>
    <li>푸리에 변환과 주파수 분석</li>
  </ul>

  </div>

</div>

<!--
이번 섹션에서는 소리를 측정하고, 데이터를 파일로 전송한 뒤,
Colab에서 분석하는 전체 파이프라인을 확인했습니다.
다음 섹션에서는 스피커와 마이크의 원리부터 소리의 3요소,
맥놀이와 푸리에 변환까지 관련 이론을 학습합니다.
-->