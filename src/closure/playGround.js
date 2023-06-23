function sumWithClosure(firstNum = 0) {
    return function add(secondNum = 0) {
      return firstNum  + secondNum
    }
  }

console.log(sumWithClosure(2)(2));
console.log(sumWithClosure(2)())
console.log(sumWithClosure(50)(10))