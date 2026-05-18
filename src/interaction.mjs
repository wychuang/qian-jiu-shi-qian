export function clientYToRailPercent(clientY, rect) {
  const height = Math.max(1, rect.height ?? rect.bottom - rect.top);
  const raw = 100 - ((clientY - rect.top) / height) * 100;

  return Math.max(0, Math.min(100, Math.round(raw * 10) / 10));
}
