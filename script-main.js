//#region DECLARATIONS

// START VARIABLES
var selectedOperation;
var Name = "";
var score = 0;
var totalQuestions = 25;

// TIMER VARIABLES
var timeRemaining = 0;
var isPaused = false;
var timerInterval;

// GENERATION VARIABLES
var gen = "";
var num = 0;

//#endregion

//#region START
function register() {
    Name = document.getElementById('Username').value;
    if (Name == "") {
        document.getElementById('GameNa').innerHTML = "Welcome";
    } else {
        document.getElementById('GameNa').innerHTML = "Welcome, " + Name;
    }
    document.getElementById('OperationOptions').style.display = 'block';
    document.getElementById('reg').style.display = 'none';
}

function chooseOperation(operation) {
    const operations = ['addition', 'subtraction', 'multiplication', 'division', 'nomials'];
    const displayStyles = {
        'addition': 'inline',
        'subtraction': 'inline',    
        'multiplication': 'inline',
        'division': 'inline',
        'nomials': 'inline'
    };
    
    displayStyles[operation] = 'none';
    
    selectedOperation = operation;
    document.getElementById('DifficultyOptions').style.display = 'block';

    operations.forEach(op => {
        const buttonId = 'btn' + op.charAt(0).toUpperCase() + op.slice(1, 3);
        document.getElementById(buttonId).style.display = displayStyles[op];
    });

    console.log(selectedOperation);
}

function chooseDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy':
            timeRemaining = 600;
            break;
        case 'medium':
            timeRemaining = 400;
            break;
        case 'hard':
            timeRemaining = 300;
            break;
    }

    const displayStyles = {
        'easy': 'none',
        'medium': 'none',
        'hard': 'none'
    };

    displayStyles[difficulty] = 'inline';

    document.getElementById('StartButton').style.display = 'block';
    document.getElementById('btnEasy').style.display = displayStyles['easy'];
    document.getElementById('btnMedium').style.display = displayStyles['medium'];
    document.getElementById('btnHard').style.display = displayStyles['hard'];
}


function Start() {
    document.getElementById('hidesheet').style.display = 'block';
    document.getElementById('OperationOptions').style.display = 'none';
    document.getElementById('DifficultyOptions').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('StartButton').style.display = 'none';
    document.getElementById('PauseButton').style.display = 'block';

    if (!isPaused) {
        if (selectedOperation === 'nomials') {
            binomials(5, 5); 
        } else {
            if (timeRemaining === 600) {
                easy(5, 5); 
            } else if (timeRemaining === 400) {
                medium(5, 5);
            } else if (timeRemaining === 300) {
                hard(5, 5);
            }
        }
        solvingTimer();
    }
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    document.getElementById('SubmitButton').style.display = 'block';
    document.getElementById('SubmitButton').addEventListener('click', function() {
        validateAnswer();
    });
}
//#endregion

//#region GENERATION
function binomials(x, y) {
    gen = ""; 
    for (ordinate = 1; ordinate <= y; ordinate++) {
        let operation = selectedOperation;
        gen += '<tr>\n';

        for (abscissa = 1; abscissa <= x; abscissa++) {
            let coefficient1 = Math.floor(Math.random() * 10) + 1;
            let coefficient2 = Math.floor(Math.random() * 10) + 1;
            let variable1 = 'x';
            let variable2 = 'x';
            let exponent1 = Math.floor(Math.random() * 3) + 1;
            let exponent2 = Math.floor(Math.random() * 3) + 1;
            let constant1 = Math.floor(Math.random() * 10) + 1;
            let constant2 = Math.floor(Math.random() * 10) + 1;

            let binomial1 = `${coefficient1}${variable1}^${exponent1} + ${constant1}`;
            let binomial2 = `${coefficient2}${variable2}^${exponent2} + ${constant2}`;
            
            let result = foil(binomial1, binomial2);

            num++;
            gen += `<td><div class="tbl" id="sheet${num}">&nbsp;<br/>(${binomial1})(${binomial2})<br/>= <span class="result" id="result${num}">${result}</span>\n<input type="text" id="answer${num}" class="writeFromRight" size="8"><br/><br/><button onclick="validateAnswer(${num})" class="BtnStd">Check Answer</button><button onclick="showSolution(${num})" class="BtnStd">Show Solution!</button></div></td>\n`;
        }
        gen += '</tr>\n';
    }
    document.getElementById('tbl').innerHTML = gen;
    console.log(gen);
}

function easy(x, y) {
    gen = ""; 
    for (ordinate = 1; ordinate <= y; ordinate++) {
        let operation = selectedOperation;
        gen += '<tr>\n';

        for (abscissa = 1; abscissa <= x; abscissa++) {
            let num1 = Math.floor(Math.random() * 100) + 50;
            let num2 = Math.floor(Math.random() * 50) + 1;
            let oper, result;
            if (operation === 'addition') {
                oper = '+';
                result = num1 + num2;
                result = result.toString();
            } else if (operation === 'subtraction') {
                oper = '-';
                result = num1 - num2;
            } else if (operation === 'multiplication') {
                oper = 'x';
                result = num1 * num2;
            } else if (operation === 'division') {
                oper = '÷';
                result = num1 / num2;
                result = result.toFixed(2);
            }
            num++;
            gen += `<td><div class="tbl" id="sheet${num}">&nbsp;<br/>${num1}<br/>${oper} ${num2}<br/>= <span class="result" id="result${num}">${result}</span>\n<input type="text" id="answer${num}" class="writeFromRight" size="8"><br/><br/><button onclick="showSolution(${num})" class="BtnStd"><b>Show Solution!</b></button></div></td>\n`;
        }
        gen += '</tr>\n';
    }
    document.getElementById('tbl').innerHTML = gen;
    console.log(gen);
}

function medium(x, y) {
    gen = ""; 
    for (ordinate = 1; ordinate <= y; ordinate++) {
        let operation = selectedOperation;
        gen += '<tr>\n';

        for (abscissa = 1; abscissa <= x; abscissa++) {
            let num1 = Math.floor(Math.random() * 1000) + 50;
            let num2 = Math.floor(Math.random() * 500) + 1;
            let oper, result;
            if (operation === 'addition') {
                oper = '+';
                result = num1 + num2;
                result = result.toString();
            } else if (operation === 'subtraction') {
                oper = '-';
                result = num1 - num2;
            } else if (operation === 'multiplication') {
                oper = 'x';
                result = num1 * num2;
            } else if (operation === 'division') {
                oper = '÷';
                result = num1 / num2;
                result = result.toFixed(2);
            }
            num++;
            gen += `<td><div class="tbl" id="sheet${num}">&nbsp;<br/>${num1}<br/>${oper} ${num2}<br/>= <span class="result" id="result${num}">${result}</span>\n<input type="text" id="answer${num}" class="writeFromRight" size="8"><br/><br/><button onclick="showSolution(${num})" class="BtnStd"><b>Show Solution!</b></button></div></td>\n`;
        }
        gen += '</tr>\n';
    }
    document.getElementById('tbl').innerHTML = gen;
    console.log(gen);
}

function hard(x, y) {
    gen = ""; 
    for (ordinate = 1; ordinate <= y; ordinate++) {
        let operation = selectedOperation;
        gen += '<tr>\n';

        for (abscissa = 1; abscissa <= x; abscissa++) {
            let num1 = Math.floor(Math.random() * 10000) + 50;
            let num2 = Math.floor(Math.random() * 5000) + 1;
            let oper, result;
            if (operation === 'addition') {
                oper = '+';
                result = num1 + num2;
                result = result.toString();
            } else if (operation === 'subtraction') {
                oper = '-';
                result = num1 - num2;
            } else if (operation === 'multiplication') {
                oper = 'x';
                result = num1 * num2;
            } else if (operation === 'division') {
                oper = '÷';
                result = num1 / num2;
                result = result.toFixed(2);
            }
            num++;
            gen += `<td><div class="tbl" id="sheet${num}">&nbsp;<br/>${num1}<br/>${oper} ${num2}<br/>= <span class="result" id="result${num}">${result}</span>\n<input type="text" id="answer${num}" class="writeFromRight" size="8"><br/><br/><button onclick="showSolution(${num})" class="BtnStd"><b>Show Solution!</b></button></div></td>\n`;
        }
        gen += '</tr>\n';
    }
    document.getElementById('tbl').innerHTML = gen;
    console.log(gen);
}
//#endregion

//#region FUNCTIONALITIES

// POLYNOMIAL FUNCTION
function foil(binomial1, binomial2) {
    
    let terms1 = binomial1.split('+').map(term => term.trim());
    let terms2 = binomial2.split('+').map(term => term.trim());

    let coefficient1 = parseInt(terms1[0]);
    let coefficient2 = parseInt(terms2[0]);
    let exponent1 = parseInt(terms1[0].split('^')[1]);
    let exponent2 = parseInt(terms2[0].split('^')[1]);
    let constant1 = parseInt(terms1[1]);
    let constant2 = parseInt(terms2[1]);

    let first = coefficient1 * coefficient2;
    let outer = coefficient1 * constant2;
    let inner = constant1 * coefficient2;
    let last = constant1 * constant2;

    let result = `${first}x^${exponent1 + exponent2} + ${outer}x^${exponent1} + ${inner}x^${exponent2} + ${last}`;

    return result;
}

// ANSWER VALIDATION/SCORING SYSTEM
function calculateTotalScore() {
    document.getElementById('score').innerText = "Score: " + score.toString(); 
}

function validateAnswer() {
    let correctAnswers = 0; 
    for (let i = 1; i <= totalQuestions; i++) {
        const result = document.getElementById(`result${i}`);
        const userAnswer = document.getElementById(`answer${i}`).value;
        const correctAnswer = result.textContent;

        if (userAnswer === correctAnswer) {
            correctAnswers++; 
        }
    }
    score = correctAnswers
    document.getElementById('score').innerText = "Score: " + score + "/" + totalQuestions 
}



function showSolution(num) {
    const result = document.getElementById(`result${num}`);
    const showButton = document.getElementById(`showButton${num}`);
    const answerBox = document.getElementById(`answer${num}`);
    
    if (result.style.display === 'none' || result.style.display === '') {
        result.style.display = 'inline';
        showButton.style.display = 'none';
        answerBox.style.display = 'none';
    } else {
        result.style.display = 'none';
        showButton.style.display = 'inline';
        answerBox.style.display = 'block';
    }
}





// TIMER FUNCTIONALITIES
function solvingTimer() {
    document.getElementById('timer').innerHTML = "Time Remaining: " + SecondsToMinutes(timeRemaining);
    if (timeRemaining > 0 && !isPaused) { 
        timeRemaining--;
        timerInterval = setTimeout(solvingTimer, 1000);
    } else if (timeRemaining === 0) {
        gameOver();
    }
}

function SecondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var formattedMinutes = ('0' + minutes).slice(-2);
    var formattedSeconds = ('0' + remainingSeconds).slice(-2);
    return formattedMinutes + ':' + formattedSeconds;
}


function gameOver() {
    alert("Time's up!");
}

function Pause() {
    isPaused = !isPaused; 
    if (isPaused) {
        clearTimeout(timerInterval); 
        document.getElementById('tbl').style.display = 'none'; 
        document.body.style.backgroundColor = 'white'; 
        document.getElementById('PauseButton').innerText = 'Continue'; 
		document.getElementById('PauseButton').style.backgroundColor = 'green';
    } else {
        solvingTimer(); 
        document.getElementById('tbl').style.display = 'table'; 
        document.body.style.backgroundColor = ''; 
        document.getElementById('PauseButton').innerText = 'Pause'; 
		document.getElementById('PauseButton').style.backgroundColor = 'red'; 
    }
}
//#endregion