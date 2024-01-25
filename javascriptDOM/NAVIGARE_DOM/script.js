
const html = document.documentElement 

html.children[1] 
const body = html.children[1]

body.children[0] 
const ul = body.children[0]
console.log(ul.parentElement)


ul.children[1] 
const li2 = ul.children[1]
console.log(li2.innerText)


console.log(li2.nextElementSibling.innerText)


console.log(li2.previousElementSibling.innerText)
