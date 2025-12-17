export function calculateReview(rating, oldReview) {
  const MIN_EASE = 130;
  const MAX_INTERVAL_BONUS = 1.3;
  const INITIAL_INTERVALS = [1, 2, 3, 5, 7];

  // New problem
  if (!oldReview) {
    const interval = INITIAL_INTERVALS[rating - 1];
    return {
      interval_days: interval,
      ease_factor: 250,
      consecutive_successes: rating >= 3 ? 1 : 0,
    };
  }

  // Previously Seen problem
  let { ease_factor, interval_days, consecutive_successes } = oldReview;

  if (rating < 3) {
    return {
      interval_days: 1,
      ease_factor: Math.max(MIN_EASE, ease_factor - 20),
      consecutive_successes: 0,
    };
  }

  consecutive_successes += 1;
  ease_factor = ease_factor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (ease_factor < MIN_EASE) ease_factor = MIN_EASE;

  if (consecutive_successes === 1) {
    interval_days = 1;
  } 
  else if (consecutive_successes === 2) {
    interval_days = 6;
  } 
  else {
    let growthMultiplier = ease_factor / 100;
    if (rating === 5) growthMultiplier *= MAX_INTERVAL_BONUS;
    interval_days = Math.ceil(interval_days * growthMultiplier);
  }

  return {
    interval_days: interval_days,
    ease_factor: Math.round(ease_factor),
    consecutive_successes: consecutive_successes,
  };
}