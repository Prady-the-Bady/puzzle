// Basic JavaScript for puzzle interaction
document.addEventListener('DOMContentLoaded', function() {
    console.log('Puzzle page loaded successfully!');
    
    // Add click handlers to puzzle pieces
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
    
    puzzlePieces.forEach(function(piece, index) {
        piece.addEventListener('click', function() {
            // Simple interaction: change color when clicked
            if (this.style.backgroundColor === 'rgb(255, 165, 0)') {
                this.style.backgroundColor = '#007acc';
            } else {
                this.style.backgroundColor = 'orange';
            }
        });
    });
    
    // Welcome message
    setTimeout(function() {
        console.log('Welcome to the Puzzle Game! Click on the numbered pieces to interact.');
    }, 1000);
});
