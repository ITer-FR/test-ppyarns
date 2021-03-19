document.getElementById('Shi').addEventListener('click', function(a) {
    localStorage.setItem('score', 0);
    console.log('shi')
        // 0 = Shi ; 1 = Fu ; 2 = Mi : Mi beats Fu beats Shi beats Mi.
    localStorage.setItem('ennemyScore', Math.floor(Math.random() * 2))
    )
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

determinateWinner() {
    if (condition) {
        
    } else {
        
    }
}