export const copyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.opacity = "0"
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
    document.execCommand("copy")
  } catch (err) {
    console.error(JSON.stringify(err))
  }
  document.body.removeChild(textArea)
}
