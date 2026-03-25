import gameRun from '../index.js'
import { getRandomInt, randomOperator } from '../utils.js'

const calc = () => {
  const curOperator = randomOperator()
  const numOne = getRandomInt()
  const numTwo = getRandomInt()
  const question = `${numOne} ${curOperator} ${numTwo}`

  const calcRes = (a, b, oper) => {
    switch (oper) {
      case '*':
        return a * b
      case '-':
        return a - b
      case '+':
        return a + b
    }
  }
  const awaitAnswer = calcRes(numOne, numTwo, curOperator).toString()
  return { question, awaitAnswer }
}
const gameDesc = 'What is the result of the expression?'

export default () => gameRun(calc, gameDesc)
