# 연수 목차

1. 마이크로비트 기초 및 제어 환경 구축
2. 전압 강하 측정과 소리의 진동수 제어 실습
3. 교실 수업 적용 및 연수 리소스 공유

---

# 연수 실습 기자재 및 시스템 구성

### 🟡 실습 교구 및 시스템 환경

- **메인 제어기:** 마이크로비트 v2 (스피커 및 마이크 내장)
- **회로 구성 요소:** 가변저항, 브레드보드, 점퍼선 ($3.3\text{V}$ 전원 및 P0 아날로그 입력)
- **시각화 환경:** MakeCode 콘솔 시리얼 모니터 (실시간 전압 변화 그래프 확인)
- **핵심 알고리즘:** 전압 강하량($0 \sim 3.3\text{V}$) $\rightarrow$ 소리 진동수(Hz) 실시간 매칭 코드

### 💡 핵심 탐구 포인트

- 단순 음계 출력을 넘어 **전압 강하의 물리적 변화가 소리의 진동수(Hz)로 직관적으로 변환되는 메커니즘**을 이해합니다.
- 회로 내 플로팅 현상(노이즈)을 마이크로비트 내장 풀다운 저항 코드로 안정화하는 과정을 직접 경험합니다.

<span class="text-xs text-gray-400 mt-4 block">* 참고: 본 실습 구조는 학교 현장에서 알루미늄 테이프, 흑연 연필, 조도 센서 등으로 확장 적용이 가능합니다.</span>

---

# 연수 운영 원칙

- **실습 중심 진행:** 환경 세팅 $\rightarrow$ 전압 측정 $\rightarrow$ 수식 기반 진동수 매칭 $\rightarrow$ 나만의 악기 제작 순으로 진행
- **회로 트러블슈팅 최소화:** 마이크로비트 내장 풀다운 기능 활용으로 하드웨어 복잡도 감소
- **수업 적용 리소스 배포:** 
  - 학생용 탐구 활동지 예시
  - 현장 트러블슈팅 가이드 및 완성본 코드
  - 피로도를 고려하여 **추후 개인 질의응답(오픈채팅/메일)** 채널 운영

---

# 활동 흐름

<div class="grid grid-cols-5 gap-2 mt-8 text-center text-sm font-bold">
  <div class="p-3 border border-gray-700 rounded-xl bg-gray-800/60">1. 환경 세팅<br><span class="text-xs font-normal text-gray-400">WebUSB 페어링</span></div>
  <div class="p-3 border border-gray-700 rounded-xl bg-gray-800/60">2. 전압 측정<br><span class="text-xs font-normal text-gray-400">P0 전압 강하 관찰</span></div>
  <div class="p-3 border border-gray-700 rounded-xl bg-gray-800/60">3. 노이즈 제어<br><span class="text-xs font-normal text-gray-400">내장 풀다운 적용</span></div>
  <div class="p-3 border border-gray-700 rounded-xl bg-gray-800/60">4. 진동수 매칭<br><span class="text-xs font-normal text-gray-400">전압 → 진동수(Hz)</span></div>
  <div class="p-3 border border-gray-700 rounded-xl bg-gray-800/60">5. 악기 연주<br><span class="text-xs font-normal text-gray-400">튜닝 & 수업 적용</span></div>
</div>

<div class="mt-10 text-left bg-blue-950/30 p-4 rounded-lg border border-blue-800">
  <p class="text-sm"><strong>핵심:</strong> <b>[회로 내 전압 측정 → 입력 데이터 변환 → 소리의 진동수 출력]</b>라는 데이터 기반 물리 수업</p>
</div>