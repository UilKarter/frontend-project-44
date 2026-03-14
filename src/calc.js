import readlineSync from "readline-sync"
import start from "./cli.js";
import { getRandomInt, randomOperator } from "./utils.js";

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
    if (Number(userAnswer) === awaitAnswer) {
      console.log('Correct!')
      i++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`)
      i = 0
    }

  }
  console.log(`Congratulations, ${name}!`)
}
export default brainCalc