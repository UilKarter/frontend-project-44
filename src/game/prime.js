import readlineSync from 'readline-sync';
import start from '../cli.js';
import { getRandomInt, isPrime } from '../utils.js';

const prime = () => {
  const name = start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const maxRounds = 3;
  let correctAnswers = 0;
  for (let i = 0; i < maxRounds; i++) {
    const questNum = getRandomInt(1, 100);
    const awaitAnswer = isPrime(questNum);
    console.log(`Question: ${questNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === awaitAnswer) {
      console.log('Correct!');
      correctAnswers++;
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default prime;