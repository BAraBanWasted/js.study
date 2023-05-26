let S = document.getElementById ("S")
let H = document.getElementById ("H")
let m3 = document.getElementById ("m3")
let btn = document.getElementById ("btn")
let out = document.getElementById("out")
 btn.onclick = f1
 function f1 (){
    let result = S.value*H.value*m3.value
    out.innerText = "Стоймость фундамента" + result
 }





 let in1 = document.getElementById("in1")
 let in2 = document.getElementById("in2")
 let but = document.getElementById("but")
 let out_1 = document.getElementById("out_1")
 but.onclick = f2 
 function f2() {
    let result_1 = (in1.value)*(in2.value)
    let sale = (in1.value)*5/100
    let sale1 = (in1.value)*10/100
    let sale2 = (in1.value)*20/100
    let result_2 = ((in1.value)-(sale))*(in2.value)
    let result_3 = ((in1.value)-(sale1))*(in2.value)
    let result_4 = ((in1.value)-(sale2))*(in2.value)
    if (in2.value>=100){
        
        out_1.innerText = "С учетом скидки" + result_2
    }
     else if (in2.value>=200){
        
        out_1.innerText = "С учетом скидки" + result_3
    }
     else if (in2.value>=300){
        
        out_1.innerText = "С учетом скидки" + result_4
    }
   else{ out_1.innerText = "Цена " + result_1 } 
 }