const bubbleContainer = document.querySelector('.bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Random size
    const size = Math.random() * (50 - 15) + 15; // Size between 15px and 50px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random position
    const leftPosition = Math.random() * 100; // Percentage
    bubble.style.left = `${leftPosition}%`;

    // Random animation duration
    const duration = Math.random() * (10 - 5) + 5; // Duration between 5s and 10s
    bubble.style.animationDuration = `${duration}s`;

    bubbleContainer.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create a bubble every 500 milliseconds
setInterval(createBubble, 500);