document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    // Aqui entraria a lógica de enviar os dados, possivelmente via AJAX.
    document.getElementById("formResponse").style.display = "block";
});

document.getElementById('message').addEventListener('input', function() {
    const maxLength = 500;
    const currentLength = this.value.length;
    document.getElementById('charCount').textContent = `${maxLength - currentLength} caracteres restantes`;
});

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("formResponse").style.display = "block";
        } else {
            document.getElementById("formError").style.display = "block";
        }
    }).catch(error => {
        document.getElementById("formError").style.display = "block";
    });
});
