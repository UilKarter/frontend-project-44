#!/usr/bin/env node
import readlineSync from "readline-sync";

const brainEven = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  for (let i = 0; i < 3; i += 0) {
    const questNum = getRandomInt(100)
    const isEven = (num) => {
      if (num % 2 === 0) {
        return 'yes'
      }
      return 'no'
    }
    const awaitAnswer = isEven(questNum)
    console.log(`Question: ${questNum}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer.toLowerCase() === awaitAnswer) {
      console.log('Correct!')
      i += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      i = 0
    }
  }
  console.log(`Congratulations, ${name}!`)
}
brainEven()

export default brainEven
