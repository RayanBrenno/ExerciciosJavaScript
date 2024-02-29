let perguntaFinal

do{
let pergunta=prompt("Oque deseja fazer?\n"
                    +"1-Somar\n"
                    +"2-Subtrair\n"
                    +"3-Multiplicar\n"
                    +"4-Dividir\n"
                    +"5-Calcular fatorial")
                   
switch(Number(pergunta)){
        case 1:{
        window.alert(somar())
        break
        }
        case 2:{
        window.alert(subtrair())
        break
        }
        case 3:{
        window.alert(multiplicar())
        break
        }
        case 4:{
        window.alert(dividir())
        break
        }
        case 5:{
        window.alert(fatorial())
        break
        }
        default:{
        window.alert("Digite um número corresponde a ação desejada")
        break
        }
    }
    
perguntaFinal=prompt("Deseja finalizar o programa?\n"
                    +"Digite 's' ou 'S' ")

}while(perguntaFinal.toUpperCase() !="S")

function somar(){
    let n1=Number(prompt("Digite um número"))
    let n2=Number(prompt("Digite outro número"))
    return "A soma dos dois números é "+(n1+n2)
}

function subtrair(){
    let n1=Number(prompt("Digite um número"))
    let n2=Number(prompt("Digite outro número"))
    return "A subtração do primeiro numero pelo segunddo é "+(n1-n2)
}

function multiplicar(){
    let n1=Number(prompt("Digite um número"))
    let n2=Number(prompt("Digite outro número"))
    return "A multiplicação dos dois números é "+(n1*n2)
}

function dividir(){
    let n1=Number(prompt("Digite um número"))
    let n2=Number(prompt("Digite outro número"))
    return "O primeiro número dividido pelo segundo é "+(n1/n2)
}

function fatorial(){
    let n1=Number(prompt("Digite um número"))
    let fatorial=1
    for(let i=1;i<=n1;i++){
        fatorial *=i
    }
    return "O fatorial do número é "+fatorial
}

window.alert("Bye,Bye gatinho <3")