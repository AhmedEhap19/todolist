let button = document.getElementById('button')
let text = document.getElementById('text')
let list = document.getElementById('list')
let del = document.getElementById('delet')
button.addEventListener('click', function(){
    let newli = document.createElement('li')
    newli.innerHTML = text.value
    if(text.value != ''){
        list.appendChild(newli)
    }
    
    text.value = ""
    newli.onclick = function(){
        newli.style.textDecoration = 'line-through'
        newli.style.color = 'green'
        newdiv.style.backgroundColor = 'green'
        newdiv.style.border = '1px green solid'
    }
    let newdiv = document.createElement('div')
    newli.appendChild(newdiv)
    newdiv.onclick = function(){
        newdiv.style.backgroundColor = 'green'
        newdiv.style.border = '1px green solid'
        newli.style.textDecoration = 'line-through'
        newli.style.color = 'green'
    }
    if(list.children.length > 0){
        del.style.display = 'block'
    }else{
        del.style.display = 'none'
    }
    del.onclick = function(){
        list.innerHTML = ''
        del.style.display = 'none'
        
    }
})
