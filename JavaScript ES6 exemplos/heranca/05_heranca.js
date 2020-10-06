console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('UEPB'.reverse())

console.log([1,2,3,4].shift())

//JAMAIS
String.prototype.toString = function(){
    return 'complicou'
}
console.log('UEPB'.reverse())

