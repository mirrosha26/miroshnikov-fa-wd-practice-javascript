document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        
        form.style.display = 'none';

        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = firstName + ', спасибо за заявку!';
        
        document.querySelector('.page').appendChild(thankYouMessage);
    });
});
