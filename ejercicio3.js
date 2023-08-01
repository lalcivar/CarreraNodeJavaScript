//* ====== EJERCICIO 3 ======

const familia = [
  {
    nombre: "Pedro",
    posicion: "padre",
    edad: 45,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Ana",
    posicion: "madre",
    edad: 39,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Juan",
    posicion: "hijo",
    edad: 24,
    parientes: {
      padre: {
        nombre: "Francisco",
        edad: 50,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Carla",
    posicion: "hija",
    edad: 14,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Cristian",
    posicion: "hijo",
    edad: 29,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: {
        cantidad: 1,
        mayores: 0,
        menores: 1,
      },
    },
  },
];

//* Crear una funcion que reciba el arreglo familia definido aquí arriba que valide si la cantidad de hijos establecida como su distribucion entre mayores y menores es correcta.
//* En caso de no coincidir la relación de cantidad, retornar un string que diga "La cantidad de hijos establecida no es coherente"
//* En caso de no coincidir la distribución entre mayores y menores, retornar un string que diga "La distribución de hijos entre mayores y menores es incorrecta"
//* En caso de que toda la información sea coherete, retornar un true.

function hijosEstablecidos(familiaAux)
{  
  
  const padres = familiaAux.filter(function(element)
  {
       return element.posicion === "padre";
  });

  const [{parientes: {hijos: {cantidad}}}] = padres;

  const hijos = familiaAux.filter(function(element)
  {
       return (element.posicion === "hijo" || element.posicion === "hija");
  });

  const cantidadHijos = hijos.length;
  
  if(cantidadHijos === cantidad)
  {
         const rrecorreFamiliaAux = familiaAux.map(function(parientesHijos)
         {
            const {parientes: {hijos}} = parientesHijos;
            return hijos;
         }); 


         const distribucion = rrecorreFamiliaAux.map(function(element)
         {
           if (!element)
           {
              return { cantidad: 0, mayores: 0, menores: 0};
           }
           else
           {     
             return element;
           };

          });

          const coherente = distribucion.every(function(element)
          {
            return element.mayores + element.menores === element.cantidad
          });

          if(coherente)
          {
             return coherente;
          }
          else
          {
            return "La distribución de hijos entre mayores y menores es incorrecta"; 
          };
  }
  else
  {
    return "La cantidad de hijos establecida no es coherente";
  };
  
};

const cantidadHijosEstablecidos = hijosEstablecidos(familia);
console.log(cantidadHijosEstablecidos);