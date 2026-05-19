export function clientYToRailPercent(clientY, rect) {
  const height = Math.max(1, rect.height ?? rect.bottom - rect.top);
  const raw = 100 - ((clientY - rect.top) / height) * 100;

  return Math.max(0, Math.min(100, Math.round(raw * 10) / 10));
}

export function pickSeparatedRailPins(candidates, options = {}) {
  const minGapPercent = options.minGapPercent ?? 7;
  const maxPerSide = options.maxPerSide ?? 9;
  const maxPins = options.maxPins ?? maxPerSide * 2;
  const placed = [];
  const sideCounts = new Map();

  const ranked = candidates
    .map((candidate, index) => ({
      ...candidate,
      index,
      required: Boolean(candidate.required),
      score: Number(candidate.score ?? 0),
      side: candidate.side ?? "right",
      y: clampPercent(candidate.y)
    }))
    .sort((left, right) => {
      if (left.required !== right.required) return left.required ? -1 : 1;
      return right.score - left.score || left.index - right.index;
    });

  for (const candidate of ranked) {
    const sideCount = sideCounts.get(candidate.side) ?? 0;
    const hasConflict = placed.some((pin) => (
      pin.side === candidate.side && Math.abs(pin.y - candidate.y) < minGapPercent
    ));

    if (!candidate.required && (hasConflict || sideCount >= maxPerSide || placed.length >= maxPins)) {
      continue;
    }

    placed.push(candidate);
    sideCounts.set(candidate.side, sideCount + 1);
  }

  return placed.sort((left, right) => left.index - right.index);
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Number(value)));
}
