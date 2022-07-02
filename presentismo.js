//-------------------------UTILS------------------------------//

//OBTENGO EL ARCHIVO .TXT CON LOS DATOS SUCIOS
const fs = require("fs");
const archivo = fs.readFileSync("./datos.txt", "UTF-8");

//CONSTRUCTOR DE EMPLEADOS
function empleado(id, nombre, fechas, horas, asistencia, llegada_tarde, retiro_anticipado) {
  this.id = id;
  this.nombre = nombre;
  this.fechas = fechas;
  this.horas = horas;
  this.asistencias = asistencia;
  this.llegada_tarde = llegada_tarde;
  this.retiro_anticipado = retiro_anticipado;
}

//INSTANCIA DE UN EMPLEADO BASE EN UN ARRAY DE EMPLEADOS
let empleado0 = new empleado("", "", [], []);
let arrayEmpleados = [empleado0];

//BUSCA SI EXISTE UN EMPLEADO EN EL ARRAY DE EMPLEADOS
//NOS DEVUELVE EL INDICE DEL ARRAY SI LO ENCUENTRA
//SI NO EXISTE DEVUELVE -1
function buscarEmpleado(id) {
  let existe = -1;
  for (let i = 0; i < arrayEmpleados.length; i++) {
    if (arrayEmpleados[i].id == id) {
      existe = i;
    }
  }
  return existe;
}

//-----------------------FIN UTILS---------------------------//

//SEPARO CADA FILA DEL ARCHIVO SUCIO EN ELEMENTO DE UN ARRAY
let arrayFilas = archivo.split(/\n/, -1);

//SE FILTRAN LAS FILAS CON DATOS SUCIOS Y SE ORGANIZA TODO COMO UN ARRAY DE EMPLEADOS
arrayFilas.forEach((element) => {
  //SE INDIVIDUALIZA CADA COLUMNA DE LA FILA DE DATOS SUCIOS
  let arrayDatos = element.split(/\s/, -1);

  //SE GUARDAN UNICAMENTE LAS COLUMNAS QUE NOS INTERESAN
  let idEmpleado = arrayDatos[2];
  let nombre = arrayDatos[3];
  let fecha = arrayDatos[6];
  let hora = arrayDatos[7];

  //BUSCAMOS SI YA HAY UNA COINCIDENCIA DEL EMPLEADO EN EL ARRAY DE EMPLEADOS
  existeEmpleado = buscarEmpleado(idEmpleado);

  //SI YA EXISTE ESE EMPLEADO UNICAMENTE LE ADICIONAMOS LA FECHA Y HORA NUEVA
  if (existeEmpleado != -1) {
    arrayEmpleados[existeEmpleado].fechas.push(fecha);
    arrayEmpleados[existeEmpleado].horas.push(hora);
  }
  //SI NO EXISTE LO CREAMOS Y LO ADICIONAMOS AL ARRAY DE EMPLEADOS
  else {
    let empleadoNuevo = new empleado(idEmpleado, nombre, [], []);
    arrayEmpleados.push(empleadoNuevo);
    indexEmpleadoNuevo = buscarEmpleado(idEmpleado);
    arrayEmpleados[indexEmpleadoNuevo].fechas.push(fecha);
    arrayEmpleados[indexEmpleadoNuevo].horas.push(hora);
  }
});
console.log(arrayEmpleados);



//--------PROBANDO
let hora1 = 093000;
let hora2 = 170000;

let resultado = (hora2 - hora1);

function agregarCaracter(cadena, caracter, pasos){
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
        if (i + pasos < longitudCadena) {
            cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }
    return cadenaConCaracteres;
}

function obtenerHorasTranscurridas(horaInicio, horaFin){
    let horaInicioLimpia = horaInicio.replace(":","");
    horaInicioLimpia = horaInicioLimpia.replace(":","");

    let horaFinLimpia = horaFin.replace(":","");
    horaFinLimpia = horaFinLimpia.replace(":","");
  
    let horasTranscurridas = (horaFinLimpia - horaInicioLimpia).toString();

    if(horasTranscurridas.length < 6){
        horasTranscurridas = "0" + horasTranscurridas;
    }
    
    let horas = horasTranscurridas[0] + horasTranscurridas[1]
    let minutos = horasTranscurridas[2] + horasTranscurridas[3];
    let segundos = horasTranscurridas[4] + horasTranscurridas[5];

    if(segundos > 59){
       let diferenciaSegundos = segundos - 59;
       segundos = diferenciaSegundos;
       minutos = parseInt(minutos) + 1;
    }

    

   console.log(horas);
   console.log(minutos);
   console.log(segundos);
   

}
    
obtenerHorasTranscurridas("09:30:10","17:00:00")


