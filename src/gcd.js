import readlineSync from "readline-sync"
import start from "./cli.js";
import { getRandomInt } from "./utils.js";

const divider = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
const gcd = () => {
  const name = start()
  for (let i = 0; i < 3; i += 0) {
    const num1 = getRandomInt(0, 100)
    const num2 = getRandomInt(0, 100)
    const awaitAnswer = divider(num1, num2)
    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = (readlineSync.question('Your answer: '))
    if (Number(userAnswer) === awaitAnswer) {
      console.log('Correct!')
      i++
    }
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`)
      i = 0
    }
  }
}

export default gcd