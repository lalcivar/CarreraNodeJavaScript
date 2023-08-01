//* ====== EJERCICIO 7 ======

const colegio = {
  cantidadProfesores: 5,
  cantidadAlumnos: 193,
  materiasDisponibles: [
    "Matematicas",
    "Psicologia",
    "Quimica",
    "Fisica",
    "Lengua",
    "Sociologia",
    "Etica",
    "Ciencias Sociales",
    "Ciencias Naturales",
    "Historia",
    "Filosofia",
    "Educacion Fisica",
  ],
  profesores: [
    {
      nombre: "Pablo Mendez",
      materiasHabilitadas: ["Quimica", "Matematicas", "Fisica"],
      totalAlumnos: 43,
      catedras: [
        {
          materia: "Fisica",
          alumnos: 18,
        },
        {
          materia: "Matematicas",
          alumnos: 25,
        },
      ],
    },
    {
      nombre: "Ana Gimenez",
      materiasHabilitadas: ["Lengua", "Matematicas"],
      totalAlumnos: 38,
      catedras: [
        {
          materia: "Psicologia",
          alumnos: 21,
        },
        {
          materia: "Lengua",
          alumnos: 15,
        },
      ],
    },
    {
      nombre: "Georgina Barrientos",
      materiasHabilitadas: [
        "Ciencias Sociales",
        "Ciencias Naturales",
        "Historia",
      ],
      totalAlumnos: 54,
      catedras: [
        {
          materia: "Fisica",
          alumnos: 17,
        },
        {
          materia: "Lengua",
          alumnos: 15,
        },
      ],
    },
    {
      nombre: "Carlos Benitez",
      materiasHabilitadas: ["Filosofia", "Ciencias Naturales", "Historia"],
      totalAlumnos: 31,
      catedras: [
        {
          materia: "Ciencias Sociales",
          alumnos: 10,
        },
        {
          materia: "Matematicas",
          alumnos: 15,
        },
      ],
    },
    {
      nombre: "Francisco Gonzalez",
      materiasHabilitadas: ["Matematicas", "Educacion Fisica"],
      totalAlumnos: 68,
      catedras: [
        {
          materia: "Matematicas",
          alumnos: 17,
        },
        {
          materia: "Educacion Fisica",
          alumnos: 25,
        },
      ],
    },
  ],
};

//* Crear una funcion que reciba el objeto "colegio" definido aquí arriba y retornar un arreglo de objetos el cual debe tener el siguiente formato
//* [
//*   {
//*     materia:
//*     ok:
//*   }
//* ]
//* donde "materia" es un string con el nombre de la materia, y "ok" es un booleano que indica si la materia disponible la tiene habilitada o no al menos un profesor.

function materiasDisponiblesColegio(colegioAux)
{
   let materiasDisponibles = colegio.materiasDisponibles;
   
   
  const rrecorreColegioProfesores = colegio.profesores.map(function(element)
  {
      const {materiasHabilitadas, catedras: [{materia},{materia:materia2}]} = element;
      const catedraMateria =  [materia,materia2];
      
      const informacionCatedraMateria = catedraMateria.filter(function(element)
      {
         return materiasHabilitadas.includes(element) ;
      });

      return informacionCatedraMateria;
  });

  const catedrasMaterias = rrecorreColegioProfesores.join();
  const catedrasMateriasPrfesores = catedrasMaterias.split(",");

  
  
  const materiasHabilitadas = materiasDisponibles.filter(function(element)
  {
    return new Set(catedrasMateriasPrfesores).has(element);
  });

  const materiasNoHabilitadas = materiasDisponibles.filter(function(element)
  {
    return !new Set(catedrasMateriasPrfesores).has(element);
  });

  return [{ok: true, materia:materiasHabilitadas},{ok: false, materia:materiasNoHabilitadas}];
};

const colegioEsMaterias = materiasDisponiblesColegio(colegio);
console.log(colegioEsMaterias);