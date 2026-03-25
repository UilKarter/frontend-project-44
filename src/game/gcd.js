import { getRandomInt, divider } from '../utils.js'
import gameRun from '../index.js'

const gcd = () => {
  const num1 = getRandomInt()
  const num2 = getRandomInt()
  const awaitAnswer = divider(num1, num2).toString()
  const question = `${num1} ${num2}`
  return { question, awaitAnswer }
}
const gameDesc = 'Find the greatest common divisor of given numbers.'
export default () => gameRun(gcd, gameDesc)
