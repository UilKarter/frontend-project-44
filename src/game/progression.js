import gameRun from '../index.js'
import { getRandomInt, makeProgression } from '../utils.js'

const progression = () => {
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const length = getRandomInt(5, 10)
  const progbar = makeProgression(start, step, length)
  const hiddenIndex = getRandomInt(0, length - 1)
  const awaitAnswer = progbar[hiddenIndex].toString()
  progbar[hiddenIndex] = '..'
  const question = progbar
  return { question, awaitAnswer }
}
const gameDesc = 'What number is missing in the progression'
export default () => gameRun(progression, gameDesc)
