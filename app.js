document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Obrigado, ${name}! Sua inscrição foi recebida.`);
        document.getElementById('registration-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
