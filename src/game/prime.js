import readlineSync from 'readline-sync';
import start from '../cli.js';
import { getRandomInt, isPrime } from '../utils.js';

const prime = () => {
  const name = start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 0) {
    const questNum = getRandomInt(1, 100);
    const awaitAnswer = isPrime(questNum);
    console.log(`Question: ${questNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === awaitAnswer) {
      console.log('Correct!');
      i++;
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default prime;