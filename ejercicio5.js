//* ====== EJERCICIO 5 ======

const colegio = {
  cantidadProfesores: 5,
  cantidadAlumnos: 193,
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

//* Crear una funcion que reciba el objeto "colegio" establecido aquí arriba y retornar un booleano indicando si la cantidad total de alumnos indicada es igual a la sumatoria
//* de todos los alumnos de todas las catedras.

function cantidadAlumnosColegio(colegioAux)
{
  const {cantidadAlumnos} = colegioAux;
  const colegioProfesores = colegio.profesores.map(function(element)
  {
     const {catedras:[{alumnos}, {alumnos:alumnos1}]} = element;

     return {alumnos,alumnos1};

  });
   
  let cantidadAlumnosCatedra = 0;

  colegioProfesores.forEach(element => 
  {
    cantidadAlumnosCatedra = cantidadAlumnosCatedra + element.alumnos + element.alumnos1;
  });

  if(cantidadAlumnos === cantidadAlumnosCatedra)
  {
    return true;
  }
  else
  {
    return false;
  };
  
};

const esCantidadAlumnos = cantidadAlumnosColegio(colegio);
console.log(esCantidadAlumnos);



