//* ====== EJERCICIO 6 ======

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
    ,
    {
      nombre: "Francisco Gonzalez",
      materiasHabilitadas: ["Matematicas", "Educacion Fisica"],
      totalAlumnos: 42,
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

//* Crear una funcion que reciba 2 (dos) parámetros: el objeto "colegio" definido aquí arriba y un string indicando el nombre del profesor a consultar.
//* La función debe retornar lo siguiente:
//* si el profesor no se encuentra habilitado a dar algunas de las catedras asignadas, retornar un string que diga "El profesor XXX no cuenta con habilitación para dar las siguientes catedras: XXX, XXX, XXX..."
//* si no tiene problemas de habilitación, pero el total de alumnos no coincide con el total de todas sus catedras, retornar un string que diga "El profesor XXX se encuentra habilitado perfectamente pero faltan asignar XXX alumnos"
//* ... indicando la cantidad de alumnos que falten por asignar en ese string retornado
//* si no tiene problemas de habilitacion y tiene la totalidad de alumnos repartidos en sus catedras, retornar un objeto con el siguiente formato:
//* {
//*   ok: true,
//*   data:
//* }
//* donde "ok" es un booleano con el valor de true, y "data" es el mismo objeto que se esta consultando.

function alumnosRepartidosCatedras(colegioAux, IngreseNombreProfesorAux)
{
   if(colegioAux.profesores.some(value => value.nombre === IngreseNombreProfesorAux))
   {
    
      const detallesProfesor = colegioAux.profesores.filter(function(element)
      {
          return element.nombre === IngreseNombreProfesorAux
      });

      let materiasHabilitadasAux;
      let totalAlumnosAux;
      let catedrasAux;
      let materiasAux;
      let alumnosAux;
      let cantidadAlumnosCatedra = 0;
      let materia1;
      let materia2;
      let alumnos1;
      let alumnos2;

      detallesProfesor.forEach(element => 
      {
          const {materiasHabilitadas,totalAlumnos, catedras:[{materia, alumnos}, {materia:materia1, alumnos:alumnos1}]} = element;
          const {catedras} = element;


          materiasHabilitadasAux = materiasHabilitadas;
          totalAlumnosAux = totalAlumnos;
          catedrasAux = catedras;
          materiasAux = [materia,materia1];
          alumnosAux = [alumnos, alumnos1];
          cantidadAlumnosCatedra = alumnos + alumnos1;

      });
    
      const materiasHabilitadasProfesor = materiasAux.filter(function(element)
      {
         return new Set(materiasHabilitadasAux).has(element);
      });

      materiasAux.sort();
      materiasHabilitadasProfesor.sort();

      const isEqual = materiasAux.length === materiasHabilitadasProfesor.length && materiasAux.every((value, index) => value === materiasHabilitadasProfesor[index]);
      
      if(!isEqual)
      {
        return "El profesor " +  IngreseNombreProfesor + " no cuenta con habilitación para dar las siguientes catedras: " + materiasHabilitadasAux;
      };
      
      if((isEqual) && (totalAlumnosAux > cantidadAlumnosCatedra))
      {
        const resta = totalAlumnosAux - cantidadAlumnosCatedra;
        return "El profesor " +  IngreseNombreProfesor + " se encuentra habilitado perfectamente pero faltan asignar "  + resta + " alumnos";
      };

      if((isEqual) && (totalAlumnosAux === cantidadAlumnosCatedra))
      {
        return { "Ok": isEqual,  "data" : {nombre: IngreseNombreProfesor, materiasHabilitadas: materiasHabilitadasAux, totalAlumnos : totalAlumnosAux, catedras: catedrasAux}};
      };
    
   }
   else 
   {
    return "El profesor  consultar no existe";
   };

};


const IngreseNombreProfesor = "Francisco Gonzalez";
const cantidadAlumnos =  alumnosRepartidosCatedras(colegio, IngreseNombreProfesor);
console.log(cantidadAlumnos);
