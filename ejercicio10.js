//* ====== EJERCICIO 10 ======

//* Crear 2 (dos) clases con las siguientes características:

//* CLASE 1:
//* a) nombre de la clase: Persona
//* b) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion
//* b) I- los valores por defecto deben ser los siguientes:
//*    nombre: 'Sin nombre'
//*    edad: null
//*    profesion: null
//* c) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* d) crear los respectivos métodos getters para todos los atributos
//* e) crear 1 método setter para poder modificar la profesión con las siguientes caracterísitcas y/o restricciones:
//* e) I- Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//* e) II- Si la persona ya contaba con una profesion asignada, retornar "Esta persona ya tiene una profesion asignada"
//* e) III- Para los restantes casos, setear la profesión.
//* f) crear 1 método llamado "quienSoy" que retorne un string diciendo "Soy NNN, tengo EEE años y mi profesión es PPP". En caso de no contar con una profesión
//* ...retornar el siguiente string "Soy NNN, tengo EEE años"
//* NNN es el nombre de la persona
//* EEE es la edad de la persona
//* PPP es la profesión de la persona

//* CLASE 2:
//* a) nombre de la clase: Alumno
//* b) debe heredar de la clase Persona
//* c) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion, catedra, nivel
//* d) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* e) crear los respectivos métodos getters para todos los atributos
//* f) crear 2 métodos setters para poder modificar tanto la catedra como el nivel.
//* f) I- restricciones del método para modificar la catedra:
//*     Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//*     Debe tener una longitud mínimo de 5 caracteres, de lo contrario retornar "La catedrá a asignar debe tener al menos 5 caracteres"
//*     En caso de cumplir con lo anterior, setear la catedra
//* f) II- restricciones del método para modificar el nivel:
//*     Si el valor recibido como argumento no es un número, retornar "Parámetro inválido, por favor inserte un número"
//*     El nivel se debe encontrar en el rango de 1 a 5, caso contrario retornar "Rango inválido"
//*     En caso de cumplir con lo anterior, setear el nivel


class persona
{
    #nombre;
    #edad;
    #profesion;

    constructor(nombre, edad, profesion)
    {
       this.#nombre = nombre;
       this.#edad = edad;
       this.#profesion = profesion;
    };
    
    get getNombre()
    {
       return this.#nombre;
    };

    get getEdad()
    {
       return this.#edad; 
    };

    get getProfesion()
    {
       return this.#profesion;
    };

    set setProfesion(profesion)
    {
        if(this.#profesion === undefined || this.#profesion === null || this.#profesion === '')
        {
           if(typeof profesion !== 'string' || profesion === undefined || profesion === null || profesion === '')
           {
              console.log("Parámetro inválido, por favor inserte una cadena de texto");
           }
           else 
           {
              this.#profesion = profesion;
           };
            
        }
        else
        { 
           console.log("Esta persona ya tiene una profesion asignada " + this.#profesion);
        };
       
    };

    quienSoy()
    {
        if(this.#profesion !== undefined && this.#profesion !== null && this.#profesion !== '')
        {
            console.log("Soy " + this.#nombre + ", tengo " +  this.#edad + " años y mi profesión es " + this.#profesion);
        }
        else
        {
            console.log("Soy " + this.#nombre + ", tengo " +  this.#edad + " años");
        };
    };

};

class alumno extends persona
{
    #nombre; 
    #edad;
    #profesion;
    #catedra; 
    #nivel;

    constructor(nombre, edad, profesion, catedra, nivel)
    {
        super(nombre, edad, profesion)
        
        this.#catedra = catedra; 
        this.#nivel = nivel;
    }

    get getNombre()
    {
        return this.#nombre;
    };

    get getEdad()
    {
        return this.#edad;
    };

    get getProfesion()
    {
        return this.#profesion;
    };

    get getCatedra()
    {
        return this.#catedra;
    };

    get getNivel()
    {
       return this.#nivel;
    };

    set setCatedra(catedra)
    {
        if(typeof catedra === 'string')
        {
             if(catedra.length >= 1 && catedra.length <= 5)
             {
                this.#catedra = catedra;
             }
             else
             {
                console.log("La catedrá a asignar debe tener al menos 5 caracteres");
             };
            
        }
        else 
        {
            console.log("Parámetro inválido, por favor inserte una cadena de texto");
        };
       
        
    };

    set setNivel(nivel)
    {
     
        if (typeof nivel === 'number')
        {
            if(nivel >= 1 && nivel <= 5)
            {
                this.#nivel = nivel;
            }
            else
            {
                console.log("Rango inválido");
            }
        }
        else
        {
            console.log("Parámetro inválido, por favor inserte un número");
        }
    }

};

//let profesor = new persona("Luis","44","ingeniero");
//profesor.setProfesion = "" ;
//console.log(profesor.getProfesion);
//console.log(profesor.quienSoy());
 //let luis = new alumno("Luis","44","ingeniero","sistemas",5);
 //let luis = new alumno("","","","",);
 //luis.setNivel = 5;
 //console.log(luis.getNivel);
 //luis.setCatedra = "ingle";
 //console.log(luis.getCatedra);