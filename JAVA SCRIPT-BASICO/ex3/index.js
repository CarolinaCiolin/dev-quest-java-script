const ConfirmaHospedagem = confirm("Bem vindo, aventureiro, aventureiro! Gostaria de pagar R$50,00 para passar a noite na hospedagem?")

if(ConfirmaHospedagem){
    alert('Ótimo! Nós temos as melhores camas de toda a região!')
} else if(ConfirmaHospedagem === false){
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}