// Loop to know if won or lost called while clicking button

function determinateWinner() {
    const myScore = localStorage.getItem('score')
    const ennemyScore = localStorage.getItem('ennemyScore')
    if (myScore === 0 && ennemyScore ===  1) {
        alert('You lose : Shi vs Fu')
        localStorage.clear()
    } else if ( myScore === 0 && ennemyScore === 2 ) {
        alert('You win : Shi vs Mi')
        localStorage.clear()
    } else if ( myScore === 0 && ennemyScore === 0 ) {
        alert('equality, play another round !')
        playAgainEquality();
    } else if ( myScore === 1 && ennemyScore === 1 ) {
        alert('equality, play another round !')
        playAgainEquality();
    } else if ( myScore === 1 && ennemyScore === 2) {
        alert('You lose : Fu vs Mi')
    } else if ( myScore === 1 && ennemyScore === 0) {
        alert('You win : Fu vs Shi')
    } else if ( myScore === 2 && ennemyScore === 1) {
        alert('You lose : Mi vs Fu')
    } else if ( myScore === 2 && ennemyScore === 2) {
        alert('equality, play another round !')
        playAgainEquality();
    } else if ( myScore === 2 && ennemyScore === 0) {
        alert('You win : Fu vs Shi')
    } else {
        console.log('anythingToTest')
    }
}

document.getElementById('validateButton').addEventListener('click', function() {
    determinateWinner();
})

// Starts another game to determine the winner of the round

function playAgainEquality() {

}

// listeners on divs to play, "computer" will automatically play from math.random

document.getElementById('Shi').addEventListener('click', function(a) {
    localStorage.setItem('score', 0);
    console.log('shi')
        // 0 = Shi ; 1 = Fu ; 2 = Mi : Mi beats Fu beats Shi beats Mi.
    localStorage.setItem('ennemyScore', Math.floor(Math.random() * 3));
    
    determinateWinner();

})

document.getElementById('Fu').addEventListener('click', function(a) {
    localStorage.setItem('score', 1);
    console.log('fu')
        // 0 = Shi ; 1 = Fu ; 2 = Mi : Mi beats Fu beats Shi beats Mi.
    localStorage.setItem('ennemyScore', Math.floor(Math.random() * 2))

})

document.getElementById('Mi').addEventListener('click', function(a) {
    localStorage.setItem('score', 2);
    console.log('mi')
        // 0 = Shi ; 1 = Fu ; 2 = Mi : Mi beats Fu beats Shi beats Mi.
    localStorage.setItem('ennemyScore', Math.floor(Math.random() * 2))

})

