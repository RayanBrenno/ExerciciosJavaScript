let perguntafinal

do{
let pergunta=prompt("Oque deseja fazer?\n"
+"1=Fazer uma declaração de amor. \n"
+"2=Trocar letras por numeros.\n"
+"3=Gerar um email com base na data atual\n"
+"4=Gerar uma senha\n"
+"5=Ser feliz")

switch(Number(pergunta)){
    case 1: 
        window.alert(declaracao())
        break
    case 2:
        window.alert(trocarLetrasPorNumero())
        break
    case 3: 
        window.alert(emailDataAtual())
        break
    case 4:
        window.alert(gerarSenha())
        break
    case 5:
        window.alert(serfeliz())
        break
}

perguntafinal=prompt("Deseja finalizar o programa? \n"
+"Digite s ou S")

}while(perguntafinal.toUpperCase() != 'S')

function declaracao(){
    let frase=prompt("Digite uma bela frase de declaração")
    let frasefinal=''

    for(let i=0;i<frase.length;i++){

        if(frase[i].toUpperCase()=='A' && frase[i+1].toUpperCase()=='M' && frase[i+2].toUpperCase()=='O'&& frase[i+3].toUpperCase()=='R'){
        frasefinal+='❤️'
        i+=3
        continue
        }
        frasefinal+=frase[i]
    }
    return "Sua declaração de amor é \n"+frasefinal
}

function trocarLetrasPorNumero(){
    let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                 "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let frase=prompt("Digite a frase que deseja trocar por numeros")
    let frasefinal=''

    for(let i=0;i<frase.length;i++){

        for(let j=0;j<alfabeto.length;j++){
            if(frase[i].toUpperCase()==alfabeto[j]){
                frasefinal+= (j+1)+" "
            }
        }
        if(frase[i]==" ")frasefinal+="   " 
    }
    return "Sua frase trocado por numeros é \n"+frasefinal
}

function emailDataAtual(){
    let perguntarNome=prompt("Digite seu usuario")
    let perguntarData=prompt("Digite a data atual \n"
                            +"Ano-Mês-Dia")
    let data= new Date(perguntarData)
    let ano=data.getFullYear()
    let dia=((data.getDate())+1)
    let email=dia+perguntarNome+ano+"@gmail.com"
    return "Seu email gerado é "+email

}

function gerarSenha(){
    let algo=prompt("Digite algo que goste")
    const n=Math.floor(Math.random()*(100-20)+20)
    let simbolos=[]

    for(let i=0;i<3;i++){
        let j=Math.floor(Math.random()*100)
        if(j>0 && j<33) simbolos[i]="#"
        if(j>=33 && j<66) simbolos[i]="!"
        if(j>=66 && j<=100) simbolos[i]="&"
    }

    let senha = simbolos[0]+algo+simbolos[1]+n+simbolos[2]
    return "Sua senha gerada é "+senha
}

function serfeliz(){
    return "Amor é tudo nessa vida, entao sempre viva a vida com o maximo de alegria, meu pequeno guaxinim voador ❤️"
}

window.alert("Obrigado por usar nosso programa, volte sempre ❤️") 
 