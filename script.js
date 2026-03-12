const quotes = {
easy: [
"The cat sat on the mat",
"I love to code every day",
"The sun is shining bright",
"Practice makes you better"
],
medium: [
"Programming is the art of telling another human what one wants the computer to do",
"Success in coding comes from practice and persistence",
"Typing speed improves with consistent practice and focus"
],
hard: [
"JavaScript allows you to build amazing interactive websites with complex functionality",
"The quick brown fox jumps over the lazy dog while demonstrating pangram efficiency",
"Mastering algorithms requires dedication, problem-solving skills, and continuous learning"
]
};

const quoteDisplay = document.getElementById("quote");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const streakDisplay = document.getElementById("streak");
const completedDisplay = document.getElementById("completed");
const progressBar = document.getElementById("progress");
const highScoreDisplay = document.getElementById("highScore");
const totalCompletedDisplay = document.getElementById("totalCompleted");
const modal = document.getElementById("resultModal");
const playAgainBtn = document.getElementById("playAgain");

let timer;
let time = 0;
let startTime = 0;
let correctChars = 0;
let totalTyped = 0;
let streak = 0;
let maxStreak = 0;
let difficulty = 'easy';
let highScore = localStorage.getItem('typingHighScore') || 0;
let totalCompleted = localStorage.getItem('totalCompleted') || 0;
let currentQuoteLength = 0;
let testActive = false;
let sessionCompleted = 0;
let sessionStartTime = 0;
let totalWPM = 0;
let bestAccuracy = 0;

highScoreDisplay.textContent = highScore;
totalCompletedDisplay.textContent = totalCompleted;

startBtn.addEventListener("click",()=>{
startSession();
loadNextQuote();
});

stopBtn.addEventListener('click',()=>{
endSession();
});

document.querySelectorAll('.diff-btn').forEach(btn=>{
btn.addEventListener('click',()=>{
if(testActive) return;
document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
difficulty = btn.dataset.level;
});
});

playAgainBtn.addEventListener('click',()=>{
modal.classList.remove('show');
startSession();
loadNextQuote();
});

function startSession(){
sessionCompleted = 0;
sessionStartTime = Date.now();
totalWPM = 0;
bestAccuracy = 0;
startBtn.style.display='none';
stopBtn.style.display='inline-block';
completedDisplay.textContent = 0;
}

function loadNextQuote(){
const quoteList = quotes[difficulty];
const randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)];

quoteDisplay.innerHTML="";
quoteDisplay.classList.remove('completed');

randomQuote.split("").forEach(char=>{
const span=document.createElement("span");
span.innerText=char;
quoteDisplay.appendChild(span);
});

currentQuoteLength = randomQuote.length;

input.value="";
input.disabled=false;
input.focus();

time=0;
startTime = Date.now();
testActive = true;

timeDisplay.textContent='0.0s';

correctChars=0;
totalTyped=0;

progressBar.style.width='0%';
wpmDisplay.textContent=0;

clearInterval(timer);
timer=setInterval(updateTimer,100);
}

function updateTimer(){

if(!testActive) return;

time = ((Date.now() - startTime) / 1000).toFixed(1);

timeDisplay.textContent=time+'s';

calculateWPM();

}

input.addEventListener("input",()=>{
if(!testActive) return;

const quoteChars=quoteDisplay.querySelectorAll("span");
const typedChars=input.value.split("");

correctChars=0;
totalTyped=typedChars.length;

let currentCorrect = true;

quoteChars.forEach((char,index)=>{
const typedChar=typedChars[index];

if(typedChar==null){
char.classList.remove("correct","incorrect");
}
else if(typedChar===char.innerText){
char.classList.add("correct");
char.classList.remove("incorrect");
correctChars++;
}
else{
char.classList.add("incorrect");
char.classList.remove("correct");
currentCorrect = false;
}
});

if(currentCorrect && totalTyped > 0){
streak++;
maxStreak = Math.max(maxStreak, streak);
}else if(totalTyped > 0){
streak = 0;
}

streakDisplay.textContent = streak;
if(streak > 10) streakDisplay.parentElement.style.transform = 'scale(1.1)';
else streakDisplay.parentElement.style.transform = 'scale(1)';

const progress = (totalTyped / quoteChars.length) * 100;
progressBar.style.width = Math.min(progress, 100) + '%';

calculateAccuracy();

if(correctChars === currentQuoteLength && totalTyped === currentQuoteLength){
testActive = false;
clearInterval(timer);

const currentWPM = parseInt(wpmDisplay.textContent);
const currentAcc = parseInt(accuracyDisplay.textContent);
totalWPM += currentWPM;
bestAccuracy = Math.max(bestAccuracy, currentAcc);

if(currentWPM > highScore){
highScore = currentWPM;
localStorage.setItem('typingHighScore', highScore);
highScoreDisplay.textContent = highScore;
}

sessionCompleted++;
totalCompleted++;
completedDisplay.textContent = sessionCompleted;
localStorage.setItem('totalCompleted', totalCompleted);
totalCompletedDisplay.textContent = totalCompleted;

quoteDisplay.classList.add('completed');

setTimeout(()=>{
loadNextQuote();
}, 600);
}
});

function calculateWPM(){

const words=correctChars/5;

const minutes=time/60;

const wpm=Math.round(words/minutes || 0);

wpmDisplay.textContent=wpm;

}

function calculateAccuracy(){
const accuracy=Math.round((correctChars/totalTyped)*100);
accuracyDisplay.textContent=(accuracy || 100)+"%";
}

function endSession(){
testActive = false;
clearInterval(timer);
input.disabled=true;
showResults();
}

function showResults(){
const totalTime = ((Date.now() - sessionStartTime) / 1000).toFixed(1);
const avgWPM = sessionCompleted > 0 ? Math.round(totalWPM / sessionCompleted) : 0;

document.getElementById('finalCompleted').textContent = sessionCompleted;
document.getElementById('avgWPM').textContent = avgWPM;
document.getElementById('totalTime').textContent = totalTime + 's';
document.getElementById('bestAccuracy').textContent = bestAccuracy + '%';

if(avgWPM > highScore){
document.getElementById('newRecord').style.display = 'block';
}else{
document.getElementById('newRecord').style.display = 'none';
}

startBtn.style.display='inline-block';
stopBtn.style.display='none';

modal.classList.add('show');
}