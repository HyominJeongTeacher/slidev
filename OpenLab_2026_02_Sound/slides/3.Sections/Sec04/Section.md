---
layout: default
math: true
---

# 확장 탐구, 수업 적용 및 학생 피드백

<div class="text-2xl mt-8 text-blue-600 font-semibold">Section 4</div>

---
layout: default
---

# 4-1. 확장 탐구: 화음과 음색 비교

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">탐구 과제</h3>
    <ol class="list-decimal pl-6 space-y-2 text-base">
      <li>단일음과 화음의 소리를 각각 기록</li>
      <li>동일한 분석 구간으로 FFT 수행</li>
      <li>기본음과 고조파 피크를 비교</li>
      <li>파형과 스펙트럼 차이를 근거로 해석</li>
    </ol>
  </div>
  <div class="p-4 border rounded-xl">
    <h3 class="text-xl font-bold mb-3">예상 관찰</h3>
    <ul class="list-disc pl-6 space-y-2 text-base">
      <li>옥타브: 진동수 비가 $1:2$</li>
      <li>C 화음: 약 261 Hz, 329 Hz, 392 Hz 피크</li>
      <li>악기마다 고조파의 상대적 세기가 달라 음색 차이 발생</li>
    </ul>
  </div>
</div>

---
layout: default
---

# 4-2. 확장 탐구: 샘플링과 에일리어싱

- 샘플링레이트: 아날로그 신호를 디지털 데이터로 기록하는 초당 횟수
- 나이퀴스트 조건: 분석하려는 최고 주파수 $f_{max}$에 대해 $f_s \geq 2f_{max}$
- 비교 실험: 같은 기준음을 높은 샘플링레이트와 낮은 샘플링레이트로 각각 기록
- 관찰 질문: 낮은 샘플링레이트에서 파형과 FFT 피크는 어떻게 달라지는가?

> 측정 전에 샘플링레이트를 기록하고, 결과 해석 시 반드시 함께 제시한다.

---
layout: default
---

# 4-3. 학생 활동과 평가 기준

| 평가 요소 | 확인할 학생 산출물 |
| --- | --- |
| 측정 설계 | 음원, 거리, 샘플링레이트와 변인을 기록했는가? |
| 데이터 처리 | CSV를 불러오고 시간 영역 파형을 제시했는가? |
| 분석 | 피팅 또는 FFT 결과에서 근거가 되는 값을 찾았는가? |
| 해석 | 그래프와 물리 개념을 연결해 자신의 언어로 설명했는가? |

<div class="mt-8 p-5 border rounded-xl text-base text-left bg-gray-100">
  <strong>피드백 원칙:</strong> 그래프만 제출한 경우에는 측정 조건과 해석 문장을 보완하도록 안내한다.
  Brisk Teaching과 NotebookLM은 교사의 검토를 돕는 보조 도구로만 활용한다.
</div>

---
layout: default
---

# 교사용 수업 적용 체크리스트

- 장비와 연결 방식, 음원 설정, 측정 조건을 수업 전에 점검한다.
- 예제 CSV와 Colab 노트북이 학생 계정에서 열리는지 확인한다.
- 측정 실패 조는 예제 CSV로 분석 활동을 계속할 수 있게 한다.
- 활동지에는 예측 → 측정 → 그래프 → 해석의 순서를 유지한다.
- 실제 Google Classroom 사례, 학생 제출물과 피드백 예시는 추후 링크로 함께 제공한다.
