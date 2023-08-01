//* ====== EJERCICIO 4 ======

const profesores = [
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
    materiasHabilitadas: ["Ciencias Sociales","Ciencias Naturales","Historia",],
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
];

//* Crear una funcion que reciba el arreglo "profesores" establecido aquí arriba y retornar un arreglo de objetos indicando los profesores que tienen materias habilitades en comun
//* El arreglo debe tener el siguiente formato:
//* [
//*   {
//*     materia: "Matematicas"
//*     profesores: ["Pablo Mendez", "Ana Gimenez"]
//*   }
//* ]
//* donde "materia" es un string y "profesores" es un arreglo de strings
//* Si la materia la da un solo profesor, no debe ser incluído en el arreglo.

//? AYUDA: Investigar objeto SET puede ser de gran ayuda.

function profesoresMaterias(profesoresAux)
{
   const rrecorreProfesores = profesoresAux.map(function(profesoresDatos)
   {
      let {nombre, materiasHabilitadas}= profesoresDatos;
      let {catedras:[{materia},{materia:materia2},]} = profesoresDatos;

      const catedraMateria =  [materia,materia2];

      const informacionCatedraMateria = catedraMateria.filter(function(element)
      {
         return materiasHabilitadas.includes(element) ;
      });

      return {"nombre" : nombre, "catedras" : informacionCatedraMateria};

   });

   //=====================================================================================

    const profesoresMateriasHabilitadas = rrecorreProfesores.map(function(element)
    {
         const {nombre, catedras: [ materia1, materia2]} = element;

         return {"nombre": nombre, "materia1": materia1, "materia2": materia2}
    });
//=====================================================================================

    const materia1 = rrecorreProfesores.map(function(element)
    {
      const {catedras:[materia1,]} = element;
     
      return materia1;
    });
    
    const materia1Aux = materia1.filter(function(element)
    {
      return element !== undefined;
    });


    const materia2 = rrecorreProfesores.map(function(element)
    {
      const {catedras:[, materia2]} = element;
     
      return materia2;
    });
    
    const materia2Aux = materia2.filter(function(element)
    {
      return element !== undefined;
    });

    const materiasRepetidasHabilitadas = materia1Aux.filter(function(element)
    {
      return new Set(materia2Aux).has(element);
    });
    
    //====================================================================================
    
    const profesoresHabilitados = profesoresMateriasHabilitadas.filter(function(secciones)
    {
          return materiasRepetidasHabilitadas.includes(secciones.materia1) || materiasRepetidasHabilitadas.includes(secciones.materia2);
    });

    let resultadoProfesoresHabilitados = [];
    let resultadoFinal;

    materiasRepetidasHabilitadas.forEach(element => 
    {
      profesoresHabilitados.forEach(element1 => 
      {
           if(element1.materia1 === element || element1.materia2 === element)
           {
            resultadoProfesoresHabilitados.push(element1.nombre);
           };
      });
      resultadoFinal = {"materia": materiasRepetidasHabilitadas, "profesores": resultadoProfesoresHabilitados};
    });
    
    return resultadoFinal;
};


const materiasHabilitada = profesoresMaterias(profesores);
console.log(materiasHabilitada); 