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

document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const endTime = new Date().getTime() + 3600 * 1000; // 1 hora a partir de agora

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            timerElement.innerHTML = "Promoção encerrada!";
            clearInterval(interval);
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // Atualiza imediatamente ao carregar a página
});
