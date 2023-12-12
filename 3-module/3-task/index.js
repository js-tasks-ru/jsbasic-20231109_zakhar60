function camelize(str) {
  let res = str
    .split('-')
  for (let i = 0; i < res.length; i++){
    if (res[i] ==="" || i ===0 ){
      continue
    }
    let tmp = res[i][0].toUpperCase()
    res[i] = tmp + res[i].slice(1,res[i].length)
  }
  return res.join("")
}
