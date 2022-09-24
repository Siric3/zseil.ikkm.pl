function load(){
    var c = document.cookie
    console.log(c);
    if(document.cookie == '')document.cookie='kolor=jasny';
    if(document.cookie == 'kolor=ciemny')darkmode(1);
    else darkmode(0);
}
function darkmode(i) {
    const elem = document.getElementById('bdy');
    if(i==1){
        elem.style.backgroundColor = "gray";
        document.cookie = 'kolor=ciemny';
    }
    else{
        elem.style.backgroundColor = "white";
        document.cookie == 'kolor=jasny';
    }
}