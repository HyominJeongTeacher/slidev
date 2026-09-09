---
theme: default
title: 영재선발 과정의 타당성 및 상관관계 분석 보고
info: 2026학년도 성적 추이 및 2027학년도 전형 단계 간 예측 타당성 분석
class: text-center
transition: slide-left
mdc: true
---

# 영재선발 과정의 타당성 및 상관관계 분석

데이터 기반 평가 도구의 유효성 검증

<!--
발표자 노트: 본 발표는 영재선발 과정에서 사용된 평가 도구(선발시험, 전형 단계)가
실제로 학생의 학업 성취도를 예측하는 데 통계적·실질적으로 타당한지를
데이터 기반으로 검증하는 것을 목적으로 합니다.
-->

---

# 목차

- **1부.** 2027학년도 문항 분석
  - 1-1. 영재성검사1 수학
  - 1-2. 영재성검사1 과학
  - 1-3. 영재성검사2
- **2부.** 신입생 선발 도구 분석
  - 2-1. 2026학년도 신입생 선발 및 입학 후 성적 상관관계 분석
  - 2-2. 2027학년도 신입생 선발 전형 단계 간 타당성 분석

<!--
발표자 노트: 오늘 발표는 크게 두 부분으로 구성됩니다.
1부에서는 2027학년도 선발 문항의 난이도와 변별도를 분석하고,
2부에서는 2-1(2026학년도 신입생 선발시험 성적과 입학 후 1학기 성적 간의 상관관계)과
2-2(2027학년도 신입생 선발 전형 단계 간 상호 타당성)를 차례로 검토합니다.
-->

---
layout: section
---

# 1부. 2027학년도 신입생 선발 문항 분석

난이도와 변별도 분석

<!--
발표자 노트: 1부에서는 2027학년도 신입생 선발에 사용된 문항들의
난이도와 변별도를 분석하여 문항의 적절성과 변별력을 검토합니다.
-->

---

# 난이도와 변별도 정의

## 난이도 (Difficulty Index)

- 응시자 평균 점수를 문항 배점으로 나누어 계산
- $P = \dfrac{평균 \ 점수}{배점}$
- 값이 낮을수록 어려운 문항, 높을수록 쉬운 문항

<!--
발표자 노트: 난이도는 문항이 얼마나 쉽거나 어려운지를 나타내는 지표입니다.
객관식(정답/오답) 문항에서는 정답자수/응시자수와 수학적으로 동일하며,
서답형/부분점수 문항에도 그대로 적용되는 일반화된 공식입니다.
값이 낮을수록 어려운 문항, 높을수록 쉬운 문항으로 해석합니다.
-->

---

# 난이도와 변별도 정의

<div class="grid grid-cols-2 gap-4">
<div>

## 변별도 (Discrimination Index)

- 상위 27% 집단과 하위 27% 집단의 평균 점수 차이를 배점으로 나누어 계산
- $D = \dfrac{평균_{상위27\%} - 평균_{하위27\%}}{배점}$
- 상·하위 27%는 정규분포 가정 하에 판별력과 표본 신뢰도를 동시에
  최적화하는 비율로, <a href="https://doi.org/10.1037/h0057123" target="_blank">Kelley(1939)</a>의 연구에 근거함
- 값이 높을수록 상/하위권을 잘 구분하는 문항

</div>
<div>

| 변별도 수준 | 판정 |
|---|---|
| D < 0.20 | Poor (부적절, 제거/수정 검토) |
| 0.20 ~ 0.29 | Fair (보통, 개선 필요) |
| 0.30 ~ 0.39 | Good (양호) |
| D ≥ 0.40 | Excellent (우수) |

<p class="text-sm opacity-60">출처: Ebel, R. L., & Frisbie, D. A. (1991). <i>Essentials of Educational Measurement</i> (5th ed.). Prentice-Hall. <a href="https://openlibrary.org/works/OL4471505W" target="_blank">[링크]</a></p>
<p class="text-xs opacity-50">보조 참고: <a href="https://metricgate.com/docs/discrimination-index-item-analysis/" target="_blank">MetricGate, Discrimination Index (Item Analysis)</a></p>

</div>
</div>

<!--
발표자 노트: 변별도는 상위 27%와 하위 27% 응시자를 얼마나 잘 구분하는지를
나타냅니다. 27% 기준은 Kelley(1939)의 최적화 연구에서, 변별도 판정 기준은
Ebel & Frisbie(1991)에서 가져왔습니다.
-->

---

# 1-1. 영재성검사1 수학

<script setup>
const items11 = [
  { label: '1번', p: 0.83, d: 0.17 },
  { label: '2번', p: 0.8, d: 0.2 },
  { label: '3번', p: 0.8, d: 0.2 },
  { label: '4번', p: 0.27, d: 0.18 },
  { label: '5번', p: 0.46, d: 0.51 },
  { label: '6번', p: 0.38, d: 0.72 },
  { label: '7번', p: 0.4, d: 0.63 },
  { label: '8번', p: 0.44, d: 0.43 },
]

function histogram(values, binSize = 0.1) {
  const bins = []
  for (let b = 0; b < 1 - 1e-9; b += binSize) {
    const lo = +b.toFixed(2)
    const hi = +(b + binSize).toFixed(2)
    const count = values.filter(v => v >= lo && (hi >= 1 ? v <= hi : v < hi)).length
    bins.push({ label: lo.toFixed(1), count })
  }
  return bins
}

const pBins = histogram(items11.map(i => i.p))
const dBins = histogram(items11.map(i => i.d))
const maxCount = Math.max(...pBins.map(b => b.count), ...dBins.map(b => b.count))
</script>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

**난이도(P) 분포 (문항 수 {{ items11.length }}개)**

<div class="flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in pBins" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full bg-blue-400" :style="{ height: (bin.count / maxCount * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>

</div>
<div>

**변별도(D) 분포 (문항 수 {{ items11.length }}개)**

<div class="relative flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in dBins" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full" :class="Number(bin.label) >= 0.3 ? 'bg-green-400' : 'bg-orange-400'" :style="{ height: (bin.count / maxCount * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>
<p class="text-xs opacity-60 mt-2">초록 = D ≥ 0.30 (양호 기준 이상)</p>

</div>
</div>

<!--
발표자 노트: 문항별 원자료(items11)를 0.1 단위 구간으로 나눈 도수분포
히스토그램입니다. 막대 높이는 각 구간에 속하는 문항 수를 나타냅니다.
-->

---

# 1-2. 영재성검사1 과학

<script setup>
const items12 = [
  { label: '1번', p: 0.67, d: 0.21 },
  { label: '2번', p: 0.94, d: 0.06 },
  { label: '3번', p: 0.67, d: 0.33 },
  { label: '4번', p: 0.82, d: 0.18 },
  { label: '5번', p: 0.87, d: 0.13 },
  { label: '6번', p: 0.71, d: 0.29 },
  { label: '7번', p: 0.47, d: 0.53 },
  { label: '8번', p: 0.72, d: 0.28 },
  { label: '9번', p: 0.53, d: 0.47 },
  { label: '10번', p: 0.75, d: 0.25 },
  { label: '11번', p: 0.44, d: 0.37 },
  { label: '12번', p: 0.78, d: 0.22 },
  { label: '13번', p: 0.65, d: 0.26 },
  { label: '14번', p: 0.56, d: 0.44 },
  { label: '15번', p: 0.31, d: 0.14 },
  { label: '16번', p: 0.67, d: 0.33 },
  { label: '17번', p: 0.77, d: 0.27 },
  { label: '18번', p: 0.67, d: 0.31 },
  { label: '19번', p: 0.46, d: 0.35 },
  { label: '20번', p: 0.71, d: 0.24 },
]

function histogram12(values, binSize = 0.1) {
  const bins = []
  for (let b = 0; b < 1 - 1e-9; b += binSize) {
    const lo = +b.toFixed(2)
    const hi = +(b + binSize).toFixed(2)
    const count = values.filter(v => v >= lo && (hi >= 1 ? v <= hi : v < hi)).length
    bins.push({ label: lo.toFixed(1), count })
  }
  return bins
}

const pBins12 = histogram12(items12.map(i => i.p))
const dBins12 = histogram12(items12.map(i => i.d))
const maxCount12 = Math.max(...pBins12.map(b => b.count), ...dBins12.map(b => b.count))
</script>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

**난이도(P) 분포 (문항 수 {{ items12.length }}개)**

<div class="flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in pBins12" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full bg-blue-400" :style="{ height: (bin.count / maxCount12 * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>

</div>
<div>

**변별도(D) 분포 (문항 수 {{ items12.length }}개)**

<div class="relative flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in dBins12" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full" :class="Number(bin.label) >= 0.3 ? 'bg-green-400' : 'bg-orange-400'" :style="{ height: (bin.count / maxCount12 * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>
<p class="text-xs opacity-60 mt-2">초록 = D ≥ 0.30 (양호 기준 이상)</p>

</div>
</div>

<!--
발표자 노트: 영재성검사1 과학 문항별 원자료(items12)를 0.1 단위 구간으로
나눈 도수분포 히스토그램입니다. 실제 데이터로 교체해야 합니다.
-->

---

# 1-3. 영재성검사2

<script setup>
const items13 = [
  { label: '1번', p: 0.26, d: 0.59 },
  { label: '2번', p: 0.69, d: 0.31 },
  { label: '3번', p: 0.42, d: 0.21 },
  { label: '4번', p: 0.35, d: 0.56 },
  { label: '5번', p: 0.41, d: 0.52 },
  { label: '6번', p: 0.41, d: 0.34 },
  { label: '7번', p: 0.95, d: 0.05 },
  { label: '8번', p: 0.87, d: 0.13 },
  { label: '9번', p: 0.17, d: 0.17 },
  { label: '10번', p: 0.46, d: 0.19 },
  { label: '11번', p: 0.79, d: 0.21 },
  { label: '12번', p: 0.56, d: 0.44 },
  { label: '13번', p: 0.69, d: 0.31 },
  { label: '14번', p: 0.23, d: 0.87 },
  { label: '15번', p: 0.49, d: 0.44 },
  { label: '16번', p: 0.38, d: 0.62 },
  { label: '17번', p: 0.42, d: 0.5 },
  { label: '18번', p: 0.58, d: 0.42 },
  { label: '19번', p: 0.16, d: 0.16 },
  { label: '20번', p: 0.29, d: 0.94 },
]

function histogram13(values, binSize = 0.1) {
  const bins = []
  for (let b = 0; b < 1 - 1e-9; b += binSize) {
    const lo = +b.toFixed(2)
    const hi = +(b + binSize).toFixed(2)
    const count = values.filter(v => v >= lo && (hi >= 1 ? v <= hi : v < hi)).length
    bins.push({ label: lo.toFixed(1), count })
  }
  return bins
}

const pBins13 = histogram13(items13.map(i => i.p))
const dBins13 = histogram13(items13.map(i => i.d))
const maxCount13 = Math.max(...pBins13.map(b => b.count), ...dBins13.map(b => b.count))
</script>

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

**난이도(P) 분포 (문항 수 {{ items13.length }}개)**

<div class="flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in pBins13" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full bg-blue-400" :style="{ height: (bin.count / maxCount13 * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>

</div>
<div>

**변별도(D) 분포 (문항 수 {{ items13.length }}개)**

<div class="relative flex items-end justify-around gap-1 h-40 border-b border-gray-400">
<div v-for="bin in dBins13" :key="bin.label" class="flex flex-col items-center gap-1 h-full justify-end w-6">
<div class="text-xs">{{ bin.count || '' }}</div>
<div class="w-full" :class="Number(bin.label) >= 0.3 ? 'bg-green-400' : 'bg-orange-400'" :style="{ height: (bin.count / maxCount13 * 100) + '%' }"></div>
<div class="text-xs origin-top-left -rotate-45 whitespace-nowrap">{{ bin.label }}</div>
</div>
</div>
<p class="text-xs opacity-60 mt-2">초록 = D ≥ 0.30 (양호 기준 이상)</p>

</div>
</div>

<!--
발표자 노트: 영재성검사2 문항별 원자료(items13)를 0.1 단위 구간으로
나눈 도수분포 히스토그램입니다. 실제 데이터로 교체해야 합니다.
-->

---
layout: section
---

# 2부. 신입생 선발 도구 분석

2026학년도 성적 상관관계 및 2027학년도 전형 단계 간 타당성

<!--
발표자 노트: 2부에서는 신입생 선발 도구를 두 가지 측면에서 분석합니다.
2-1에서는 2026학년도 선발시험 성적과 입학 후 1학기 성적 간의 상관관계를,
2-2에서는 2027학년도 선발 전형 단계 간 상호 타당성을 검토합니다.
-->

---
layout: section
---

# 2-1. 2026학년도 신입생 선발 분석

선발 점수 vs 1학년 1학기 성적

<!--
발표자 노트: 2-1에서는 2026학년도에 입학한 신입생을 대상으로,
선발 과정에서 획득한 2차 선발시험 점수가 입학 후 1학기 실제 성적을
얼마나 잘 예측했는지를 분석합니다.
-->

---

# 2-1 분석 개요 & 핵심 지표

<div class="grid grid-cols-2 gap-4">
<div>

## 분석 목적

- 2026학년도 영재성검사 선발 도구
  (서류평가, 영재성검사1(수학/과학), 영재성검사2) 점수가 입학 후 학업 성취도의
  **의미 있는 예측 지표**로 기능하는지 데이터로 검증
- 선발 도구가 갖는 **예측 타당도**(Predictive Validity)를
  객관적 수치로 확인하여 선발 체계의 신뢰성 확보
- 분석 결과를 향후 선발 기준 정교화의 실증적 근거로 활용

</div>
<div>

## 핵심 지표

- **R (상관계수)**: 두 변수 간 선형 관계의 강도와 방향
- **R² (결정계수)**: 독립변수가 종속변수를 설명하는 비율(설명력)

| 상관관계 수준 | \|R\| | R² |
|---|---|---|
| 약한 상관관계 | 0.1 ~ 0.3 | 0.01 ~ 0.09 |
| 보통 수준의 상관관계 | 0.3 ~ 0.5 | 0.10 ~ 0.24 |
| 강한 상관관계 | 0.5 이상 | 0.25 이상 |

<p class="text-sm opacity-60">출처: Cohen, J. (1992). <i>Statistical Power Analysis for the Behavioral Sciences</i>. <a href="https://utstat.toronto.edu/~brunner/oldclass/378f16/readings/CohenPower.pdf" target="_blank">[링크]</a></p>

</div>
</div>

<!--
발표자 노트: 이번 슬라이드에서는 분석에 사용할 핵심 통계 지표를 먼저 소개합니다.
R은 상관관계의 방향과 세기를, R²는 실질적인 설명력을 나타냅니다.
두 지표를 함께 봐야 오해 없이 해석할 수 있습니다.
표에 제시된 기준은 Cohen(1992)의 효과크기 구분을 참고한 것으로,
뒤에 나올 실제 분석 결과를 해석하는 잣대로 활용됩니다.
-->

---

# 주요 상관관계 분석 결과

<script setup>
import csvRaw from './data/2-1-correlations.csv?raw'
import { parseCSV, buildDataset } from './utils/stats.js'

// CSV 열: student, doc_total, mock1_math, mock1_sci, mock2, avg_grade, math_grade, sci_grade
const rows = parseCSV(csvRaw)

const ds1 = buildDataset('서류 총합 vs 수과정 평균', rows.map(r => r.doc_total), rows.map(r => r.avg_grade))
const ds2 = buildDataset('영검1(수학) vs 수학 성적', rows.map(r => r.mock1_math), rows.map(r => r.math_grade))
const ds3 = buildDataset('영검1(과학) vs 과학 성적', rows.map(r => r.mock1_sci), rows.map(r => r.sci_grade))
const ds4 = buildDataset('영검2 vs 수과정 평균', rows.map(r => r.mock2), rows.map(r => r.avg_grade))
</script>

선발 도구 점수 vs 1학기 성적

| 선발 도구 | 1학기 성적 | R | R² |
|---|---|---|---|
| 서류 총합 | 수과정 평균 | {{ ds1.r.toFixed(2) }} | {{ ds1.r2.toFixed(2) }} |
| 영검1(수학) | 수학 성적 | {{ ds2.r.toFixed(2) }} | {{ ds2.r2.toFixed(2) }} |
| 영검1(과학) | 과학 성적(물화생지 평균) | {{ ds3.r.toFixed(2) }} | {{ ds3.r2.toFixed(2) }} |
| 영검2 성적 | 수과정 평균 | {{ ds4.r.toFixed(2) }} | {{ ds4.r2.toFixed(2) }} |

> R² ≥ 0.10인 항목은 **보통 수준의 상관관계**(실질적 의미가 있는 설명력)로 해석합니다. (Cohen, 1992)

<!--
발표자 노트: datasets 배열의 x(선발 도구 점수), y(1학기 성적) 원자료를
실제 데이터로 교체하면 R, R²가 자동으로 재계산됩니다. 각 관계의 산점도/회귀선은
다음 슬라이드들에서 확인합니다. R²가 0.10 이상인 경우에는 '보통 수준의 상관관계'
또는 '실질적 의미가 있는 설명력'으로 표현하여 해석합니다. 기준은 Cohen(1992)의
효과크기 구분을 따릅니다.
-->

---

# 서류 총합 vs 수과정 평균

<script setup>
import csvRaw1 from './data/2-1-correlations.csv?raw'
import { parseCSV as parseCSV1, buildDataset as buildDataset1 } from './utils/stats.js'

const rowsD1 = parseCSV1(csvRaw1)
const dsDoc = buildDataset1('서류 총합 vs 수과정 평균', rowsD1.map(r => r.doc_total), rowsD1.map(r => r.avg_grade))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsDoc.r.toFixed(3) }}
- **R²** = {{ dsDoc.r2.toFixed(3) }}
- 표본 수 = {{ dsDoc.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsDoc.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsDoc.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsDoc.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsDoc.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsDoc.line.x1" :y1="dsDoc.line.y1" :x2="dsDoc.line.x2" :y2="dsDoc.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsDoc.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">선발 도구 점수 →</div>
</div>
</div>

<!--
발표자 노트: 서류 총합 점수와 1학기 수과정 평균 성적 간의 산점도와 회귀선입니다.
data/2-1-correlations.csv의 doc_total, avg_grade 열을 실제 데이터로 교체하면
자동으로 갱신됩니다.
-->

---

# 영검1(수학) vs 수학 성적

<script setup>
import csvRaw2 from './data/2-1-correlations.csv?raw'
import { parseCSV as parseCSV2, buildDataset as buildDataset2 } from './utils/stats.js'

const rowsD2 = parseCSV2(csvRaw2)
const dsMath = buildDataset2('영검1(수학) vs 수학 성적', rowsD2.map(r => r.mock1_math), rowsD2.map(r => r.math_grade))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsMath.r.toFixed(3) }}
- **R²** = {{ dsMath.r2.toFixed(3) }}
- 표본 수 = {{ dsMath.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsMath.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsMath.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsMath.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsMath.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsMath.line.x1" :y1="dsMath.line.y1" :x2="dsMath.line.x2" :y2="dsMath.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsMath.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">선발 도구 점수 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사1(수학) 점수와 1학기 수학 성적 간의 산점도와 회귀선입니다.
data/2-1-correlations.csv의 mock1_math, math_grade 열을 실제 데이터로 교체하면
자동으로 갱신됩니다.
-->

---

# 영검1(과학) vs 과학 성적

<script setup>
import csvRaw3 from './data/2-1-correlations.csv?raw'
import { parseCSV as parseCSV3, buildDataset as buildDataset3 } from './utils/stats.js'

const rowsD3 = parseCSV3(csvRaw3)
const dsSci = buildDataset3('영검1(과학) vs 과학 성적', rowsD3.map(r => r.mock1_sci), rowsD3.map(r => r.sci_grade))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsSci.r.toFixed(3) }}
- **R²** = {{ dsSci.r2.toFixed(3) }}
- 표본 수 = {{ dsSci.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsSci.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsSci.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsSci.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsSci.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsSci.line.x1" :y1="dsSci.line.y1" :x2="dsSci.line.x2" :y2="dsSci.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsSci.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">선발 도구 점수 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사1(과학) 점수와 1학기 과학 성적(물화생지 평균) 간의
산점도와 회귀선입니다. data/2-1-correlations.csv의 mock1_sci, sci_grade
열을 실제 데이터로 교체하면 자동으로 갱신됩니다.
-->

---

# 영검2 vs 수과정 평균

<script setup>
import csvRaw4 from './data/2-1-correlations.csv?raw'
import { parseCSV as parseCSV4, buildDataset as buildDataset4 } from './utils/stats.js'

const rowsD4 = parseCSV4(csvRaw4)
const dsMock2 = buildDataset4('영검2 vs 수과정 평균', rowsD4.map(r => r.mock2), rowsD4.map(r => r.avg_grade))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsMock2.r.toFixed(3) }}
- **R²** = {{ dsMock2.r2.toFixed(3) }}
- 표본 수 = {{ dsMock2.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsMock2.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsMock2.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsMock2.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsMock2.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsMock2.line.x1" :y1="dsMock2.line.y1" :x2="dsMock2.line.x2" :y2="dsMock2.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsMock2.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">선발 도구 점수 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사2 점수와 1학기 수과정 평균 성적 간의 산점도와
회귀선입니다. data/2-1-correlations.csv의 mock2, avg_grade 열을 실제
데이터로 교체하면 자동으로 갱신됩니다.
-->

---

# 2-1 결론 및 시사점

- 서류평가 결과(정성, 정량 총합)는 R ~ 0.126으로 보통 수준의 상관관계를 가짐.
<br> <span class="text-sm opacity-60">※ 정성&gt;정량, 세부 데이터 참조</span>
- 2단계 (영재성검사1, 2) 는 **R > 0.3 수준**의 설명력을 보여, 상당한 수준의 상관관계를 보여줌.
- 즉, 현재의 선발 도구는 입학 후 학업 성취도를 **일정 수준 예측하는 타당성**을
  갖추고 있는 것으로 판단됨
<br> <span class="text-sm opacity-60">※ 추천관찰전형과 수학, 정보 상관관계는 매우 높게 나타남, 표본 6명으로 생략, 세부 데이터 참조</span>
- 전체적으로 선발도구로서 역할을 잘 한것으로 보이지만, 학업 성취도 외에도
  R&E, 탐구심, 자율성 등 영재성을 드러내는 다른 영역과의 상관관계도
  함께 고려하는 것이 필요함

<!--
발표자 노트: 2-1의 결론은 '선발 도구가 어느 정도 예측력을 갖는다'는 것이지
'완벽하게 성적을 예측한다'는 것이 아닙니다. R²를 근거로 제시하여
과도한 해석을 경계하면서도 선발 도구의 실질적 유효성을 설명해야 합니다.
-->

---

# 타당성 입증 근거

<div class="grid grid-cols-2 gap-4">
<div>

## 판단 기준

- **Cohen(1992)의 효과크기 기준**: $R^2 \ge 0.10$은
  실질적 의미가 있는 설명력을 가진 것으로 간주
- **미국 SAT 표준화 시험 사례**: 대입 성적 예측에서
  $r \approx 0.5$, $R^2 \approx 0.25$ 수준으로 보고됨

</div>
<div>

## 본 분석과의 대조

- 본 선발 도구와 1학기 성적 간 상관관계($R^2 \approx$ [0.XX])는
  Cohen의 최소 기준($R^2 \ge 0.10$)을 상회
- SAT 사례($R^2 \approx 0.25$)와 비교했을 때
  **유사/다소 낮은** 수준의 설명력을 보임

</div>
</div>

> **설명력($R^2$)**이 충분히 확인될 때,
> 해당 선발 도구는 입학 후 성적을 예측하는 실질적
> 예측 타당성을 갖추고 있다고 뒷받침될 수 있습니다.

<!--
발표자 노트: 이 슬라이드가 타당성 논증의 핵심입니다. Cohen의 효과크기 기준과
SAT라는 국제적으로 검증된 표준화 시험 사례를 근거로 제시함으로써,
우리 선발 도구(2-1)의 R² 수치가 실질적으로 의미 있는 수준임을 객관적으로
뒷받침합니다.
-->

---
layout: section
---

# 2-2. 2027학년도 신입생 선발 분석

1차 · 2차 · 3차 전형 단계 간 비교

<!--
발표자 노트: 2-2에서는 아직 시행되지 않은 2027학년도 선발을 앞두고,
전형 단계 간의 상호 관계를 분석하여 각 단계가 독립적이고 타당한
평가 요소로 기능하는지를 검토합니다.
-->

---

# 2-2 분석 개요

<div class="grid grid-cols-2 gap-4">
<div>

## 전형 단계 구조

- **1단계 서류**: 정량 평가 + 정성 평가
- **2단계 지필**: 영재성검사1(수학 / 과학) / 영재성검사2
- **3단계 활동**: 면접 및 활동 기반 평가

</div>
<div>

## 분석 목적

- 각 전형 단계가 **서로 다른 역량**을 측정하는지,
  아니면 **중복된 역량**을 측정하는지 확인
- 전형 단계 간 상관관계를 통해 전형 설계의
  **독립성(Discriminant Validity)** 검토

</div>
</div>

<!--
발표자 노트: 2027학년도 선발은 1차 서류, 2차 지필, 3차 활동의
3단계 전형으로 구성됩니다. 이 슬라이드에서는 각 단계가 무엇을 평가하는지
소개하고, 다음 슬라이드부터 단계 간 상관관계 분석 결과를 다룹니다.
-->

---

# 전형 단계 간 상관관계 ($R^2$ 및 $r$ 해석)

<script setup>
import csvRaw22 from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSV22, buildDataset as buildDataset22 } from './utils/stats.js'

// CSV 열: student, doc_quant, doc_qual, test_math, test_sci, test_fusion, activity
const rows22 = parseCSV22(csvRaw22)

const dsMathFusion = buildDataset22('영재성검사1(수학) vs 영재성검사2', rows22.map(r => r.test_math), rows22.map(r => r.test_fusion))
const dsSciFusion = buildDataset22('영재성검사1(과학) vs 영재성검사2', rows22.map(r => r.test_sci), rows22.map(r => r.test_fusion))
const dsQuantPaper = buildDataset22('1단계 서류 정량 vs 영재성검사1총점', rows22.map(r => r.doc_quant), rows22.map(r => r.test_math + r.test_sci))
const dsQualActivity = buildDataset22('1단계 서류 정성 vs 3단계 활동', rows22.map(r => r.doc_qual), rows22.map(r => r.activity))
const dsPaperActivity = buildDataset22('영재성검사1총점 vs 3단계 활동', rows22.map(r => r.test_math + r.test_sci), rows22.map(r => r.activity))
</script>

## 영재성검사1(수학/과학) vs 영재성검사2

| 비교 항목 | $r$ | $R^2$ |
|---|---|---|
| 영재성검사1(수학) vs 영재성검사2 | {{ dsMathFusion.r.toFixed(2) }} | {{ dsMathFusion.r2.toFixed(2) }} |
| 영재성검사1(과학) vs 영재성검사2 | {{ dsSciFusion.r.toFixed(2) }} | {{ dsSciFusion.r2.toFixed(2) }} |

## 1단계 서류 정성/정량 vs 영재성검사1총점 vs 3차 활동

| 비교 항목 | $r$ | $R^2$ |
|---|---|---|
| 1단계 서류 정량 vs 영재성검사1총점 | {{ dsQuantPaper.r.toFixed(2) }} | {{ dsQuantPaper.r2.toFixed(2) }} |
| 1단계 서류 정성 vs 3단계 활동 | {{ dsQualActivity.r.toFixed(2) }} | {{ dsQualActivity.r2.toFixed(2) }} |
| 영재성검사1총점 vs 3단계 활동 | {{ dsPaperActivity.r.toFixed(2) }} | {{ dsPaperActivity.r2.toFixed(2) }} |

<!--
발표자 노트: data/2-2-correlations.csv의 원자료를 실제 데이터로 교체하면
R, R²가 자동으로 재계산됩니다. 각 관계의 산점도/회귀선은 다음 슬라이드들에서
확인합니다. 영재성검사1총점은 수학+과학 점수를 합산한 값입니다. 영재성검사1(수학/과학)과
영재성검사2 점수 간에는 두 시험이 어느 정도 유사한 역량을 측정하면서도 완전히
중복되지는 않음을 시사합니다. 1차, 영재성검사1, 3차 간의 관계도 함께 검토하여
전형 단계들이 서로 다른 역량을 측정하는 독립적인 도구로 기능하는지 확인해야 합니다.
-->

---

# 영재성검사1(수학) vs 영재성검사2

<script setup>
import csvRawMF from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSVMF, buildDataset as buildDatasetMF } from './utils/stats.js'

const rowsMF = parseCSVMF(csvRawMF)
const dsMF = buildDatasetMF('영재성검사1(수학) vs 영재성검사2', rowsMF.map(r => r.test_math), rowsMF.map(r => r.test_fusion))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsMF.r.toFixed(3) }}
- **R²** = {{ dsMF.r2.toFixed(3) }}
- 표본 수 = {{ dsMF.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsMF.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsMF.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsMF.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsMF.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsMF.line.x1" :y1="dsMF.line.y1" :x2="dsMF.line.x2" :y2="dsMF.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsMF.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">영재성검사1(수학) 점수 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사1(수학) 점수와 영재성검사2 점수 간의 산점도와 회귀선입니다.
data/2-2-correlations.csv의 test_math, test_fusion 열을 실제 데이터로
교체하면 자동으로 갱신됩니다.
-->

---

# 영재성검사1(과학) vs 영재성검사2

<script setup>
import csvRawSF from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSVSF, buildDataset as buildDatasetSF } from './utils/stats.js'

const rowsSF = parseCSVSF(csvRawSF)
const dsSF = buildDatasetSF('영재성검사1(과학) vs 영재성검사2', rowsSF.map(r => r.test_sci), rowsSF.map(r => r.test_fusion))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsSF.r.toFixed(3) }}
- **R²** = {{ dsSF.r2.toFixed(3) }}
- 표본 수 = {{ dsSF.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsSF.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsSF.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsSF.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsSF.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsSF.line.x1" :y1="dsSF.line.y1" :x2="dsSF.line.x2" :y2="dsSF.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsSF.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">영재성검사1(과학) 점수 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사1(과학) 점수와 영재성검사2 점수 간의 산점도와 회귀선입니다.
data/2-2-correlations.csv의 test_sci, test_fusion 열을 실제 데이터로
교체하면 자동으로 갱신됩니다.
-->

---

# 1단계 서류 정량 vs 영재성검사1총점

<script setup>
import csvRawQP from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSVQP, buildDataset as buildDatasetQP } from './utils/stats.js'

const rowsQP = parseCSVQP(csvRawQP)
const dsQP = buildDatasetQP('1단계 서류 정량 vs 영재성검사1총점', rowsQP.map(r => r.doc_quant), rowsQP.map(r => r.test_math + r.test_sci))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsQP.r.toFixed(3) }}
- **R²** = {{ dsQP.r2.toFixed(3) }}
- 표본 수 = {{ dsQP.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsQP.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsQP.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsQP.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsQP.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsQP.line.x1" :y1="dsQP.line.y1" :x2="dsQP.line.x2" :y2="dsQP.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsQP.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">1단계 서류 정량 점수 →</div>
</div>
</div>

<!--
발표자 노트: 1단계 서류 정량 점수와 영재성검사1총점(수학+과학) 간의 산점도와
회귀선입니다. data/2-2-correlations.csv의 doc_quant, test_math, test_sci
열을 실제 데이터로 교체하면 자동으로 갱신됩니다.
-->

---

# 1단계 서류 정성 vs 3단계 활동

<script setup>
import csvRawQA from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSVQA, buildDataset as buildDatasetQA } from './utils/stats.js'

const rowsQA = parseCSVQA(csvRawQA)
const dsQA = buildDatasetQA('1단계 서류 정성 vs 3단계 활동', rowsQA.map(r => r.doc_qual), rowsQA.map(r => r.activity))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsQA.r.toFixed(3) }}
- **R²** = {{ dsQA.r2.toFixed(3) }}
- 표본 수 = {{ dsQA.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsQA.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsQA.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsQA.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsQA.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsQA.line.x1" :y1="dsQA.line.y1" :x2="dsQA.line.x2" :y2="dsQA.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsQA.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">1단계 서류 정성 점수 →</div>
</div>
</div>

<!--
발표자 노트: 1단계 서류 정성 점수와 3차 활동 점수 간의 산점도와 회귀선입니다.
data/2-2-correlations.csv의 doc_qual, activity 열을 실제 데이터로
교체하면 자동으로 갱신됩니다.
-->

---

# 영재성검사1총점 vs 3단계 활동

<script setup>
import csvRawPA from './data/2-2-correlations.csv?raw'
import { parseCSV as parseCSVPA, buildDataset as buildDatasetPA } from './utils/stats.js'

const rowsPA = parseCSVPA(csvRawPA)
const dsPA = buildDatasetPA('영재성검사1총점 vs 3단계 활동', rowsPA.map(r => r.test_math + r.test_sci), rowsPA.map(r => r.activity))
</script>

<div class="grid grid-cols-2 gap-6 items-center mt-4">
<div>

- **R** = {{ dsPA.r.toFixed(3) }}
- **R²** = {{ dsPA.r2.toFixed(3) }}
- 표본 수 = {{ dsPA.points.length }}명

</div>
<div class="flex-1">
<svg viewBox="0 0 100 100" class="w-full h-64 border border-gray-300 bg-gray-50">
<line v-for="t in dsPA.xTicks" :key="'x'+t.value" :x1="t.pos" y1="0" :x2="t.pos" y2="100" stroke="#d1d5db" stroke-width="0.3" />
<line v-for="t in dsPA.yTicks" :key="'y'+t.value" x1="0" :y1="t.pos" x2="100" :y2="t.pos" stroke="#d1d5db" stroke-width="0.3" />
<text v-for="t in dsPA.xTicks" :key="'xt'+t.value" :x="t.pos" y="98" font-size="1" text-anchor="middle" fill="#6b7280">{{ t.value }}</text>
<text v-for="t in dsPA.yTicks" :key="'yt'+t.value" x="1" :y="t.pos" font-size="1" text-anchor="start" dominant-baseline="middle" fill="#6b7280">{{ t.value }}</text>
<line :x1="dsPA.line.x1" :y1="dsPA.line.y1" :x2="dsPA.line.x2" :y2="dsPA.line.y2" stroke="red" stroke-width="1" />
<circle v-for="(p, i) in dsPA.points" :key="i" :cx="p.cx" :cy="p.cy" r="2" fill="#3b82f6" />
</svg>
<div class="text-xs text-center opacity-60 mt-1">영재성검사1총점 →</div>
</div>
</div>

<!--
발표자 노트: 영재성검사1총점(수학+과학)과 3차 활동 점수 간의 산점도와
회귀선입니다. data/2-2-correlations.csv의 test_math, test_sci, activity
열을 실제 데이터로 교체하면 자동으로 갱신됩니다.
-->

---

# 2-2 해석: 평가 도구 간 판별 타당도(Discriminant Validity)

<div class="grid grid-cols-2 gap-4">
<div>

## 판단 기준

- 서류평가의 목적은 영재성검사1 응시생을 뽑는것, 상관관계 높을수록 좋음
- 정량보다 정성이 영재성검사1과 상관관계 높음. r ≈ 0.37로 현실적으로 잘 작동한다고 보여짐(정성 추가 예정)
- 영재성검사1, 2의 상관관계 높음, 타당도는 높지만 서로 다른 영역을 선발한다는 느낌이 부족하다고 할수도 있음.
  <br> <span class="text-sm opacity-60">※ 약한~보통 수준(r ≈ 0.2~0.5)이 오히려 이상적: 서로 관련은 있으나
  독립적인 역량을 평가한다는 증거, Campbell & Fiske(1959)의 판별 타당도(Discriminant Validity)</span>
- 영재성검사2와 영재성캠프 상관관계 r ≈ 0.12로 낮은 상관관계(추가 예정)

<!--
- 2-2는 성적 예측이 아니라, 각 전형 단계가 **서로 다른 역량**을
  측정하는지 확인하는 목적이므로, R²가 높다고 좋은 것이 아님
- 상관관계가 지나치게 높으면(r ≥ 0.7~0.8) 두 도구가 사실상 같은 역량을
  중복 측정하는 것으로 판단하여 통합 검토가 필요함
- 상관관계가 거의 없으면(r ≈ 0) 두 도구가 전혀 무관한 것을 측정하거나,
  도구 신뢰도 자체의 문제일 가능성도 있음
- 약한~보통 수준(r ≈ 0.2~0.5)이 오히려 이상적: 서로 관련은 있으나
  독립적인 역량을 평가한다는 증거
- 근거: Campbell & Fiske(1959)의 판별 타당도(Discriminant Validity) 개념
-->
</div>
<div>

<!--
## 본 분석과의 대조

- 영재성검사1(수학/과학)과 영재성검사2 간 상관관계는 [약한/보통] 수준으로,
  교과 지식 기반 사고와 융합적 문제해결력이 서로 다른 역량임을 시사
- 1단계 서류(정량/정성)와 영재성검사1총점/3단계 활동 간 상관관계도
  [약한/보통] 수준으로, 전형 단계들이 중복되지 않고 각기 다른 역량을
  평가하고 있음을 시사
-->
</div>
</div>

> 전형 단계 간 상관관계가 **지나치게 높거나 낮지 않고 적당한 수준**일 때,
> 해당 전형 설계는 서로 독립적인 역량을 평가하는 타당한 구조로
> 뒷받침됩니다.

<!--
발표자 노트: 2-2는 2-1과 달리 예측 타당성(Predictive Validity)이 아니라
판별 타당성(Discriminant Validity)을 검토하는 것입니다. 따라서 R²가 높을수록
좋다고 해석하면 안 되며, 적당히 낮거나 보통 수준의 상관관계야말로 각 전형
단계가 서로 다른 역량을 독립적으로 측정하고 있다는 근거가 됩니다. 근거:
Campbell, D. T., & Fiske, D. W. (1959). Convergent and discriminant validation
by the multitrait-multimethod matrix. Psychological Bulletin, 56(2), 81-105.
-->

---

# 2-2 협의회 준비 사항
- 팀별 준비 자료
  - 선발결과 디테일 자료 2개 (2026분석, 2027분석, 개인적보 삭제 버전, 팀별 노트북에 탑재)
  - 문항분석결과 자료 2개 (2026분석, 2027분석, 개인적보 삭제 버전, 팀별 노트북에 탑재)
  - 문항원안지 2개 (2026분석, 2027분석, 개인적보 삭제 버전, 팀별 인쇄본 1부)

- 2부 논의사항
  - ??
<!--
- 전형 단계 간 상관관계는 Cohen의 기준을 충족하는
  **보통 수준의 상관관계**로 나타나, 각 단계가 서로 연관성을 가지면서도
  **독립적인 역량**을 측정하고 있는 것으로 판단됨
- 확인된 설명력($R^2$)을 근거로 전형 단계 간 예측 타당성이 뒷받침됨
- **개선 제안**
  - [전형 단계별 배점 비중 재조정 검토]
  - [설명력이 낮은 항목에 대한 평가 문항/기준 보완]
  - [차년도 데이터 축적을 통한 지속적 타당도 재검증 체계 구축]
-->

<!--
발표자 노트: 2-2의 결론은 현재 전형 설계가 통계적으로 뒷받침되는 타당성을
갖추고 있으되, 지속적인 데이터 축적과 재검증이 필요하다는 점을 강조합니다.
개선 제안은 학교 상황에 맞게 구체적인 수치나 정책으로 수정하여 발표하시면 됩니다.
-->

---

# 참고자료 (References)

- Cohen, J. (1992). *Statistical Power Analysis for the Behavioral Sciences*.
  [https://utstat.toronto.edu/~brunner/oldclass/378f16/readings/CohenPower.pdf](https://utstat.toronto.edu/~brunner/oldclass/378f16/readings/CohenPower.pdf)
- *Predictive Validity in Pre-hire/Selection Testing*, Statistics By Jim.
  [https://statisticsbyjim.com/basics/predictive-validity/](https://statisticsbyjim.com/basics/predictive-validity/#:~:text=In%20all%20these%20predictive%20validity%20examples%2C%20you,they%20can%20correlate%20with%20the%20pre%2Dhire%20test.)
- Kelley, T. L. (1939). The selection of upper and lower groups for the validation of test items. *Journal of Educational Psychology*, 30(1), 17–24.
  [https://doi.org/10.1037/h0057123](https://doi.org/10.1037/h0057123)
- Campbell, D. T., & Fiske, D. W. (1959). Convergent and discriminant validation by the multitrait-multimethod matrix. *Psychological Bulletin*, 56(2), 81–105.
  [https://doi.org/10.1037/h0046016](https://doi.org/10.1037/h0046016)
- Ebel, R. L., & Frisbie, D. A. (1991). *Essentials of Educational Measurement* (5th ed.). Prentice-Hall.
  [https://openlibrary.org/works/OL4471505W](https://openlibrary.org/works/OL4471505W)
- MetricGate. (2025). *Discrimination Index (Item Analysis)* [Web application].
  [https://metricgate.com/docs/discrimination-index-item-analysis/](https://metricgate.com/docs/discrimination-index-item-analysis/)

<!--
발표자 노트: 발표 자료의 통계적 해석 기준(Cohen의 효과크기)과 예측 타당도 개념의
출처를 명시하여 발표 내용의 신뢰성을 확보합니다. 문항 분석에 사용된 상·하위
27% 집단 기준(Kelley, 1939)과 변별도 판정 기준(Ebel & Frisbie, 1991)의 출처도
함께 제시합니다. MetricGate는 실무 검증용 보조 자료입니다. 질의응답 시 근거
자료로 활용할 수 있습니다.
-->
