chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, senResponse) {
    
    
        var vetorSemanas = document.getElementsByClassName('fc-content-skeleton');
        var horas = 0 

        for(let i = 0; i < vetorSemanas.length; i++){
            let tbody = vetorSemanas[i].getElementsByTagName('tbody')
            let tr = tbody[0].getElementsByTagName('tr')
            let vetorEntradas = tr[0].getElementsByClassName('fc-event-container')
            let vetorSaidas = tr[1].getElementsByClassName('fc-event-container')

            if( vetorEntradas.length == vetorSaidas.length ){
                let tamanhoSemana = vetorEntradas.length
                // console.log(vetorEntradas)
                // console.log(vetorSaidas)
                for(let j = 0; j < tamanhoSemana; j++){
                    horas++
                    console.log(vetorEntradas[j].getElementsByClassName('fc-time')[0].innerHTML)
                    console.log(vetorSaidas[j].getElementsByClassName('fc-time')[0].innerHTML)
                    
                    
                }
            }
        }

        console.log(horas)
    
}

