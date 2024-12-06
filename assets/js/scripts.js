document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração aleatória da animação
        snowflake.style.opacity = Math.random(); // Opacidade aleatória
        snowflake.style.transform = `scale(${Math.random()})`; // Tamanho aleatório
        body.appendChild(snowflake);

        // Remove o floco de neve após a animação
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Gera flocos de neve continuamente
    setInterval(createSnowflake, 150);
});

document.addEventListener('DOMContentLoaded', function () {
    const endTime = new Date(new Date().getTime() + 60 * 60 * 1000); // Contagem regressiva de 1 hora
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        if (distance < 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = "Oferta Expirada!";
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
});
