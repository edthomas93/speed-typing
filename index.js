window.addEventListener('load', start)

let time = 5;
let score = 0;
let isPlaying;

const seconds = document.querySelector('#seconds');
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');

const words= [
  'fox',
  'pan',
  'door',
  'tree',
  'leave',
  'plant',
  'derive',
  'edward',
  'thought',
  'giraffe',
  'bacteria',
  'laughter',
  'establish',
  'nutrition',
  'quadruplet',
  'definition',
  'applicable',
  'celebrated'
];

function start() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if(matchWords()) {
    console.log('Match!');
  }
}

function matchWords(){
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!'
  }
}