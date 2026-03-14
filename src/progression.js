import readlineSync from "readline-sync"
import start from "./cli.js";
import { getRandomInt, makeProgression } from "./utils.js";

const progression = () => {
  const name = start()
  for (let i = 0; i < 3; i += 0) {
    const start = getRandomInt(1, 20)
    const step = getRandomInt(1, 10)
    const length = getRandomInt(5, 10)
    const progbar = makeProgression(start, step, length)
    const hiddenIndex = getRandomInt(0, length - 1)
    const awaitAnswer = progbar[hiddenIndex]
    progbar[hiddenIndex] = '..'
    console.log(`What number is missing in the progression\nQuestion: ${progbar.join(' ')}`)
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
}
export default progression