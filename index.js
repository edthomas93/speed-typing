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
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}