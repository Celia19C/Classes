// Point
// Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor.

// It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.

//Coordenadas. Conseguir otro punto nuevo con unas coordenadas dadas al invocar la clase.


// // Your code here

// console.log(new Point(1, 2).plus(new Point(2, 1)))
// // → Point{x: 3, y: 3}


///SOLUCIÖN

class Point {
    constructor(x, y){
        this.x = x;
    this.y = y;
  }

    plus(otherPoint) {
        var otherPointX = this.x + otherPoint.x;      	
        var otherPointY = this.y + otherPoint.y;
        var point = new Point(otherPointX, otherPointY)
    
    return point
  }
}
  
  console.log(new Point(1, 2).plus(new Point(2, 1)))
  // → Point{x: 3, y: 3}



//Añadir una tercera coordenada, z, heredando las de la clase padre las otrasa dos coordenadas.

class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y)
        this.z = z
    }
    plus(otherPoint) {
        var point = super.plus(new Point(otherPoint.x, otherPoint.y))
        var otherPointZ = this.z + otherPoint.z;      	
        return new Point3D(point.x, point.y, otherPointZ)
    
    }

}

console.log(new Point3D(5, 6, 5))
const pA = new Point3D(1, 2, 8)
const pB = new Point3D(2, 1, 56)
const pC = pA.plus(pB)
console.log(pC)