#!/usr/bin/env node
import readlineSync from 'readline-sync'
import start from '../cli.js'
import { getRandomInt, isEven } from '../utils.js'

const brainEven = () => {
  const name = start()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const maxRounds = 3
  let correctAnswers = 0
  for (let i = 0; i < maxRounds; i++) {
    const questNum = getRandomInt(100, 0)
    const awaitAnswer = isEven(questNum)
    console.log(`Question: ${questNum}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer.toLowerCase() === awaitAnswer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`)
  }
};

export default brainEven;

