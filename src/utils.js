export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function makeProgression(start, step, length) {
  const progressbar = []
  for (let i = 0; i < length; i += 1) {
    progressbar.push(start + i * step)
  }
  return progressbar
}

export function divider(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export function isEven(num) {
  if (num % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

export function randomOperator() {
  const ops = ['*', '-', '+']
  const i = getRandomInt(0, 2)
  return ops[i]
}

export function isPrime(num) {
  if (num <= 1) {
    return 'no'
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}
