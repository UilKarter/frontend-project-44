import readlineSync from 'readline-sync'
import start from '../cli.js'
import { getRandomInt, divider } from '../utils.js'

const gcd = () => {
  const name = start()
  console.log('Find the greatest common divisor of given numbers.')
  const maxRounds = 3
  let correctAnswers = 0
  for (let i = 0; i < maxRounds; i++) {
    const num1 = getRandomInt(0, 100)
    const num2 = getRandomInt(0, 100)
    const awaitAnswer = divider(num1, num2)
    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = (readlineSync.question('Your answer: '))
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

export default gcd
