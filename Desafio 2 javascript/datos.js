var cantidad=0;
var acumulador=0;
var contador=0;


function calcular()
{
    var nota1=parseInt(document.listado.nota1.value);
    var nota2=parseInt(document.listado.nota2.value);
    var nota3=parseInt(document.listado.nota3.value);
    var nota4=parseInt(document.listado.nota4.value);
    var total=nota1+nota2+nota3+nota4;
    var promedio=total/4;
    document.listado.promedio.value=promedio
    return promedio;
}

function aprobar()
{
    cantidad++;

    var nota1=parseInt(document.listado.nota1.value);
    var nota2=parseInt(document.listado.nota2.value);
    var nota3=parseInt(document.listado.nota3.value);
    var nota4=parseInt(document.listado.nota4.value);
    var examen=parseInt(document.listado.examen.value);
    var evaluacion
    
    cantidad++;

    if (nota1>=80 && nota2>=80 && nota3>=80 && nota4>=80 && examen>=80)
    {
        evaluacion="Aprobado"
        document.listado.evaluacion.value=evaluacion
        return evaluacion
        
    }
    else
    {
        evaluacion="Reprobado"
        document.listado.evaluacion.value=evaluacion
        return evaluacion
       
    }
    

 
}



function registrar()
{
    var nombre=document.listado.nombre;
    var nota1=document.listado.nota1;
    var nota2=document.listado.nota2;
    var nota3=document.listado.nota3;
    var nota4=document.listado.nota4;
    var examen=document.listado.examen;
    var evaluacion=document.listado.evaluacion;
    document.listado.promedio.value=promedio

   // var tabla=document.getElementById('alumnos').querySelector('tbody');
    //var newRow=tabla.insertRow();
    //addData(newRow,nombre.value);
    //addData(newRow,nota1.value);
    //addData(newRow,nota2.value);
    //addData(newRow,nota3.value);
   // addData(newRow,nota4.value);
   // addData(newRow,examen.value);
   // addData(newRow,promedio.value);
   // addData(newRow,evaluacion.value);

    nombre.value="";
    nota1.value="";
    nota2.value="";
    nota3.value="";
    nota4.value="";
    examen.value="";
    promedio.value="";
    evaluacion.value="";
    //document.listado.Agregar=n

}







//Validar que no contenga numeros
function validacacion_nombre(e)
{
    key = e.keyCode;

	teclado = String.fromCharCode(key);

	letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefgjhijklmnñopqrstuvwxyz";
    if(letras.indexOf(teclado)==-1)
    {
		return false;
	}
}
//Validar que no contenga letras
function validacion_numeros(e)
{
    key = e.keyCode
	teclado = String.fromCharCode(key);
	numeros = "0123456789";

    if(numeros.indexOf(teclado)==-1)
    {
		return false;
	}
}


function color(validacion)
{
	var cambiar = document.getElementById(validacion);
    cambiar.style.backgroundColor="#5DADE2";
}