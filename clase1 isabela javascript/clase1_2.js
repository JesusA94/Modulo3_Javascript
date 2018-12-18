
setInterval("mostrarNav()",1000);//llamar a una funcion cada 2 segundos

function mostrarNav(){
    let nav=document.getElementById("nav");
    if(nav==undefined){
        console.log("Error. no se encuentra el id nav")
    }else{
        if(nav.style.display=="none")//quita el nav si esta visible, y si no aparece,  precionando un botton 
        nav.style.display="block";
        else
        nav.style.display="none";
    }
}

function modificarbanner(){
    mostrarNav();//llamo a las funciones para que me funcionen con el mismo click
    modificarli();
    let banner=document.getElementById("banner");
    if(banner==undefined){
        console.log("ERROR. no se encruentra el id banner")
    }else{
        banner.innerHTML="<br><br><br><h1>Esto es nuevo</h1>"; //se sobre escribio banner
        //banner.innerHTML+="<br><br><br><h1>Esto es nuevo</h1>" //se agrego nuevo contenido al banner sin borrar el anterior
        //banner.innerHTML="<img src='img/imagen03.jpg'/>" se le agrego un imagen al archivo
    }
}
function modificarli(){//modifico el li Inicio colocandole el texto CAMBIO; con el onclick
    let li=document.getElementById("li");
    if(li==undefined){
        console.log("Error. no de encuentra el id li");
    }else{
        li.innerHTML="CAMBIO";
    }

}