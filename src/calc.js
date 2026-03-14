import readlineSync from "readline-sync"
import start from "./cli.js";
import { getRandomInt } from "../src/even.js";

function randomOperator() {
  const ops = ['*', '-', '+']
  let i = getRandomInt(0, 2)
  return ops[i]
}
const brainCalc = () => {
  const name = start()
  for (let i = 0; i < 3; i += 0) {
    console.log(`What is the result of the expression?`)
    const curOperator = randomOperator()
    const numOne = getRandomInt(0, 100)
    const numTwo = getRandomInt(0, 100)
    console.log(`Question: ${numOne} ${curOperator} ${numTwo}`)
    let awaitAnswer
    switch (curOperator) {
      case '*':
        awaitAnswer = numOne * numTwo
        break
      case '-':
        awaitAnswer = numOne - numTwo
        break
      case '+':
        awaitAnswer = numOne + numTwo
        break
    }
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === awaitAnswer) {
      console.log('Correct!')
      i++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`)
      i = 0
      return
    }

  }
  console.log(`Congratulations, ${name}!`)
}

export default brainCalc