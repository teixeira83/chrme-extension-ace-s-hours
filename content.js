chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, senResponse) {
    
        var vetorSemanas = document.getElementsByClassName('fc-content-skeleton');
        const horaBase = 32400000

        var bancoDeHoras = 0

        for(let i = 0; i < vetorSemanas.length; i++){
            let tbody = vetorSemanas[i].getElementsByTagName('tbody')
            let tr = tbody[0].getElementsByTagName('tr')
            let vetorEntradas = tr[0].getElementsByClassName('fc-event-container')
            let vetorSaidas = tr[1].getElementsByClassName('fc-event-container')

            if( vetorEntradas.length == vetorSaidas.length ){
                let tamanhoSemana = vetorEntradas.length
                for(let j = 0; j < tamanhoSemana; j++){
                    let entrada = vetorEntradas[j].getElementsByClassName('fc-time')[0].innerHTML
                    let saida = vetorSaidas[j].getElementsByClassName('fc-time')[0].innerHTML
                    
                    //formatando hora de entrada
                    let rawEntrada = entrada.split(':')
                    let horaEntrada = rawEntrada[0]
                    let minutoEntrada = rawEntrada[1]
                    let dataEntrada = new Date(0,0,0,horaEntrada, minutoEntrada)
                    
                    //formatando hora de saida
                    let rawSaida = saida.split(':')
                    let horaSaida = rawSaida[0]
                    let minutoSaida = rawSaida[1]
                    let dataSaida = new Date(0,0,0,horaSaida, minutoSaida)

                    /*
                        1- Calcular horas trabalhadas por dia
                        2- Pegar a diferença entre as horas trabalhadas com a hora base ( 09:00h)
                        3- Somar no Banco de Horas
                    */ 
                    let horasTrabalhadas = dataSaida - dataEntrada
                    let dif = horasTrabalhadas - horaBase 
                    bancoDeHoras += dif
                }
            }
        }

        await milisecondsToTime(bancoDeHoras).then(res => {
            let vetorHora = res
            vetorHora = vetorHora.split(':')

            if( parseInt(vetorHora[0], 10) < 0 ) {
                vetorHora[1] *= -1
            }
            if( parseInt(vetorHora[1], 10) > 0 ) {
                horaFormatada(vetorHora).then(hora => {
                    alert(`Seu banco de horas é igual a ${hora} hrs
                            Cuidado! Você está com horas negativas!
                            Utilizando o meu incrível porder computacional é possível estimar que haja 99% de chance de você ser o barba!`)    
                })
            }else{
                horaFormatada(vetorHora).then(hora => {
                    alert(`Seu banco de horas é igual a ${hora} hrs
                            Parabéns! Você está com horas sobrando que não lhe serão pagas!`)
                })
            console.log(vetorHora[0])
            console.log(vetorHora[1])
            console.log(vetorHora[2])
            }
        })
}

async function milisecondsToTime(s){
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    
    return hrs + ':' + mins + ':' + '0' + secs;
}

async function horaFormatada(vetor) {
    return vetor[0] + ':' + vetor[1] + ':' + vetor[2];
}