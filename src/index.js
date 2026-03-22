import readlineSync from 'readline-sync'
import start from './cli.js'

const gameRun = (createRound, gameDesc) => {
  const name = start()
  console.log(gameDesc)
  const maxRounds = 3
  let correctAnswers = 0
  for (let i = 0; i < maxRounds; i++) {
    const { question, awaitAnswer } = createRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer.toLowerCase().toString() === awaitAnswer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default gameRun
