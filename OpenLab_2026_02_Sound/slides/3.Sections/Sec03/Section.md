---
layout: default
math: true
---

# Google Colab 기반 소리 데이터 분석 실습

<div class="text-2xl mt-8 text-blue-600 font-semibold">Section 3</div>

---
layout: default
---

# 목차

<ul class="list-disc pl-8 space-y-4 text-2xl text-left">
  <li>01. 데이터 전처리 &amp; 시각화</li>
  <li>02. 파형 피팅 &amp; 물리량 추출</li>
  <li>03. FFT 주파수 분석 &amp; 스펙트로그램</li>
</ul>

---
layout: default
---

# 실습 준비: 배포 자료와 실행 순서

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">사전에 받을 자료</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>예제 CSV 파일 1개</li>
      <li>실습용 Google Colab 노트북 1개</li>
      <li>학생 활동지와 결과 예시</li>
      <li>측정 조건 기록표</li>
    </ul>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">실행 순서</h3>
    <ol class="list-decimal pl-6 space-y-2 text-base">
      <li>CSV 업로드 및 열 이름 확인</li>
      <li>시간 영역 파형과 확대 구간 확인</li>
      <li>사인파 피팅으로 진폭과 진동수 추출</li>
      <li>FFT와 스펙트로그램으로 주파수 성분 해석</li>
    </ol>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl bg-gray-100 text-base text-center">
  <strong>실습 규약:</strong> 배포 예제는 <code>time_s</code>(초), <code>signal</code>(음압 또는 전압) 두 열을 사용한다.
</div>

---
layout: default
---

# 3-1. CSV 데이터 로드 및 음파 시각화

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">데이터 업로드</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>Vernier 센서 또는 배포 예제에서 CSV 파일 준비</li>
      <li>Colab에 업로드하여 데이터프레임으로 변환</li>
      <li>DC 오프셋 제거 및 불필요한 열 정리</li>
    </ul>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">시간 영역 시각화</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>시간(s) - 음압 또는 전압 그래프 작성</li>
      <li>matplotlib.pyplot 사용</li>
      <li>특정 시간 구간 확대를 통해 파형 확인</li>
    </ul>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl bg-gray-100 text-base text-center">
  <strong>확인:</strong> 파일 열 이름, 단위, 샘플링레이트를 기록한 뒤 시간 영역 그래프를 먼저 확인한다.
</div>

---
layout: default
---

# 3-2. 음파 데이터 피팅 및 진동수 추출

<div class="mt-4 p-4 border rounded-xl text-left">
  <h3 class="text-xl font-bold mb-3">비선형 최적화(Curve Fitting)</h3>
  <p class="text-base">수집된 파형 데이터를 다음의 수학적 사인 함수로 피팅한다.</p>

  $$
y = A \sin(2\pi f t + \phi) + C
  $$

  <p class="text-base mt-3">이 과정에서 진폭 $A$, 진동수 $f$, 위상 $\phi$, 오프셋 $C$를 추정한다.</p>
</div>

<div class="grid grid-cols-3 gap-6 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-lg font-bold mb-2">진폭 $A$</h3>
    <p class="text-base">소리의 크기(세기) 추정</p>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-lg font-bold mb-2">진동수 $f$</h3>
    <p class="text-base">실제 음의 주파수 계산</p>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-lg font-bold mb-2">오차 분석</h3>
    <p class="text-base">기준 소리(예: 440 Hz)와 비교</p>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl bg-blue-50 text-base text-center">
  <strong>실습 목표:</strong> 실제 소리 데이터를 바탕으로 파형을 맞추고, 물리량을 정밀하게 추출한다.
</div>

---
layout: default
---

# 3-3. 푸리에 변환(FFT) 및 주파수 분석

<div class="mt-4 p-4 border rounded-xl text-left">
  <h3 class="text-xl font-bold mb-3">고속 푸리에 변환(FFT)</h3>
  <p class="text-base">복합파를 구성하는 각 주파수 성분을 시간 영역에서 주파수 영역으로 변환한다.</p>

  $$
  X[k] = \sum_{n=0}^{N-1} x[n] e^{-j 2\pi kn/N}
  $$
</div>

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">기본음과 조화음</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>기본음(Fundamental Frequency) 탐색</li>
      <li>고조파(Harmonics) 성분 확인</li>
      <li>악기별 음색 차이 분석</li>
    </ul>
  </div>

  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">스펙트로그램</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>시간에 따른 주파수 변화 표시</li>
      <li>librosa 또는 scipy.signal 사용</li>
      <li>시간-주파수 2차원 분석</li>
    </ul>
  </div>
</div>

<div class="mt-6 p-4 rounded-xl bg-gray-100 text-base text-center">
  <strong>핵심:</strong> 복합파를 여러 정현파 성분으로 분해하여 음색과 주파수 구조를 이해한다.
</div>

---
layout: default
---

# 실습 결과 확인과 문제 해결

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">예상 결과</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>440 Hz 기준음: 시간 그래프에서 규칙적인 주기 확인</li>
      <li>피팅: 추정 진동수가 기준값에 근접</li>
      <li>FFT: 기본음 부근에 가장 큰 피크 확인</li>
    </ul>
  </div>
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">자주 발생하는 문제</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>열 이름 오류: 배포 템플릿의 헤더와 일치시키기</li>
      <li>피팅 실패: 분석 구간을 짧게 하고 초기값을 조정</li>
      <li>FFT 피크 이상: 샘플링레이트와 음원 설정을 다시 확인</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Summary & Next Steps

<ul class="list-disc pl-8 space-y-4 text-xl text-left">
  <li>데이터 수집 → 시각화 → Curve Fitting → FFT 분석</li>
  <li>진폭, 진동수, 기본음, 조화음을 직접 추출</li>
  <li>음악과 소리의 물리적 특성을 데이터로 확인</li>
  <li>예제 CSV와 Colab 노트북으로 다른 음원에도 같은 분석 절차 적용</li>
</ul>

<div class="mt-8 p-5 border rounded-xl text-base text-left bg-gray-100">
  <strong>마무리:</strong> 실제 소리 데이터를 분석해 악기별 음색과 물리량을 비교하고, 탐구 주제를 확장한다.
</div>

---