export default function getTimeDifference(isoDate) {
  const timeDiff = new Date().getTime() - new Date(isoDate).getTime();
  const dayDifference = parseInt(timeDiff / 86400000);
  if (dayDifference > 1) return `${dayDifference} days`;
  else {
    return '1 day';
  }
}
