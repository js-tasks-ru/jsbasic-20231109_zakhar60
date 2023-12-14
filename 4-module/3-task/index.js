function highlight(table) {
  let flag = 0
  for (let body of table.tBodies){
    for (let line of body.rows){
      if (line.cells[2].innerHTML === "m"){
        line.classList.add('male')
      }
      else{
        line.classList.add('female')
      }
      if (line.cells[1].innerHTML < 18){
        line.style.cssText=`text-decoration: line-through`
      }
      for (let col of line.cells){
        if (col.hasAttribute('data-available')){
          let value = col.getAttribute('data-available')
          if (value === "true"){
            line.classList.add('available')
          }
          else if(value === "false"){
            line.classList.add ('unavailable')
          }
          flag = 1
        }

      }
      if (flag === 1){
        flag = 0
      }
      else if (flag === 0){
        line.setAttribute("hidden",true)
      }
    }
  }
}
