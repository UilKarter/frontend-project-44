import gameRun from '../index.js'
import { getRandomInt, isPrime } from '../utils.js'

const prime = () => {
  const questNum = getRandomInt(1, 100)
  const awaitAnswer = isPrime(questNum)
  const question = `${questNum}`
  return { question, awaitAnswer }
}
const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".'
export default () => gameRun(prime, gameDesc)
