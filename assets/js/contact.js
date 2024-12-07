document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successAlert = document.getElementById("formResponse");
    const errorAlert = document.getElementById("formError");
    const charCount = document.getElementById("charCount");
    const messageInput = document.getElementById("message");

    // Atualiza o contador de caracteres
    messageInput.addEventListener("input", () => {
        const maxLength = 500;
        const currentLength = messageInput.value.length;
        charCount.textContent = `${maxLength - currentLength} caracteres restantes`;
    });

    // Submissão do formulário
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o comportamento padrão

        const formData = new FormData(form);

        fetch("https://formspree.io/f/mvgonoqw", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    successAlert.style.display = "block";
                    errorAlert.style.display = "none";
                    form.reset(); // Limpa o formulário após o envio
                    charCount.textContent = "500 caracteres restantes";
                } else {
                    throw new Error("Erro ao enviar o formulário");
                }
            })
            .catch(() => {
                errorAlert.style.display = "block";
                successAlert.style.display = "none";
            });
    });
});
