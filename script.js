/* WHILE
let cont = 0
while (cont < 10){
    document.write("O valor é: "+cont)
    document.write("<br>")
    cont++
}

let cont1 = 10
do{
    document.write("<br<br>")
    document.write("O valor é: "+cont1)
    document.write("<br>")
    cont1++
}while (cont1 == 0)

function AVISO(){
    alert("Esta é uma função")
}

AVISO()
*/

let novo = document.getElementById("IdNome")

function mudar(){
    let novo = document.getElementById("IdNome")
    document.getElementById("Titulo").innerHTML = novo.value;
}