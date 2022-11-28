// array donde se cargan todos los partidos
let partidos = [];

/* //subdivision donde ya estan separados por duvision. Sigue funcionando la suma de las estadisticas
let primeraDivision = arrayEquipos.filter(equipos => equipos.division === 'a');
let segundaDivision = arrayEquipos.filter(equipos => equipos.division === 'b'); */


function partido(jornada, division, categoria ,dia, equipoLocal, golLocal, equipoVisitante, golVisitante){

    let local = arrayEquipos.find(e => e.nombre_equipo === equipoLocal && e.categoria === categoria);
    let visitante = arrayEquipos.find(e => e.nombre_equipo === equipoVisitante && e.categoria === categoria);

    if (golLocal && golVisitante === '-') {return partidos.push({jornada, division , categoria , dia, local, golLocal, golVisitante, visitante }) 
    }
    else if(golLocal > golVisitante){
        sumaPunto(local, visitante, 'VL', golLocal, golVisitante);
        return partidos.push({jornada, division, categoria , local, visitante, golLocal, golVisitante, dia,})
    }
    else if(golLocal < golVisitante){
        sumaPunto(local, visitante, 'VV', golLocal, golVisitante);
        return partidos.push({jornada, division, categoria , local, visitante, golLocal,golVisitante, dia,})
    }
    else if(golLocal === golVisitante){
        sumaPunto(local, visitante, 'E', golLocal, golVisitante);
        return partidos.push({jornada, division, categoria , local, visitante, golLocal, golVisitante, dia,})
    } 
}

function sumaPunto(equipoLocal, equipoVisitante, resultado, golLocal, golVisitante){
    if(resultado === 'VL'){
        equipoLocal.pts = equipoLocal.pts + 3;
        equipoLocal.pj++;
        equipoLocal.pg++;
        equipoLocal.gf = equipoLocal.gf + golLocal;
        equipoLocal.gc = equipoLocal.gc + golVisitante;
        equipoLocal.dif = equipoLocal.dif + (golLocal - golVisitante);

        equipoVisitante.pj++;
        equipoVisitante.pp++;
        equipoVisitante.gf = equipoVisitante.gf + golVisitante;
        equipoVisitante.gc = equipoVisitante.gc + golLocal;
        equipoVisitante.dif = equipoVisitante.dif + (golVisitante - golLocal);

    } else if (resultado === 'VV'){
        equipoLocal.pj++;
        equipoLocal.pp++;
        equipoLocal.gf = equipoLocal.gf + golLocal;
        equipoLocal.gc = equipoLocal.gc + golVisitante;
        equipoLocal.dif = equipoLocal.dif + (golLocal - golVisitante);
        
        equipoVisitante.pts = equipoVisitante.pts + 3;
        equipoVisitante.pj++;
        equipoVisitante.pg++;
        equipoVisitante.gf = equipoVisitante.gf + golVisitante;
        equipoVisitante.gc = equipoVisitante.gc + golLocal;
        equipoVisitante.dif = equipoVisitante.dif + (golVisitante - golLocal);

    } else{
        equipoLocal.pts++;
        equipoLocal.pj++;
        equipoLocal.pe++;
        equipoLocal.gf = equipoLocal.gf + golLocal;
        equipoLocal.gc = equipoLocal.gc + golVisitante;
        equipoLocal.dif = equipoLocal.dif + (golLocal - golVisitante);


        equipoVisitante.pts++;
        equipoVisitante.pj++;
        equipoVisitante.pe++;
        equipoVisitante.gf = equipoVisitante.gf + golVisitante;
        equipoVisitante.gc = equipoVisitante.gc + golLocal;
        equipoVisitante.dif = equipoVisitante.dif + (golVisitante - golLocal);
    }
}




// simulacion de un input en donde le da el valor de la division y de la jornada, y luego se hace el filtro
// esto se puede aplicar como una funcion onClick al option
/* let valorDivision = 'a';
let valorJornada = 2
let fechaDivision = partidos.filter(partido => partido.division === valorDivision && partido.jornada === valorJornada); */

//tabla ordenada por pts y por diferencia de goles
/* console.log(arrayEquipos.sort((a,b) => b.pts - a.pts).sort((a,b) => b.dif - a.dif)) */



//idea para armar arreglos por fecha
/* let fechaPrimeraDivision = []
fechaPrimeraDivision.push(partidos.filter(partido => partido.jornada === 1 && partido.division === 'a'))
console.log(fechaPrimeraDivision) */
/*

Consideraciones

arrayEquipos => es el array de objetos en el cual estan todos los datos de los equipos
    Este puede ser utilizado para mostrar las posiciones utiizando el metodo .sort()

FUNCIONES 
Para cada fecha hay que ejecutar la funcion partido(), la cual recibe como parametro los siguientes valores:
    jornada: number, indica la fecha/jornada en la que se disputa el partido porej fecha 1 => 1
    division: string => 'a' => primera division - 'b' => segunda division (¿inferiores?)  
    dia: string 'Sabado 27/6' => puede utilizarse la terminologia que se quiera, pero en forma de string. 
    equipoLocal: string 'Nombre Equipo' (no debe tener errores de ortografia - ojo con minusculas/mayusculas)
    golLocal: number o string => se debera utilizar un number en caso de que el partido haya finalizado, ya que
        posibilitara que se sumen las estadisticas.
        => se debera usar un string con el siguiente valor '-' Esto es para poder mostrar los partidos que esten
        por disputarse.
    equipoVisitante: string
    golVisitante: number o string

    Esta funcion partido() lee el resultado que se le de, y llama a otra funcion sumaPunto()


POSIBLES MEJORAS

- Hacer una funcion fecha1() donde tenga todos los partidos por fecha
    esto podria ser que al hacer click en un option o select, se ejecute una funcion onClick la cual realiza
    un filter 
        ej 
        let fechaPrimeraDivision = []
        fechaPrimeraDivision.push(partidos.filter(partido => partido.jornada === 1 && partido.division === 'a'))
        fechaPrimeraDivision.filter(partido => partido.jornada === jornadaDinamica && partido.division === divisionDinamica)

*/



/* partidos.map(partido => {
    if(partido.golLocal && partido.golVisitante === '-' ){console.log(`${partido.equipoLocal} vs ${partido.equipoVisitante}`)}
    else{ console.log(`${partido.equipoLocal} ${partido.golLocal} - ${partido.golVisitante} ${partido.equipoVisitante}`) }
}) */