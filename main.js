document.getElementById('Shi').addEventListener('click', function(a) {
    localStorage.setItem('score', 0);
    console.log('shi')
        // 0 = Shi ; 1 = Fu ; 2 = Mi : Mi beats Fu beats Shi beats Mi.
    localStorage.setItem('ennemyScore', Math.floor(Math.random() * 3))
    
    determinateWinner()

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

function determinateWinner() {
    const myScore = localStorage.getItem('score')
    const ennemyScore = localStorage.getItem('ennemyScore')
    if (myScore === 0 && ennemyScore ===  1) {
        console.log('You lose : Shi vs Fu')
        localStorage.clear()
    } else if ( myScore === 0 && ennemyScore === 2 ) {
        console.log('You win : Shi vs Mi')
        localStorage.clear()
    } else if ( myScore === 0 && ennemyScore === 0 ) {
        console.log('equality, play another round !')
        playAgainEquality();
    }
}

function playAgainEquality() {

}