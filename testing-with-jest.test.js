// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
    test("returns the sum of the two numbers that are arguments ", () => {
      expect(addThemUp(number1, number2)).toEqual(3)
    })
  })


 // --------------------1b) See the test fail. THEN write the code to make the test pass.

var number1 = 1
var number2 = 2
  const addThemUp = (num1,num2) => {
    return (num1 + num2)
  }


 // --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test("returns the area of a triangle by multiplying the base and height of the triangle and then dividing that by two", () => {
    expect(triangleArea(triangleH, triangleB)).toEqual(40)
  })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.
var triangleH = 10
var triangleB = 8

const triangleArea = (num1, num2) => {
  return (num1 * num2 / 2)
}
