function oddzial_click(ev){
    if(ev.target===ev.currentTarget)
        return;
    let clicked=ev.target;    
    if(ev.target.nodeName=='SPAN')    
        clicked=ev.target.parentNode;
        const url=clicked.innerText.replace(' gr. ','-')+'.php';
        window.open(url,'_blank');
}
function tools_change(ev){
    const option=ev.target.value;
    if(option.length){
        window.open(option,"_blank");
        ev.target.value="";
    }
}

document.querySelector("#oddzialy").addEventListener("click",oddzial_click);
document.querySelector("#tools").addEventListener("change",tools_change);