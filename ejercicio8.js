//* ====== EJERCICIO 8 ======

const personas = [
  {
    nombre: "Fernando",
    apellido: "Gutierrez",
    domicilio: {calle: "Av.Lopez Torres",nro: 832,},
    deportes: ["Futbol", "Running"],
    datos: {
      profesion: null,
      casado: false,
      hijos: false,
      laboral: {
        actual: "Empresa ABC",
        experiencia: [
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente General",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
          {
            lugar: "Empresa ZZZ",
            duracion: 5,
            cargo: "Administrativo",
          },
        ],
      },
    },
  },
  {
    nombre: "Nicolas",
    apellido: "Mendez",
    domicilio: {
      calle: "Av.Roque Perez",
      nro: 257,
    },
    deportes: null,
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: [
        {
          nombre: "Hernan",
          edad: 19,
        },
        {
          nombre: "Juana",
          edad: 12,
        },
      ],
      laboral: {
        actual: "Duendes S.R.L.",
        experiencia: [
          {
            lugar: "Duendes S.R.L.",
            duracion: 5,
            cargo: "Ejecutivo de ventas",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Administrativo",
          },
          {
            lugar: "Panadería Masas S.R.L.",
            duracion: 6,
            cargo: "Chef",
          },
        ],
      },
    },
  },
  {
    nombre: "Fabricio",
    apellido: "Leites",
    domicilio: {
      calle: "Alvear",
      nro: 217,
    },
    deportes: ["Tennis", "Futbol"],
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: false,
      laboral: {
        actual: "",
        experiencia: [
          {
            lugar: "Empresa WWW",
            duracion: 5,
            cargo: "Administrativo",
          },
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente Comercial",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
        ],
      },
    },
  },
];

//* Crear una funcion que reciba 2 (dos) parámetros: el arreglo "personas" definido aquí arriba y un string con el nombre de alguna empresa.
//* La función debe retornar lo siguiente:
//* Si la empresa no se encuentra en el listado, retornar un booleano false
//* Si existe 1 sola persona que pasó por esa empresa, retornar un string que diga "La única persona que paso por esta empresa es PPP"
//* Si existe mas de 1 persona que alguna vez trabajó o trabaja actualmente en ella, retornar un objeto con el siguiente formato:
//* {
//*   actualmente:
//*   historico:
//* }
//* donde "actualmente" es un arreglo de strings con las personas que actualmente trabajan en la empresa solicitada e "historico" es un arreglo de strings
//* con todas las personas que alguna vez trabajaron o trabajan actualmente en la empresa solicitada.

function consultaPersonasEmpresa(personasAux, nombreEmpresaAux )
{  
  const devuelveEmpresasExperiencia = personasAux.map(function(empresa)
    {
        const {datos:{laboral:{experiencia}}} = empresa;
        return experiencia;
    });

    const EmpresasExperiencia = devuelveEmpresasExperiencia.map(function(elemento)
    {
          const EmpresasExperienciaAux = elemento.map(function(elementoAux)
          {
              return elementoAux.lugar;
          });

          return EmpresasExperienciaAux;
    });

    const joinEmpresasExperiencia = EmpresasExperiencia.join();
    const splitEmpresasExperiencia = joinEmpresasExperiencia.split(",");

    let laboralExperiencia = [];
    let datosPersonas = [];

    if (splitEmpresasExperiencia.some(values => values === nombreEmpresaAux))
    {
      personasAux.forEach(elementPersonsAux => 
      {
        elementPersonsAux.datos.laboral.experiencia.forEach(element => 
        {
          laboralExperiencia.push(element.lugar);
        });

        datosPersonas.push({nombre: elementPersonsAux.nombre, actual: elementPersonsAux.datos.laboral.actual, experiencia: laboralExperiencia});
        laboralExperiencia = [];
      });
      
      const resumenPersonas = datosPersonas.filter(function(elemento)
      {
            return (elemento.actual === nombreEmpresaAux || elemento.experiencia.some(value => value === nombreEmpresaAux));
      });
      
      if (resumenPersonas.length > 1)
      {
        
        let experienciAux = [];
        let actualAux = [];
        resumenPersonas.forEach(function(elemento)
        {
            const {actual, experiencia} = elemento;

            experienciAux.push(experiencia);
            actualAux.push(actual);
        });

        const joinActualAux = actualAux.join();
        const splitActualAux = joinActualAux.split(",");
        const cleanActualAux = splitActualAux.filter(Boolean);
        
        let result = cleanActualAux.filter((item,index)=>{
          return cleanActualAux.indexOf(item) === index;
        })

        const joinExperienciAux = experienciAux.join();
        const splitExperienciAux = joinExperienciAux.split(",");
        const cleanExperienciAux = splitExperienciAux.filter(Boolean);

        let result2 = cleanExperienciAux.filter((item,index)=>{
          return cleanExperienciAux.indexOf(item) === index;
        })


        return {actualmente:result, historico:result2};
      }
      else
      {
        
        let nombre;
        resumenPersonas.forEach(element => nombre = element.nombre);
        return "La única persona que paso por esta empresa es: " + nombre

      };
      
      
    }
    else
    {
       return false;
    };
   
    
};

const nombreEmpresa = "Pepitos & Asoc"

const devuelvePersonas = consultaPersonasEmpresa(personas, nombreEmpresa);
console.log(devuelvePersonas);