export const truncate = (text: string, length: number) => {
  if (text?.length > length) {
    if (text[length - 1] === ' ') return text.slice(0, length) + '...'
    else return text.slice(0, text.slice(0, length).lastIndexOf(' ')) + '...'

  }
  return text
}
