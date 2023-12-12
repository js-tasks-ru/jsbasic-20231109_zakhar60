function getMinMax(str) {
  let res = str.split(' ')
    .filter(smb => !isNaN(smb))
  let max = Number([0])
  let min = Number([0])
  for(el of res){
    if (Number(el) < min){
      min = Number(el)
    }
    if (Number(el) > max){
      max = Number(el)
    }
  }
  return {
    min: min,
    max: max,
  }
}
