//Cedula y Telefono solo ingresar numeros no letras 
function isNumber(event)
{
    var key = (event.which) ? event.which : event.keyCode;
    return (key >= 48 && key <= 57 && key != 41);
}
//Validar Correo
function validarcorreo(correo)
{
	regx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	if (regx.test(correo.value))
		return true;
	else
	{
		correo.focus();
		return false;
	}
}







//Registrar

function registrar()
{
    var cedula = document.getElementById('cedula').value;
    var nombre=document.getElementById('nombre').value;
    var fecha =document.getElementById('fecha').value;
    var sexo=document.getElementById('sexo').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
    var usuario=document.getElementById('usuario').value;
    var clave=document.getElementById('clave').value;
    var repetir=document.getElementById('repetir').value;
    var cursos=document.getElementById('cursos').value;
    var niveles=document.getElementById('niveles').value;
    var horario=document.getElementById('horario').value;


    document.form1.cedula.value=""
    document.form1.nombre.value=""
    document.form1.fecha.value=" "
    document.form1.sexo.value=""
    document.form1.correo.value=""
    document.form1.telefono.value=""
    document.form1.usuario.value=""
    document.form1.clave.value=""
    document.form1.repetir.value=""
    document.form1.cursos.value=""
    document.form1.niveles.value=""
    document.form1.horario.value=""






    if (validaciones(cedula,nombre,fecha,sexo,correo,telefono,usuario,clave,repetir,cursos,niveles,horario))
     {
        alert("Registrado exitosamente en el Curso");
     }
}

function validaciones(cedula,nombre,fecha,sexo,correo,telefono,usuario,clave,repetir,cursos,niveles,horario)
{
    var campoCedula = document.getElementById('campocedula');
    var campoNombre=document.getElementById('campoNombre');
    var campoFecha=document.getElementById('campoFecha');
    var campoSexo = document.getElementById('campoSexo');
    var campoCorreo=document.getElementById('campoCorreo');
    var campoTelefono=document.getElementById('campoTelefono');
    var campoUsuario=document.getElementById('campoUsuario');
    var campoClave=document.getElementById('campoClave');
    var campoConfirmar=document.getElementById('campoConfirmar');
    var campoCursos=document.getElementById('campoCusos');
    var campoNiveles=document.getElementById('campoNiveles');
    var campoHorario=document.getElementById('campoHorario');


    campoCedula.innerHTML = "";
    campoNombre.innerHTML = "";
    campoFecha.innerHTML = "";
    
    campoCorreo.innerHTML = "";
    campoTelefono.innerHTML = "";

    campoUsuario.innerHTML = "";
    campoClave.innerHTML = "";
    campoConfirmar.innerHTML = "";
    
    var resultados = true;
    if (cedula.trim() == "") 
    {
        campoCedula.innerHTML = "Debe Ingresar la Cedula";
        resultados = false;
    }
       
    if (nombre.trim() == "") 
    {
        campoNombre.innerHTML = "Debe Ingresar el Nombre ";
        resultados = false;
    }
        
    if (fecha.trim() == "") 
    {
        campoFecha.innerHTML = "Debe Poner la Fecha de Nacimiento ";
        resultados = false;
    }
    if (sexo.trim() == "") 
    {
        campoSexo.innerHTML = "Debe Seleccionar el Genero ";
        resultados = false;
    }
    if (correo.trim() == "") 
    {
        campoCorreo.innerHTML = "Debe Poner el Correo ";
        resultados = false;
    }
    if (telefono.trim() == "") 
    {
        campoTelefono.innerHTML = "Debe Poner el Telefono ";
        resultados = false;
    }
    if (usuario.trim() == "") 
    {
        campoUsuario.innerHTML = "Debe Poner Nombre de Usuario ";
        resultados = false;
    }
    if (clave.trim() == "") 
    {
        campoClave.innerHTML = "Debe Poner la Clave ";
        resultados = false;
    }
    if (repetir.trim() == "") 
    {
        campoConfirmar.innerHTML = "Debe Confirmar la Clave ";
        resultados = false;
    }
   
    if (cursos.trim() == "") 
    {
        campoCursos.innerHTML = "Debe Seleecionar un Curso ";
        resultados = false;
    }
    if (niveles.trim() == "") 
    {
        campoNiveles.innerHTML = "Debe Seleccionar un Nivel ";
        resultados = false;
    }
    if (horario.trim() == "") 
    {
        campoHorario.innerHTML = "Debe Poner el Horario ";
        resultados = false;
    }
    return resultados
}