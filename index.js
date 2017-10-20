function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankUp = document.querySelectorAll('#app .ranked-list')
  for (var i = 0; i < rankUp.length; i++) {
   rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n
}
}

function deepestChild() {
  var deepest = document.querySelectorAll('#grand-node div')
  return deepest[deepest.length - 1]
}

//or this but children is not working
/*
function deepestChild() {
  var deepest = document.querySelectorAll('#grand-node div')
  while (deepest.children[0]) {
    deepest = deepest.chidren[0]
  }
  return deepest
}
*/
