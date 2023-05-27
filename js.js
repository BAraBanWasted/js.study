let S = document.getElementById("S")
let H = document.getElementById("H")
let m3 = document.getElementById("m3")
let btn = document.getElementById("btn")
let out = document.getElementById("out")
btn.onclick = f1
function f1() {
   let result = S.value * H.value * m3.value
   out.innerText = "Стоймость фундамента" + result
}

let in1 = document.getElementById("in1")
let in2 = document.getElementById("in2")
let but = document.getElementById("but")
let out_1 = document.getElementById("out_1")
but.onclick = f2
function f2() {
   let result_1 = (in1.value) * (in2.value)
   let sale = (in1.value) * 5 / 100
   let sale1 = (in1.value) * 10 / 100
   let sale2 = (in1.value) * 20 / 100
   let result_2 = ((in1.value) - (sale)) * (in2.value)
   let result_3 = ((in1.value) - (sale1)) * (in2.value)
   let result_4 = ((in1.value) - (sale2)) * (in2.value)
   if (in2.value >= 100) {

      out_1.innerText = "С учетом скидки" + result_2
   }
   else if (in2.value >= 200) {

      out_1.innerText = "С учетом скидки" + result_3
   }
   else if (in2.value >= 300) {

      out_1.innerText = "С учетом скидки" + result_4
   }
   else { out_1.innerText = "Цена " + result_1 }
}

let btn_1 = document.getElementById('btn_1')
let st2 = document.getElementById('st2')
let st1 = document.getElementById('st1')
let st3 = document.getElementById('st3')
let st4 = document.getElementById('st4')
let st5 = document.getElementById('st5')
let st6 = document.getElementById('st6')
let st7 = document.getElementById('st7')
let st8 = document.getElementById('st8')
let st9 = document.getElementById('st9')
let st10 = document.getElementById('st10')
btn_1.onclick = f3

function f3(){
    let k1 = 0
    let k2 = 1
    let k3 = 0
    let k4 = 1
    
    while (k1<=k2){
        k1 = Math.floor(Math.random()*4)+2
        k2 = Math.floor(Math.random()*4)+2
        console.log(k1,k2)
    }
    while (k3!=k4){
        k3 = Math.floor(Math.random()*4)+2
        k4 = Math.floor(Math.random()*4)+2
    }
    
    st1.innerText ='Обломова'+ ':'+ k1
    st2.innerText ='Сидаров'+ ':'+ k2
    st3.innerText = 'Клющенко'+ ':'+ k1
    st4.innerText = 'Василенко'+ ':'+ k3
    st5.innerText = 'Пугачева'+ ':'+ k4
    st6.innerText = 'Галкин'+ ':'+ k2
    st7.innerText = 'Маслеников'+ ':'+ k3
    st8.innerText = ' Петров'+ ':'+ k1
    st9.innerText = 'Никитушкин'+ ':'+ k4
    st10.innerText = 'Заруев'+ ':'+ k1
    st10.innerText ='Михайлина'+ ':'+ k3
    outt.innerText ='Оценки'
    }

    let btn_mon = document.getElementById('btn_mon')
    let txt = document.getElementById('txt')
    let img = document.getElementById('img')
    
    
     btn_mon.onclick = f4
    
    function f4(){
            
            function randomIntFromInterval(min, max) {  
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              
              const rndInt = randomIntFromInterval(1, 2)
              console.log(rndInt)
              if ( rndInt === 1){
              txt.innerText = 'ОРЁЛ' 
              img.setAttribute('src',"tail.jpg")
              }   
              else if (rndInt === 2){
              txt.innerText = 'РЕШКА'
              img.setAttribute('src',"head.jpg" )
              }
        }
    



