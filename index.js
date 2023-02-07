export default function rangeHealth(range) {
  return range.sort((a, b) => b.health - a.health);
}
