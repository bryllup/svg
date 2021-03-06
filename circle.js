
var Element = require('./element')

module.exports = Circle

function Circle(el){
  Element.call(this, el)
}

Element.extend(Circle)

Circle.prototype.radius = function(n){
  this.el.setAttribute('r', n)
  return this
}

Circle.prototype.size = function(n){
  return this.radius(n / 2)
}

Circle.prototype.move = function(x, y){
  this.el.setAttribute('cx', x || 0)
  this.el.setAttribute('cy', y || 0)
  return this
}