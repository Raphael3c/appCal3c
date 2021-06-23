export default function Soma(){
  const firstValue = document.getElementById("firstValue") as HTMLInputElement
  const secondValue = document.getElementById("secondValue") as HTMLInputElement

  const firstValueToNumber = Number(firstValue.value)
  const secondValueToNumber = Number(secondValue.value)

  const result = firstValueToNumber + secondValueToNumber
  const resultString = result.toString()
  
  const getTagResult = document.getElementById("result") as HTMLParagraphElement
  
  getTagResult.innerHTML = resultString

}