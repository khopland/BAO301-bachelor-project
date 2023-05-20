export const convertTimeFormat = (timeStr: string): string => {
  const parts = timeStr.split(':')
  const hours = parseInt(parts[0], 10)
  const minutes = parseInt(parts[1], 10)

  return `${hours}h ${minutes}m`
}
