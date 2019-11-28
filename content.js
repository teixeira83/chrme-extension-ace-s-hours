chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, senResponse) {
    console.log(message);

    if( message.txt === "calcular") { 
        var vetorSemanas = document.getElementsByClassName('fc-content-skeleton');
        var contador = 0

        for(let i = 0; i < vetorSemanas.length; i++){
            let tbody = vetorSemanas[i].getElementsByTagName('tbody')
            let tr = tbody[0].getElementsByTagName('tr')
            let vetorEntradas = tr[0].getElementsByClassName('fc-event-container')
            let vetorSaidas = tr[1].getElementsByClassName('fc-event-container')

            if( vetorEntradas.length == vetorSaidas.length ){
                contador++
            }
        }
        console.log(`SEMANAS VALIDAS = ${contador}`)
    }
}