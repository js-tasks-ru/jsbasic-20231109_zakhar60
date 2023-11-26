function factorial(n) {
  if (n === 0){
    return 1
  }
  else if(n < 0){
    return 0
  }
  return factorial(n-1) * n
}
