/*
autor: Rafael Teixeira
semana = fc-week
dados = div ('fc-content-skeleton') >> table >> tbody >> td ( 'fc-event-container') >> a >> div ('fc-content') >> span ('fc-time')
*/

function buttonClicked(){

    let params = {
        active: true,
        currentWindow: true
    }
    
    chrome.tabs.query(params, gotTabs)

    function gotTabs(tabs){
        console.log("toc toc")
        console.log(tabs)
    
    
    let msg = {
        txt: "calcular"
    }

    chrome.tabs.sendMessage(tabs[0].id ,msg);
}


}
buttonClicked();