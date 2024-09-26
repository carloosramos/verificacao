function verifyCard() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cpf = document.getElementById('cpf').value;

    // Verifica se todos os campos foram preenchidos
    if (cardNumber && expiryDate && cvv && cpf) {
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Desativa o botão se qualquer campo estiver vazio
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const cpf = document.getElementById('cpf').value;

        document.getElementById('verify-btn').disabled = !(cardNumber && expiryDate && cvv && cpf);
    });
});
