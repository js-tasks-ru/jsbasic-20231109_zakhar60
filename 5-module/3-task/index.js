
function initCarousel() {
  let line = document.querySelector(".carousel__inner")
  let rArrow = document.querySelector(".carousel__arrow_right")
  let lArrow = document.querySelector(".carousel__arrow_left")
  line.setAttribute("pageNum", 1)
  lArrow.style.display = 'none'

  rArrow.addEventListener('click',function(){
    let line = document.querySelector(".carousel__inner")
    let rArrow = document.querySelector(".carousel__arrow_right")
    let lArrow = document.querySelector(".carousel__arrow_left")
    if (Number(line.attributes.pageNum.value) + 1 === 4){
      rArrow.style.display = 'none'
      line.style.transform = `translateX(-${Number(line.attributes.pageNum.value) * line.offsetWidth}px)`
    }
    else{
      rArrow.style.display = ''
      lArrow.style.display = ''
      line.style.transform = `translateX(-${Number(line.attributes.pageNum.value) * line.offsetWidth}px)`
      line.setAttribute("pageNum",Number(line.attributes.pageNum.value)+1)
    }
  }) 

  lArrow.addEventListener('click',function(){
    let line = document.querySelector(".carousel__inner")
    let lArrow = document.querySelector(".carousel__arrow_left")
    let rArrow = document.querySelector(".carousel__arrow_right")
    if (Number(line.attributes.pageNum.value) - 1 === 0){
      lArrow.style.display = 'none'
      line.style.transform = `translateX(-${(Number(line.attributes.pageNum.value)-1) * line.offsetWidth}px)`
      
    }
    else{
      lArrow.style.display = ''
      rArrow.style.display = ''
      line.style.transform = `translateX(-${(Number(line.attributes.pageNum.value)-1) * line.offsetWidth}px)`
      line.setAttribute("pageNum",Number(line.attributes.pageNum.value)-1)
    }
  }) 
}
