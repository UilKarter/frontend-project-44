### Hexlet tests and linter status:
[![Actions Status](https://github.com/UilKarter/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/UilKarter/frontend-project-44/actions)
## Игры разума
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
## Игра: "Проверка на чётность"
Игроку показывается случайное число. Его задача — ответить «yes», если число чётное, или «no», если нечётное.
[![asciicast](https://asciinema.org/a/bwS8ch1ngEbldIBiLdWctUvL4.svg)](https://asciinema.org/a/bwS8ch1ngEbldIBiLdWctUvL4)
## Игра: "Калькулятор"
Игроку показывается случайное арифметическое выражение (например, 5 + 3). Игрок должен вычислить и ввести правильный результат.
[![asciicast](https://asciinema.org/a/BM3GNH7AXcktewf9.svg)](https://asciinema.org/a/BM3GNH7AXcktewf9)
## Игра "НОД"
Игроку показываются два случайных числа. Его задача — вычислить и ввести их наибольший общий делитель (GCD).
[![asciicast](https://asciinema.org/a/1cCIrYfi7nocueP8.svg)](https://asciinema.org/a/1cCIrYfi7nocueP8)
## Игра "Арифметическая прогрессия"
Игроку показывается ряд чисел, образующих арифметическую прогрессию, в которой один элемент заменён на .. Игрок должен ввести пропущенное число.
[![asciicast](https://asciinema.org/a/IAF5oQ4cojVEMWvp.svg)](https://asciinema.org/a/IAF5oQ4cojVEMWvp)
## Игра "Простое ли число?"
Игроку показывается число. Игроку нужно определить, является ли оно простым, и ответить «yes» или «no».
[![asciicast](https://asciinema.org/a/zTlyXCKKGHfwFVPm.svg)](https://asciinema.org/a/zTlyXCKKGHfwFVPm)
## Установка
Требования:
- Должен быть установлен npm
- Должена быть установлена последная версия Node.js глобально.
Инструкция по установке:
## Инструкция по установке и запуску

1. Клонируйте репозиторий:
   git clone https://github.com/UilKarter/frontend-project-44.git

2. Перейдите в директорию проекта:
   cd frontend-project-44

3. Установите зависимости:
   make install
   (или npm install)

4. Установите пакет глобально (для запуска игр из любой папки):
   npm link
   (на некоторых системах может потребоваться sudo npm link)

5. Проверьте установку, запустив одну из игр:
   brain-games
   brain-even
   brain-calc
   brain-gcd
   brain-progression
   brain-prime
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=UilKarter_frontend-project-44)
