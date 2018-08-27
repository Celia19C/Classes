// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args
// function Cube(n) {
//   var side = 0;

//   getSide = function () { return side; };
//   setSide = function (n) {
//     if (isNaN(n) === true) { return; }
//     this.side = Math.abs(n);
//   };
// }

class Cube {
  constructor(n = 0) {
    this.side = n
  }
  getSide() {
    return this.side
  }
  setSide(n) {
    if (isNaN(n) === true) { return; }
    this.side = Math.abs(n)
  }
}

var c = new Cube(7);
console.log(c.getSide())
c = new Cube();
console.log(c.getSide())
c = new Cube(5)
console.log(c.getSide())