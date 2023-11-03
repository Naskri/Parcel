export const isSameDate = (firstDate: Date, secondDate: Date) => {
  const firstDateYear = firstDate.getFullYear()
  const firstDateMonth = firstDate.getMonth()
  const firstDateDay = firstDate.getDate()

  const secondDateYear = secondDate.getFullYear()
  const secondDateMonth = secondDate.getMonth()
  const secondDateDay = secondDate.getDate()

  return (
    firstDateYear === secondDateYear &&
    firstDateMonth === secondDateMonth &&
    firstDateDay === secondDateDay
  )
}
