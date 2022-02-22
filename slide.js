const balls = document.querySelector('.balls')
const qtd = document.querySelectorAll('.slides .images')
let atual = 0
let rolar = true

const image =  document.getElementById('atual')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

for( let i=0; i < qtd.length; i++){
    const div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}

document.getElementById('0').classList.add('img-atual')

const pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
   pos[i].addEventListener('click',()=>{
       atual =pos[i].id
       rolar = false
       slide()
   })
}

prev.addEventListener('click',()=>{
    atual--
    rolar = false
    slide()
})

next.addEventListener('click',()=>{
    atual++
    rolar =false
    slide()
})

function slide(){
    if (atual >= qtd.length) {
        atual = 0
    }else if(atual < 0){
        atual = qtd.length -1
    }
    document.querySelector('.img-atual').classList.remove('img-atual')
    image.style.marginLeft = -1024 * atual+'px'
    document.getElementById(atual).classList.add('img-atual')
}

setInterval(()=>{
    if (rolar) {
        atual++
        slide()
    } else {
        rolar =true
    }
},4000)






