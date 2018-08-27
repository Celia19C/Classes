//Enunciado:
// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. 
// The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// De acuerdo con los mitos de la creación de las religiones abrahámicas, Adán y Eva fueron los primeros humanos en vagar por la Tierra.

// Tienes que hacer el trabajo de Dios. 
//-El método de creación debe devolver una matriz de objetos que contengan longitud 2 
//(que representan a Adán y Eva). 
//-El primer objeto en la matriz debe ser una instancia de la clase Man. 
//-El segundo debe ser un ejemplo de la clase Mujer. 
//-Ambos objetos tienen que ser subclases de Humano. Tu trabajo es implementar las clases de Humano, Hombre y Mujer.


class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

class Human {
  constructor(name) {
    this.name = name
  }
}

class Man extends Human { }
class Woman extends Human { }

let humans = God.create()
console.log(humans)
