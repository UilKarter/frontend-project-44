#!/usr/bin/env node
import gameRun from '../index.js'
import { getRandomInt, isEven } from '../utils.js'

const even = () => {
  const testNum = getRandomInt(0, 100)
  const awaitAnswer = isEven(testNum)
  return { question: `${testNum}`, awaitAnswer }
}
const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".'

export default () => gameRun(even, gameDesc)
