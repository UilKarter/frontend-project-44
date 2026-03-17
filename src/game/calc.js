import readlineSync from 'readline-sync'
import start from '../cli.js'
import { getRandomInt, randomOperator } from '../utils.js'

const brainCalc = () => {
  const name = start()
  const maxRounds = 3
  let correctAnswers = 0
  for (let i = 0; i < maxRounds; i++) {
    console.log('What is the result of the expression?')
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
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}
export default brainCalc
