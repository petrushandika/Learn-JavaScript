/*
Rock Paper Scissors
*/
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateProcess('', '');
    updateResult('');
    updateScore();
}

function user(userPlay) {
    const computerPlay = computer();
    let result = '';

    if (userPlay === 'Rock') {
        if (computerPlay === 'Rock') {
            result = 'Tie!';
        } else if (computerPlay === 'Paper') {
            result = 'You Lose!'
        } else if (computerPlay === 'Scissors') {
            result = 'You Win!';
        }
    } else if (userPlay === 'Paper') {
        if (computerPlay === 'Rock') {
            result = 'You Win!';
        } else if (computerPlay === 'Paper') {
            result = 'Tie!';
        } else if (computerPlay === 'Scissors') {
            result = 'You Lose!';
        }
    } else if (userPlay === 'Scissors') {
        if (computerPlay === 'Rock') {
            result = 'You Lose!';
        } else if (computerPlay === 'Paper') {
            result = 'You Win!';
        } else if (computerPlay === 'Scissors') {
            result = 'Tie!';
        }
    }

    if (result === 'You Win!') {
        score.wins++;
    } else if (result === 'You Lose!') {
        score.losses++;
    } else {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    updateProcess(userPlay, computerPlay);
    updateResult(result);
    updateScore();
}

function updateProcess(userPlay, computerPlay) {
    document.querySelector('.output-process').innerHTML = `${userPlay} vs ${computerPlay}`;
}

function updateResult(result) {
    document.querySelector('.output-result').innerHTML = `${result}`;
}

function updateScore() {
    document.querySelector('.output-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function computer() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}