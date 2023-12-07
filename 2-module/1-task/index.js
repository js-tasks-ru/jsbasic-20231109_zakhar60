function sumSalary(salaries) {
  rejectList = [NaN, Infinity, -Infinity]
  let sum = 0
  for (let i in salaries){
    if (typeof salaries[i] === "number" && !rejectList.includes(salaries[i])){
      sum += salaries[i]
    }
  }
  return sum
}
