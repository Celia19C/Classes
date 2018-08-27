
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return
// johns age is 34

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      
    }
    get info() {
      return  this.name + ' age is ' + this.age
    }
  }
  
  const person = new Person('John', 34)
  person.info

  //get ===> hace que info sea un getter y por lo tanto no es necesario invocarla con los 2 parénteses, simplemente así: person.info

 
  //El resultado sería el mismo sin el get, y llamando luego a info con los paréntesis.
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      
    }
    info() {
      return  this.name + ' age is ' + this.age
    }
  }
  
  const person = new Person('John', 34)
  person.info()