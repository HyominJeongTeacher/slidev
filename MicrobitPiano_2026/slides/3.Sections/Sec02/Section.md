---
layout: default
---

# 2. 전압 강하 측정과 소리의 진동수 제어 실습

### 🎯 2부 학습 목표
- 분압 회로(Voltage Divider)의 원리로 전압 강하 개념 이해하기
- **1단계:** 가변저항 연결 및 전압 값($0 \sim 1023$) 읽기
- **2단계:** 노이즈 제거 (마이크로비트 내장 풀다운 저항 설정)
- **3단계:** 입력 데이터($0 \sim 1023$)를 진동수($131 \sim 988\text{Hz}$)로 매칭하여 악기 완성하기

---

# [1단계] 분압 회로와 가변저항의 물리적 원리

### 전압 강하(Voltage Drop)란?

- **전원 공급:** 마이크로비트의 $3.3\text{V}$ 단자와 $\text{GND}$ 단자 사이에서 전위차가 형성됩니다.
- **가변저항의 역할:** 내부 노브(손잡이)를 돌리면 저항체의 길이가 변하여 전압이 나뉩니다.
- **아날로그 입력 (P0 핀):** P0 핀은 전압 강하 후의 **분압된 전압 크기**를 측정합니다.

---

### 💡 마이크로비트의 ADC (아날로그-디지털 변환)
- 전압 범위: $0\text{V} \sim 3.3\text{V}$
- 읽어들이는 데이터 값: $0 \sim 1023$ (10비트 해상도)
- $0\text{V} \rightarrow 0$ / $1.65\text{V} \rightarrow 511$ / $3.3\text{V} \rightarrow 1023$

---
layout: two-cols
gap: 6
---

# [2단계] 회로 구성: 니크롬선 저항판 연결

::left::

### 니크롬선 저항판과 마이크로비트 연결

- **3V 핀:** 니크롬선의 한쪽 끝 (시작점, $3.3\text{V}$ 기준)
- **GND 핀:** 니크롬선의 반대쪽 끝 (끝점, $0\text{V}$ 기준)
- **P0 핀 (측정 집게):** 니크롬선 위를 이동하며 **전압 강하 측정**

---

### 실습 동작
1. 양 끝에 3V와 GND 집게 케이블을 고정합니다.
2. P0 집게 전선을 니크롬선 위에서 슬라이딩하듯 이동시킵니다.
3. 위치(길이)에 따라 변하는 **아날로그 전압 데이터($0 \sim 1023$)**를 확인합니다.

::right::

<div class="flex items-center h-full">

![니크롬선 저항판 연결 및 측정 회로도](./assets/block_04_nichrome_circuit.png)

</div>

<!--
[발표자 노트 - MakeCode JavaScript]
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
-->

---
layout: two-cols
gap: 6
---

# [3단계] 신호 데이터 시각화 (시리얼 모니터)

::left::

### 전압 변화를 그래프로 관찰하기

- 숫자로 표시되는 수치는 변화 흐름을 직관적으로 관찰하기 어렵습니다.
- **[시리얼통신]** 또는 **[핀]** 카테고리의 `값 쓸기(Serial Write)` 블록을 사용하여 실시간 전압 그래프를 확인합니다.

---

### 실습 순서
1. 코드 다운로드 후 MakeCode 좌측 **[콘솔 장치 보기]** 클릭
2. 가변저항을 천천히 돌리며 **전압 그래프의 연속적 변화** 관찰

::right::

<div class="flex items-center h-full">

![시리얼 데이터 출력 블록](./assets/block_05_serial_plot.png)

</div>

<!--
[발표자 노트 - MakeCode JavaScript]
basic.forever(function () {
    led.plotBarGraph(pins.analogReadPin(AnalogPin.P0), 1023)
})
-->

---
layout: two-cols
gap: 6
---

# [4단계] 회로 노이즈 제거: 내장 풀다운 설정

::left::

### 플로팅(Floating) 현상 방지하기

- 단선이 되거나 신호가 불안정할 때 값이 흔들리는 현상을 **플로팅**이라고 합니다.
- 외부 저항을 물리적으로 추가하는 대신, **마이크로비트 내장 풀다운 저항** 코드로 해결합니다.

---

### 실습 동작
- `시작하면` 블록에 P0 핀의 풀모드를 `PullDown`으로 설정합니다.
- 기준 전위가 안정적으로 $0\text{V}$로 고정되는 것을 관찰합니다.

::right::

<div class="flex items-center h-full">

![풀다운 저항 설정 블록](./assets/block_06_pulldown.png)

</div>

<!--
[발표자 노트 - MakeCode JavaScript]
pins.setPull(PinPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    led.plotBarGraph(pins.analogReadPin(AnalogPin.P0), 1023)
})
-->

---

---
layout: two-cols
gap: 6
---

# [5단계] 입력 데이터 $\rightarrow$ 진동수(Hz) 매칭

::left::

### 물리적 측정량을 소리의 파동으로 변환

- 읽어들인 아날로그 값($0 \sim 1023$)을 소리의 진동수 범위($131 \sim 988\text{Hz}$)로 선형 매핑(Mapping)합니다.
- $131\text{Hz}$는 **C3(낮은 도)**, $988\text{Hz}$는 **B5(시)** 범위입니다.

---

### 핵심 블록 사용법
- **[pins.map]** 블록: 
  - `값`: P0 아날로그 읽기
  - `from`: $0 \sim 1023$
  - `to`: $131 \sim 988$

::right::

<div class="flex items-center h-full">

![진동수 매칭 및 톤 출력 블록](./assets/block_07_frequency_map.png)

</div>

<!--
[발표자 노트 - MakeCode JavaScript]
let val = 0
let freq = 0
pins.setPull(PinPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    val = pins.analogReadPin(AnalogPin.P0)
    freq = Math.map(val, 0, 1023, 131, 988)
    music.playTone(freq, music.beat(BeatFraction.Eighth))
})
-->

---

# 2부 실습 종합 정리 및 완성

### 🎵 연속 가변 전자 악기 완성!

1. **가변저항 조작:** 전압 강하량 변화 ($0\text{V} \sim 3.3\text{V}$)
2. **마이크로비트 측정:** 10비트 디지털 수치화 ($0 \sim 1023$)
3. **선형 매핑 함수:** 소리 진동수값으로 연산 ($131\text{Hz} \sim 988\text{Hz}$)
4. **스피커 출력:** 진동수에 해당하는 파동 형태의 소리 재생

---

> **물리 수업 적용 포인트:**
> 
> "단순히 코딩을 따라하는 것이 아니라, **전압이라는 물리량 변화가 진동수라는 파동의 요소로 직관적으로 변환되는 시스템**을 체험하는 수업으로 구성할 수 있습니다."