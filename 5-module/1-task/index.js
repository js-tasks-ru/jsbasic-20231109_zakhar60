function hideSelf() {
  let button = document.querySelector(".hide-self-button")
  button.onclick = function(){
    button.setAttribute("hidden",true)
  }
}
