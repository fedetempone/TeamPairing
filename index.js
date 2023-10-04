const JUGADORES = [
    { 
      Nombre: "Metalero", 
      Habilidades: { 
        Ataque: "Bajo", 
        Defensa: "Bueno", 
        Velocidad: "Normal", 
        Aceleracion: "Normal", 
        Posicion: "Arquero" 
      },
      IMG: './jugadores/metalero.png'
    },
    { 
      Nombre: "Nico", 
      Habilidades: { 
        Ataque: "Bajo", 
        Defensa: "Bajo", 
        Velocidad: "Normal", 
        Aceleracion: "Normal", 
        Posicion: "Arquero" 
      },
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Leo", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Central" 
      },
      IMG: './jugadores/leo.png'
    },
    { 
      Nombre: "Nico(nano)", 
      Habilidades: { 
        Ataque: "Bajo", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Central" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Mati", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Normal", 
        Velocidad: "Normal", 
        Aceleracion: "Normal", 
        Posicion: "Lateral" 
      } ,
      IMG: './jugadores/mati.png'
    },
    { 
      Nombre: "Nano", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Lateral" 
      } ,
      IMG: './jugadores/nano.png'
    },
    { 
      Nombre: "Pichu", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Volante" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Fede(Mati)", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Volante" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Cristian", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Mediocampista" 
      } ,
      IMG: './jugadores/cristian.png'
    },
    { 
      Nombre: "Juampo", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Mediocampista" 
      } ,
      IMG: './jugadores/juampo.png'
    },
    { 
      Nombre: "Marce", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Bajo", 
        Velocidad: "Normal", 
        Aceleracion: "Normal", 
        Posicion: "Delantero" 
      } ,
      IMG: './jugadores/marce.png'
    },
    { 
      Nombre: "Nico(pichi)", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Bajo", 
        Velocidad: "Normal", 
        Aceleracion: "Bajo", 
        Posicion: "Delantero" 
      } ,
      IMG: './jugadores/pichinico.png'
    },
    { 
      Nombre: "Manolo", 
      Habilidades: { 
        Ataque: "Bajo", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Central" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Caco", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Central" 
      } ,
      IMG: './jugadores/caco.png'
    },
    { 
      Nombre: "Rulo", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Normal", 
        Velocidad: "Normal", 
        Aceleracion: "Bajo", 
        Posicion: "Lateral" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Ariel", 
      Habilidades: { 
        Ataque: "Bajo", 
        Defensa: "Bueno", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Lateral" 
      } ,
      IMG: './jugadores/ariel.png'
    },
    { 
      Nombre: "Lean", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Volante" 
      } ,
      IMG: './jugadores/lean.png'
    },
    { 
      Nombre: "Dario", 
      Habilidades: { 
        Ataque: "Normal", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Volante" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Seba", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Mediocampista" 
      } ,
      IMG: './jugadores/seba.png'
    },
    { 
      Nombre: "FedeT", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Bajo", 
        Velocidad: "Bueno", 
        Aceleracion: "Bueno", 
        Posicion: "Mediocampista" 
      } ,
      IMG: './jugadores/fedet.png'
    },
    { 
      Nombre: "Dany", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Bajo", 
        Velocidad: "Normal", 
        Aceleracion: "Bajo", 
        Posicion: "Delantero" 
      } ,
      IMG: './jugadores/none.jpg'
    },
    { 
      Nombre: "Lucas", 
      Habilidades: { 
        Ataque: "Bueno", 
        Defensa: "Normal", 
        Velocidad: "Bueno", 
        Aceleracion: "Normal", 
        Posicion: "Delantero" 
      } ,
      IMG: './jugadores/none.jpg'
    }
    ,
  ];

  //JUGADORES SUPLENTES

  // { 
  //   Nombre: "Copes", 
  //   Habilidades: { 
  //     Ataque: "Normal", 
  //     Defensa: "Normal", 
  //     Velocidad: "Normal", 
  //     Aceleracion: "Normal", 
  //     Posicion: "Volante" 
  //   } ,
  //   IMG: './jugadores/none.jpg'
  // }

  // { 
  //   Nombre: "Polar", 
  //   Habilidades: { 
  //     Ataque: "Normal", 
  //     Defensa: "Normal", 
  //     Velocidad: "Normal", 
  //     Aceleracion: "Bajo", 
  //     Posicion: "Delantero" 
  //   } ,
  //   IMG: './jugadores/none.jpg'
  // }
  // { 
  //   Nombre: "Ivan", 
  //   Habilidades: { 
  //     Ataque: "Bueno", 
  //     Defensa: "Normal", 
  //     Velocidad: "Bueno", 
  //     Aceleracion: "Bueno", 
  //     Posicion: "Volante" 
  //   } ,
  //   IMG: './jugadores/none.jpg'
  // }

  function formarEquipos(jugadores) {
    // Filtrar jugadores por posición
    const arqueros = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Arquero');
    const laterales = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Lateral');
    const centrales = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Central');
    const volantes = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Volante');
    const mediocampistas = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Mediocampista');
    const delanteros = jugadores.filter((jugador) => jugador.Habilidades.Posicion === 'Delantero');

    // Ordenar jugadores por habilidades
    arqueros.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));
    laterales.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));
    centrales.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));
    volantes.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));
    mediocampistas.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));
    delanteros.sort((a, b) => habilidadesTotal(b) - habilidadesTotal(a));

    // Armar equipos equilibrados
    const equipo1 = [
        arqueros[0],
        laterales[0],
        centrales[0],
        centrales[1],
        laterales[1],
        volantes[0],
        mediocampistas[0],
        volantes[1],
        mediocampistas[1],
        delanteros[0],
        delanteros[1],
    ];

    const equipo2 = [
        arqueros[1],
        laterales[2],
        centrales[2],
        centrales[3],
        laterales[3],
        volantes[2],
        mediocampistas[2],
        volantes[3],
        mediocampistas[3],
        delanteros[2],
        delanteros[3],
    ];

    return { equipo1, equipo2 };

    // Función auxiliar para calcular la puntuación de habilidades de un jugador
    function habilidadesTotal(jugador) {
        return jugador.Habilidades.Ataque + jugador.Habilidades.Defensa + jugador.Habilidades.Velocidad + jugador.Habilidades.Aceleracion;
    }
}

const equipos = formarEquipos(JUGADORES);

function mostrarJugadoresEnPagina() {
    const equipo1 = document.getElementById("equipo1");
    const equipo2 = document.getElementById("equipo2");

    // Define el orden deseado de las posiciones
    const ordenPosiciones = [
        'Arquero',
        'Lateral',
        'Central',
        'Central',
        'Lateral',
        'Volante',
        'Mediocampista',
        'Volante',
        'Mediocampista',
        'Delantero',
        'Delantero'
    ];

    // Función para agregar un jugador al equipo
    function agregarJugadorALista(jugador, lista, numeroClase) {
        const div = document.createElement("div");
        div.classList.add("carta");

        div.classList.add(`posicion${numeroClase}`); // Agrega la clase según el número de clase

        const img = document.createElement("img");
        img.src = jugador.IMG; // Usa la URL de la imagen del jugador del atributo IMG
        img.alt = jugador.Nombre;

        const nombre = document.createElement("strong");
        nombre.textContent = jugador.Nombre;

        const habilidades = document.createElement("p");
        habilidades.innerHTML = `
            ${jugador.Habilidades.Posicion}<br>
            Ataque: ${jugador.Habilidades.Ataque}<br>
            Defensa: ${jugador.Habilidades.Defensa}<br>
            Velocidad: ${jugador.Habilidades.Velocidad}<br>
            Aceleración: ${jugador.Habilidades.Aceleracion}
        `;

        div.appendChild(img);
        div.appendChild(nombre);
        div.appendChild(habilidades);

        lista.appendChild(div);
    }

    // Recorre el orden de las posiciones y agrega jugadores en ese orden para equipo 1
const jugadoresAgregados = new Set();
let numeroClase = 1;
ordenPosiciones.forEach((posicion) => {
    equipos.equipo1.forEach((jugador) => {
        if (jugador.Habilidades.Posicion === posicion && !jugadoresAgregados.has(jugador.Nombre)) {
            agregarJugadorALista(jugador, equipo1, numeroClase);
            jugadoresAgregados.add(jugador.Nombre);
            numeroClase++;
        }
    });
});

// Recorre el orden de las posiciones y agrega jugadores en ese orden para equipo 2
numeroClase = 12; // Empieza con el número 12 para el equipo 2
ordenPosiciones.forEach((posicion) => {
    equipos.equipo2.forEach((jugador) => {
        if (jugador.Habilidades.Posicion === posicion && !jugadoresAgregados.has(jugador.Nombre)) {
            agregarJugadorALista(jugador, equipo2, numeroClase);
            jugadoresAgregados.add(jugador.Nombre);
            numeroClase++;
        }
    });
});
}

mostrarJugadoresEnPagina();





``







// codigo funcionando bien con las cards  
//   console.log(JUGADORES);
  // Llamamos a la función con la lista de jugadores
//   function formarEquipos(jugadores) {
//     // Clasificamos a los jugadores según sus habilidades combinadas (de mayor a menor)
//     jugadores.sort((a, b) => {
//         const valorA = a.Habilidades.Ataque + a.Habilidades.Defensa + a.Habilidades.Velocidad + a.Habilidades.Aceleracion;
//         const valorB = b.Habilidades.Ataque + b.Habilidades.Defensa + b.Habilidades.Velocidad + b.Habilidades.Aceleracion;
//         return valorB - valorA;
//     });

//     const equipo1 = [];
//     const equipo2 = [];
//     let indice = 0;

//     // Distribuimos los jugadores de manera equilibrada
//     while (indice < jugadores.length) {
//         equipo1.push(jugadores[indice++]);
//         equipo2.push(jugadores[indice++]);
//     }

//     return { equipo1, equipo2 };
// }

// const equipos = formarEquipos(JUGADORES);

// function mostrarJugadoresEnPagina() {
//     const equipo1 = document.getElementById("equipo1");
//     const equipo2 = document.getElementById("equipo2");

//     function agregarJugadorALista(jugador, lista) {
//         const div = document.createElement("div");
//         div.classList.add("carta");

//         const img = document.createElement("img");
//         img.src = './istockphoto-517998264-2048x2048.jpg'; // Reemplaza con la URL de la imagen del jugador
//         img.alt = jugador.Nombre;
        
//         const nombre = document.createElement("strong");
//         nombre.textContent = jugador.Nombre;

//         const habilidades = document.createElement("p");
//         habilidades.innerHTML = `
//             ${jugador.Habilidades.Posicion}<br>
//             Ataque: ${jugador.Habilidades.Ataque}<br>
//             Defensa: ${jugador.Habilidades.Defensa}<br>
//             Velocidad: ${jugador.Habilidades.Velocidad}<br>
//             Aceleración: ${jugador.Habilidades.Aceleracion}
//         `;

//         div.appendChild(img);
//         div.appendChild(nombre);
//         div.appendChild(habilidades);

//         lista.appendChild(div);
//     }

//     equipos.equipo1.forEach((jugador) => {
//         agregarJugadorALista(jugador, equipo1);
//     });

//     equipos.equipo2.forEach((jugador) => {
//         agregarJugadorALista(jugador, equipo2);
//     });
// }

// mostrarJugadoresEnPagina();

//--------------------------------------------------------------------------------------------------------------------------

// codigo funcionando bien sin las cards
//   function formarEquipos(jugadores) {
//     // Clasificamos a los jugadores según sus habilidades combinadas (de mayor a menor)
//     jugadores.sort((a, b) => {
//         const valorA = a.Habilidades.Ataque + a.Habilidades.Defensa + a.Habilidades.Velocidad + a.Habilidades.Aceleracion;
//         const valorB = b.Habilidades.Ataque + b.Habilidades.Defensa + b.Habilidades.Velocidad + b.Habilidades.Aceleracion;
//         return valorB - valorA;
//     });

//     const equipo1 = [];
//     const equipo2 = [];
//     let indice = 0;

//     // Distribuimos los jugadores de manera equilibrada
//     while (indice < jugadores.length) {
//         equipo1.push(jugadores[indice++]);
//         equipo2.push(jugadores[indice++]);
//     }

//     return { equipo1, equipo2 };
// }

// const equipos = formarEquipos(JUGADORES);

// function mostrarJugadoresEnPagina() {
//     const equipo1 = document.getElementById("equipo1");
//     const equipo2 = document.getElementById("equipo2");

//     function agregarJugadorALista(jugador, lista) {
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${jugador.Nombre}</strong><br>${jugador.Habilidades.Posicion}<br>Ataque: ${jugador.Habilidades.Ataque}<br>Defensa: ${jugador.Habilidades.Defensa}<br>Velocidad: ${jugador.Habilidades.Velocidad}<br>Aceleración: ${jugador.Habilidades.Aceleracion}`;
//         lista.appendChild(li);
//     }

//     equipos.equipo1.forEach((jugador) => {
//         agregarJugadorALista(jugador, equipo1);
//     });

//     equipos.equipo2.forEach((jugador) => {
//         agregarJugadorALista(jugador, equipo2);
//     });
// }

// mostrarJugadoresEnPagina();