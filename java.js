var btn = document.querySelector('#btnMostrar');
btn.addEventListener('click',function(){
    var ini = document.querySelector('#inicio').value;
    var fin = document.getElementById('final').value;
    calcularTabla(ini,fin);
});

function calcularTabla(ini,fin){
    var div = document.getElementById('res');
    var t = 0;
    for(var i=ini;i<=fin;i++){
        if(t%2==0){
            t++
        }
    }
    div.innerHTML = t;
}