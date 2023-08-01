//* ====== EJERCICIO 1 ======

const empresas = [
  {
    nombre: "Empresa1",
    informacion: {
      empleados: 75,
      direccion: {
        calle: "Av.San Luis",
        numero: 293,
      },
      secciones: [
        { nombre: "Comercio", empleadosDestinados: 20 },
        { nombre: "Construcción", empleadosDestinados: 5 },
        { nombre: "Obras", empleadosDestinados: 17 },
      ],
      locales: {
        local1: {
          telefono: 5652457875,
          empleados: 15,
          habilitado: true,
          especificaciones: { nombre: "Comercio", direccion: "Calle 285" },
        },
        local2: {
          telefono: 5285695875,
          empleados: 14,
          habilitado: false,
          especificaciones: {nombre: "Obras",direccion: "Av. Roque Perez 512",
          },
        },
        local3: {
          telefono: null,
          empleados: 29,
          habilitado: true,
          especificaciones: { nombre: "Comercio", direccion: "Calle 287" },
        },
        local4: {
          telefono: 5425875876,
          empleados: 17,
          habilitado: true,
          especificaciones: {nombre: "Obras",direccion: "Av. Saenz Peña 726",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa2",
    informacion: {
      empleados: 99,
      direccion: {
        calle: "Calle Junin",
        numero: 329,
      },
      secciones: [
        { nombre: "Contabilidad", empleadosDestinados: 5 },
        { nombre: "Finanzas", empleadosDestinados: 32 },
        { nombre: "Auditoria", empleadosDestinados: 12 },
        { nombre: "Administracion", empleadosDestinados: 19 },
      ],
      locales: {
        local1: {
          telefono: null,
          empleados: 8,
          habilitado: false,
          especificaciones: { nombre: "Auditoria", direccion: "Calle ABC" },
        },
        local2: {
          telefono: 5862325625,
          empleados: 23,
          habilitado: false,
          especificaciones: {nombre: "Auditoria",direccion: "Av. Corrientes 179",
          },
        },
        local3: {
          telefono: 5685214785,
          empleados: 51,
          habilitado: true,
          especificaciones: { nombre: "Auditoria", direccion: "Calle 587" },
        },
        local4: {
          telefono: 5245854875,
          empleados: 17,
          habilitado: true,
          especificaciones: {nombre: "Administracion",direccion: "Av. Cabred 34",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa3",
    informacion: {
      empleados: 70,
      direccion: {
        calle: "Av.Lopez Torres",
        numero: 934,
      },
      secciones: [
        { nombre: "Hotelería", empleadosDestinados: 8 },
        { nombre: "Turismo", empleadosDestinados: 12 },
        { nombre: "Atención al Público", empleadosDestinados: 15 },
      ],
      locales: {
        local1: {
          telefono: 5487521493,
          empleados: 10,
          habilitado: true,
          especificaciones: {nombre: "Hotelería",direccion: "Av. Roca 746",
          },
        },
        local2: {
          telefono: null,
          empleados: 15,
          habilitado: false,
          especificaciones: {nombre: "Atención al Público",direccion: "Calle Córdoba 312",
          },
        },
        local3: {
          telefono: 5862548751,
          empleados: 20,
          habilitado: true,
          especificaciones: {
            nombre: "Turismo",direccion: "Felix de Azara 857",},
        },
        local4: {
          telefono: 5632587845,
          empleados: 25,
          habilitado: false,
          especificaciones: {nombre: "Turismo", direccion: "Felix de Azara 426",
          },
        },
      },
    },
  },
];

//* Crear una función que reciba como parametro el arreglo de empresas definido aquí arriba y retornar un arreglo de objetos informando cuales son los locales habilitados en cada empresa
//* El formato del arreglo es el siguiente:
//* [
//*   {
//*     nombre:
//*     localesHabilitados:
//*   }
//* ]
//* donde "nombre" es un string y "localesHabilitados" es un arreglo de strings con los nombres de los locales que se encuentran habilitados

function nombresYLocalesHabilitados(empresasAux)
{
  const empresasLocalesHabilitados = empresasAux.map(function(empresa)
  {
    const {informacion: {secciones, locales }} = empresa;

    const informacionSecciones = Object.values(secciones);
    const localesLocal = Object.values(locales);
    
    
    const localesLocalNombre = localesLocal.map(function(empresaLocalesLocal) 
    {
      
      return empresaLocalesLocal.especificaciones.nombre;

    });
 
    const informacionSeccionesNombres = informacionSecciones.map(function(SeccionesNombres)
    {
      return SeccionesNombres.nombre;
    });
    
    const localesHabilitados = informacionSeccionesNombres.filter(function(secciones)
    {
          return localesLocalNombre.includes(secciones);
    });
     
    return {"nombre" : empresa.nombre, "localesHabilitados" : localesHabilitados };

  });
 
  return empresasLocalesHabilitados;
}
let nombresYLocalesHabilitados1 = nombresYLocalesHabilitados(empresas);
console.log(nombresYLocalesHabilitados1);
