#!/usr/bin/env node
import readlineSync from 'readline-sync';
import start from '../cli.js';
import { getRandomInt, isEven } from '../utils.js';

const brainEven = () => {
  const name = start();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 0) {
    const questNum = getRandomInt(100, 0);
    const awaitAnswer = isEven(questNum);
    console.log(`Question: ${questNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === awaitAnswer) {
      console.log('Correct!');
      i += 1;
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${awaitAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainEven;
