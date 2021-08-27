// Criando um sistema de cadastro para eventos

// Informando a data do evento
let DataEvento = "21/12/2021";
console.log("A data do evento é: ", DataEvento)

// Informando a data atual e checando se a data do evento é posterior à data atual
let DataAtual = "01/08/2021";
console.log("A data atual é: ", DataAtual)
if (DataEvento > DataAtual) {
    console.log("Pode continuar com o seu cadastro")
} else {
    console.log("O cadastro não é permitido, pois o evento já ocorreu")
}
 
// Checando se o participante é maior de idade (18 anos)
let AnoNascimento = 2000
let AnoAtual = 2021
if (AnoAtual - AnoNascimento >= 18) {
    console.log("Idade permitida! Pode continuar com o seu cadastro")
} else {
    console.log("O cadastro não é permitido, pois o participante não tem 18 anos")
}

// Criando a lista de participantes e checando se ela já está completa (total de participantes < 100)
const ListaDeParticipantes = ["Enzo", "Pedro", "Juliana", "Marina", "Jamile", "Thiago"]
console.log("A lista de participantes é ", ListaDeParticipantes)
if (ListaDeParticipantes.length < 100) {
    console.log ("Cadastro feito com sucesso!")
} else {
    console.log ("O cadastro não é permitido, pois a lista de participantes já está completa")
}