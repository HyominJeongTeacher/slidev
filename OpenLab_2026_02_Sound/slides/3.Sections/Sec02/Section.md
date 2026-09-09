---
layout: default
math: true
---

# 소리 과학의 핵심 이론적 원리

<div class="text-2xl mt-8 text-blue-600 font-semibold">Section 2</div>

---
layout: default
---

# 목차

<ul class="list-disc pl-8 space-y-4 text-2xl text-left">
  <li>01. 음파의 발생과 변환</li>
  <li>02. 소리의 3요소 &amp; 중첩</li>
  <li>03. 맥놀이 &amp; 푸리에 변환</li>
</ul>

---
layout: default
---

# 2-1. 음파의 발생과 변환 원리

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-2xl font-bold mb-3">🔊 스피커</h3>
    <ul class="list-disc pl-6 space-y-2 text-xl">
      <li>전기 신호가 코일에 흐름</li>
      <li>영구자석과의 상호작용으로 진동판이 움직임</li>
      <li>공기의 압력 변화를 만들어 음파 발생</li>
    </ul>
    <p class="mt-4 text-lg text-blue-700">전기 신호 → 기계적 진동 → 음파</p>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-2xl font-bold mb-3">🎙️ 마이크로폰</h3>
    <ul class="list-disc pl-6 space-y-2 text-xl">
      <li>음파가 진동판을 흔듦</li>
      <li>코일이 자석 주변에서 움직이며 유도 전압 발생</li>
      <li>공기 압력 변화가 전기 신호로 변환</li>
    </ul>
    <p class="mt-4 text-lg text-green-700">음파 → 기계적 진동 → 전기 신호</p>
  </div>
</div>

<div class="mt-8 p-4 rounded-xl bg-gray-100 text-xl text-center">
  <strong>핵심:</strong> 스피커는 전기 신호를 음파로 바꾸며, 다이내믹 마이크는 그 반대 과정을 이용한다.
</div>

---
layout: default
math: true
---

# 2-2. 소리의 3요소와 파동의 중첩

<div class="grid grid-cols-3 gap-6 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-2xl font-bold mb-3">크기</h3>
    <p class="mt-2 text-lg">음압 진폭이 클수록 일반적으로 크게 들림</p>
    <p class="text-lg text-blue-700">음압: Pa / 음압레벨: dB</p>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-2xl font-bold mb-3">높낮이</h3>
    <p class="mt-2 text-lg">진동수에 비례</p>
    <p class="text-lg text-blue-700">단위: Hz</p>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-2xl font-bold mb-3">음색</h3>
    <p class="mt-2 text-lg">파형의 형태</p>
    <p class="text-lg text-blue-700">정현파 vs 복합파</p>
  </div>
</div>

<div class="mt-8 p-4 border rounded-xl text-left">
  <h3 class="text-2xl font-bold mb-3">파동의 중첩 원리</h3>
  <p class="text-xl">둘 이상의 파동이 만날 때 변위는 각각의 변위의 합으로 나타난다.</p>

  $$
  y = y_1 + y_2
  $$

  <p class="mt-3 text-lg">중첩 후에도 각 파동은 원래의 특성을 유지하며 진행한다.</p>
</div>

---
layout: default
---

# 2-3. 맥놀이 현상과 푸리에 변환

### 맥놀이
- 진동수가 조금 다른 두 소리가 만나면
- 소리의 크기가 주기적으로 커졌다 작아짐
- 주기적인 세기 변화가 발생

$$
f_{beat} = |f_1 - f_2|
$$

### 푸리에 변환
- 시간 영역: 시간에 따른 복합파형
- 주파수 영역: 각 성분의 주파수와 진폭
- 복합파를 정현파 성분으로 분해

> 실제 악기 소리의 기본음과 조화음을 분석하는 핵심 도구

### 핵심 포인트
맥놀이 파형은 고주파 반송파 위에 낮은 주파수의 포락선(envelope)이 감싸는 형태로 나타난다.

---
layout: default
---

# Summary & Next Steps

<ul class="list-disc pl-8 space-y-4 text-2xl text-left">
  <li>전자기적 변환: 스피커와 마이크의 작동 원리 이해</li>
  <li>소리의 3요소: 크기, 높낮이, 음색</li>
  <li>파동의 중첩: $y = y_1 + y_2$</li>
  <li>맥놀이와 푸리에 변환: 주파수 분석의 기초</li>
</ul>

<div class="mt-8 p-5 border rounded-xl text-xl text-left bg-gray-100">
  <strong>다음 단계:</strong> 측정 조건과 CSV 형식을 확인한 뒤 Google Colab에서 파형 시각화와 FFT 분석을 수행한다.
</div>

<div class="mt-6 text-center text-2xl font-bold text-blue-700">
  섹션 3에서 실제 데이터 분석 실습으로 이어집니다.
</div>

---