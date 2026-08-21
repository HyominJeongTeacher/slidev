---
layout: default
math: true
---

# 1. 실험 장비 및 측정 준비

<div class="text-2xl mt-8 text-blue-600 font-semibold">표준 경로: 함수발생기 + 스피커 + MBL 소리 센서</div>

---

# 표준 측정 구성

<div class="grid grid-cols-3 gap-6 mt-8 text-left">
  <div class="p-5 border rounded-xl">
    <h3>소리 생성</h3>
    <ul>
      <li>함수발생기</li>
      <li>스피커</li>
      <li>정현파, 220 Hz 또는 440 Hz</li>
    </ul>
  </div>
  <div class="p-5 border rounded-xl">
    <h3>파형 수집</h3>
    <ul>
      <li>MBL 소리 센서</li>
      <li>PC 또는 LabQuest 연결</li>
      <li>음압 데이터 기록</li>
    </ul>
  </div>
  <div class="p-5 border rounded-xl">
    <h3>데이터 확인</h3>
    <ul>
      <li>시간 영역 파형 관찰</li>
      <li>측정 조건 기록</li>
      <li>CSV 파일 저장</li>
    </ul>
  </div>
</div>

---

# 측정 전 점검

- 스피커와 MBL 소리 센서를 약 30 cm 이상 떨어뜨려 설치한다.
- 음원 종류, 설정 주파수, 출력 크기, 마이크 위치를 활동지에 기록한다.
- 샘플링레이트 $f_s$와 측정 시간을 확인한다.
- 440 Hz 기록에는 최소 $f_s \geq 880\,\mathrm{Hz}$가 필요하며, 파형 관찰에는 그보다 충분히 높은 값을 사용한다.
- 기록한 CSV에는 시간과 신호 값이 모두 포함되는지 확인한다.

> 안전: 함수발생기의 출력을 스피커 허용 범위 안에서 낮게 시작하고, 음량을 단계적으로 높인다.

---

# 교실 대체 장비의 위치

| 표준 장비 | 대체 장비 | 수업에서 확인할 값 |
| --- | --- | --- |
| 함수발생기 | 노트북/스마트폰 톤 생성 앱 | 설정 주파수 |
| MBL 소리 센서 | 스마트폰 앱/노트북 마이크 | 주기, 진동수, 상대 진폭 |
| LabQuest/PC | 노트북 | 파형, CSV, 스펙트럼 |

> 대체 장비의 세부 앱 조작은 별도 자료로 제공한다.
