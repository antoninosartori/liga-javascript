
//POSICIONES

//valor inicial para el array de posiciones
let selectPosicionesResult = arrayEquipos.filter(equipos => equipos.division === 'a' && equipos.categoria === 'primera')
.sort((a,b) => (b.pts * 1000 + b.dif) - (a.pts * 1000 + a.dif) );
//mostrando el valor inicial
crearTabla(selectPosicionesResult)

function getTablasPosiciones(){
    let divisionValue = 'a';
    let categoriaValue = 'primera';

    selectPosicionesDivision.addEventListener('change', (e) => {
        divisionValue = e.target.value;
        return divisionValue;
    })

    selectPosicionesCategoria.addEventListener('change', (e) => {
        categoriaValue = e.target.value;
        return categoriaValue;
    })

    formPosiciones.addEventListener('change', (e) => {
        selectPosicionesResult = arrayEquipos.filter(equipos => equipos.division === divisionValue && equipos.categoria === categoriaValue).sort((a,b) => (b.pts * 1000 + b.dif) - (a.pts * 1000 + a.dif) );
        crearTabla(selectPosicionesResult)
    })

}

function crearTabla(selectPosiciones){

    tablaContainer.innerHTML = ''

    selectPosiciones.map((division, idx)  => {
        const pos = document.createElement('h3');
        pos.textContent = idx + 1;
        pos.classList.add('pos')
    
        const escudoEquipo = document.createElement('img');
        escudoEquipo.classList.add('escudo');
        escudoEquipo.setAttribute('src', division.escudo_equipo);

        const nombreEquipo = document.createElement('h2');
        nombreEquipo.textContent = division.nombre_equipo;
        nombreEquipo.classList.add('nombreEquipo')
    
        const pts = document.createElement('h2')
        pts.textContent = division.pts;
        pts.classList.add('pts')
    
        const pj = document.createElement('h2')
        pj.textContent = division.pj;

        const pg = document.createElement('h2')
        pg.textContent = division.pg;

        const pe = document.createElement('h2')
        pe.textContent = division.pe;

        const pp = document.createElement('h2')
        pp.textContent = division.pp;

        const gf = document.createElement('h2')
        gf.textContent = division.gf;

        const gc = document.createElement('h2')
        gc.textContent = division.gc;

        const dif = document.createElement('h2')
        dif.textContent = division.dif;

        const tablaRow = document.createElement('div');
        tablaRow.classList.add('tablaRow')
        tablaRow.append(pos,escudoEquipo,nombreEquipo,pts, pj,pg,pe,pp,gf,gc,dif)
        tablaContainer.append(tablaRow)
    })

    
}

getTablasPosiciones()


//PARTIDOS

//valor inicial para el array de partidos
let selectPartidosResult = partidos.filter(partido => partido.division === 'a' && partido.categoria === 'primera' && partido.jornada === 1)

//mostrando el valor inicial
crearPartidoArticles(selectPartidosResult)


function getPartidos(){
    let divisionValue = 'a';
    let categoriaValue = 'primera';
    let jornadaValue = 1;

    selectPartidosDivision.addEventListener('change', (e) => {
        divisionValue = e.target.value;
        return divisionValue;
    });

    selectPartidosCategoria.addEventListener('change', (e) => {
        categoriaValue = e.target.value;
        return categoriaValue;
    });

    selectPartidosJornada.addEventListener('change', (e) => {
        jornadaValue = e.target.value;
        return jornadaValue;
    });

    formPartidos.addEventListener('change', () => {
        selectPartidosResult = partidos.filter(partido => 
            partido.division === divisionValue 
            && partido.categoria === categoriaValue 
            && partido.jornada == jornadaValue)
        
        crearPartidoArticles(selectPartidosResult)
    });

}

function crearPartidoArticles(selectPartidosResults){
    partidosContainer.innerHTML = '';

    selectPartidosResults.map(partido => {

        const articlePartidos = document.createElement('article');
        articlePartidos.classList.add('partidoArticle');

        const escudoEquipoLocal = document.createElement('img');
        escudoEquipoLocal.setAttribute('src', partido.local.escudo_equipo);
        escudoEquipoLocal.classList.add('escudo')

        const equipoLocal = document.createElement('h2');
        equipoLocal.textContent = partido.local.nombre_equipo;

        const golLocal = document.createElement('h2');
        golLocal.textContent = partido.golLocal;

        const divisor = document.createElement('span')
        divisor.textContent = '-'

        const golVisitante = document.createElement('h2');
        golVisitante.textContent = partido.golVisitante;

        const equipoVisitante = document.createElement('h2');
        equipoVisitante.textContent = partido.visitante.nombre_equipo;

        const escudoEquipoVisitante = document.createElement('img');
        escudoEquipoVisitante.setAttribute('src', partido.visitante.escudo_equipo);
        escudoEquipoVisitante.classList.add('escudo')

        articlePartidos.append(escudoEquipoLocal,equipoLocal,golLocal,divisor,golVisitante,equipoVisitante,escudoEquipoVisitante);
        partidosContainer.append(articlePartidos)
    })
}

getPartidos()