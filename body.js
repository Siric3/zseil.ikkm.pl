function darkmode() {
    var val = document.getElementById('dark').value
    const elem = document.getElementById('bdy');
    if(val==1)elem.style.backgroundColor = "gray";
    else elem.style.backgroundColor = "white";
    console.log(val);
}