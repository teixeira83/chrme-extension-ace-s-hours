chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, senResponse) {
    
        var vetorSemanas = document.getElementsByClassName('fc-content-skeleton');
        var horasMes = 0

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
                    console.log(dataEntrada)

                    //formatando hora de saida
                    let rawSaida = saida.split(':')
                    let horaSaida = rawSaida[0]
                    let minutoSaida = rawSaida[1]
                    let dataSaida = new Date(0,0,0,horaSaida, minutoSaida)
                    console.log(dataSaida)

                    //data base para calculo de diferenca
                    let dataBase = new Date(0,0,0,'08','00')
                    let horasTrabalhadas = dataSaida.getTime() - dataEntrada.getTime()
                    let diferencaDia = horasTrabalhadas - dataBase;
                    horasMes += diferencaDia 
                    console.log(milisecondsToTime(horasMes))
                    
                }
            }
        } 
}

async function milisecondsToTime(s){
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    
    return '0' + hrs + ':' + mins + ':' + '0' + secs + '.' + ms;
}

