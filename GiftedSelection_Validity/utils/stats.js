export function parseCSV(text) {
  const [headerLine, ...lines] = text.trim().split(/\r?\n/)
  const headers = headerLine.split(',').map(h => h.trim())
  return lines.filter(l => l.trim()).map(line => {
    const cells = line.split(',').map(c => c.trim())
    const row = {}
    headers.forEach((h, i) => { row[h] = cells[i] === '' ? NaN : Number(cells[i]) })
    return row
  })
}

export function pearson(x, y) {
  const n = x.length
  const mx = x.reduce((a, b) => a + b, 0) / n
  const my = y.reduce((a, b) => a + b, 0) / n
  let num = 0, dx2 = 0, dy2 = 0
  for (let i = 0; i < n; i++) {
    const dx = x[i] - mx, dy = y[i] - my
    num += dx * dy; dx2 += dx * dx; dy2 += dy * dy
  }
  const r = num / Math.sqrt(dx2 * dy2)
  return { r, r2: r * r, mx, my, sx: Math.sqrt(dx2 / n), sy: Math.sqrt(dy2 / n) }
}

export function buildDataset(name, xRaw, yRaw, xStep = 5, yStep = 10) {
  // 결측치(NaN/빈칸)가 있는 학생은 해당 쌍에서 자동 제외(pairwise 삭제)
  const x = [], y = []
  for (let i = 0; i < xRaw.length; i++) {
    if (Number.isFinite(xRaw[i]) && Number.isFinite(yRaw[i])) {
      x.push(xRaw[i]); y.push(yRaw[i])
    }
  }
  const s = pearson(x, y)

  // 그래프 끝값이 아닌 그리드 간격(x=5점, y=10점)의 끝값으로 축 범위를 맞춤
  const xGridMin = Math.floor(Math.min(...x) / xStep) * xStep
  const xGridMax = Math.ceil(Math.max(...x) / xStep) * xStep
  const yGridMin = Math.floor(Math.min(...y) / yStep) * yStep
  const yGridMax = Math.ceil(Math.max(...y) / yStep) * yStep
  const xRange = (xGridMax - xGridMin) || 1, yRange = (yGridMax - yGridMin) || 1
  const sx = v => ((v - xGridMin) / xRange) * 94 + 3
  const sy = v => 100 - (((v - yGridMin) / yRange) * 94 + 3)

  const xTicks = []
  for (let v = xGridMin; v <= xGridMax + 1e-9; v += xStep) xTicks.push({ value: v, pos: sx(v) })
  const yTicks = []
  for (let v = yGridMin; v <= yGridMax + 1e-9; v += yStep) yTicks.push({ value: v, pos: sy(v) })

  const points = x.map((xi, i) => ({ cx: sx(xi), cy: sy(y[i]) }))
  const slope = s.r * (s.sy / s.sx)
  const intercept = s.my - slope * s.mx
  const line = {
    x1: sx(xGridMin), y1: sy(slope * xGridMin + intercept),
    x2: sx(xGridMax), y2: sy(slope * xGridMax + intercept),
  }
  return {
    name, r: s.r, r2: s.r2, points, line, n: x.length,
    xMin: xGridMin, xMax: xGridMax, yMin: yGridMin, yMax: yGridMax,
    xTicks, yTicks,
  }
}
