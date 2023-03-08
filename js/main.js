
let nombreAlumno = prompt("Ingresar Nombre del Alumno");
let apellidoAlumno = prompt("Ingresar Apellido del Alumno");
let nota1, nota2, nota3;
nota1 = prompt('Ingrese 1ra. nota del 1 al 10:');
nota2 = prompt('Ingrese 2ra. nota del 1 al 10:');
nota3 = prompt('Ingrese 3ra. nota del 1 al 10:');
nota1 = parseInt(nota1);
nota2 = parseInt(nota3);
nota3 = parseInt(nota2);



function promedioNotaAlumnos(nota1, nota2, nota3) {

    let promedioNota = (nota1 + nota2 + nota3) / 3;
    if (promedioNota >= 7) {
        document.write("El alumno " + nombreAlumno + " " + apellidoAlumno + " tiene un promedio de " + promedioNota + " Y es alumno Promocionado");
    } else {
        if (promedioNota >= 4) {
            document.write("El alumno " + nombreAlumno + " " + apellidoAlumno + " tiene un promedio de " + promedioNota + " Y es alumno Regular");
        } else {
            document.write("El alumno " + nombreAlumno + " " + apellidoAlumno + " tiene un promedio de " + promedioNota + " Y es alumno Libre");
        }
    }

}

promedioNotaAlumnos(nota1, nota2, nota3);
