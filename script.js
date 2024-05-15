document.querySelectorAll('.loader').forEach(loader => {
    loader.addEventListener('click', function() {
        // Stop all audio elements
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        // Play the selected audio element
        const songId = this.getAttribute('data-song');
        const audioElement = document.getElementById(songId);
        audioElement.play();

        // Update currently playing display
        document.querySelector('.currentplaying .heading').textContent = `Currently Playing: ${this.querySelector('.name').textContent}`;
    });
});
