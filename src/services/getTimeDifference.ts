export default function getTimeDifference(isoDate: Date): String {
  const timeDiff: number = new Date().getTime() - isoDate.getTime();
  const dayDifference: number = Math.floor(timeDiff / 86400000);
  if (dayDifference > 1) return `${dayDifference} days`;
  else {
    return '1 day';
  }
}
