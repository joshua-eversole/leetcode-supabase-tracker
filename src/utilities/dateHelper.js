export function formatRelativeDate(isoString) {
  if (!isoString) return 'Never';

  const targetDate = new Date(isoString);
  const today = new Date();

  // Set all the times to midnight so we can compare them better
  targetDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Calculate difference in days
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Get the name of the day of the week
  const getDayName = (date) => date.toLocaleDateString('en-US', { weekday: 'long' });

  // 1. Past or Today
  if (diffDays < 0) return targetDate.toLocaleDateString(); // e.g. "12/5/2023" (Past)
  if (diffDays === 0) return "Today";
  
  // 2. Immediate Future
  if (diffDays === 1) return "Tomorrow";

  // 3. This Week (2 to 6 days away)
  if (diffDays > 1 && diffDays < 7) {
    return `This ${getDayName(targetDate)}`;
  }

  // 4. Next Week (7 to 13 days away)
  if (diffDays >= 7 && diffDays < 14) {
    return `Next ${getDayName(targetDate)}`;
  } 

  // 5. Far Future (Just show the date)
  return targetDate.toLocaleDateString(); // e.g. "1/15/2024"
}