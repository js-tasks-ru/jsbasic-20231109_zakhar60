
function toggleText() {
  let button = document.querySelector(".toggle-text-button")
  let text = document.getElementById("text")
  button.addEventListener('click',function(){
    if(!text.hasAttribute('hidden')){
      text.setAttribute('hidden',true)
    }
    else{
      text.removeAttribute('hidden')
    }
  })
  
}
