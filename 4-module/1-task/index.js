function makeFriendsList(friends) {
  let res = document.createElement('ul')
  for (obj in friends){
    let str = document.createElement('li')
    str.innerHTML = `${friends[obj].firstName} ${friends[obj].lastName}`
    res.appendChild(str)
  }
  return res
}
