document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', enforceFormat);
    phoneInput.addEventListener('keypress', preventInvalidInput);

    function enforceFormat(event) {
        var value = phoneInput.value;
        
        value = value.replace(/[^\d+]/g, '');

        var cleanNumber = value.replace(/\D+/g, '');
        var formattedNumber = '+7 ';

        if (cleanNumber.startsWith('7')) {
            cleanNumber = cleanNumber.slice(1);
        }

        if (cleanNumber.length > 10) {
            cleanNumber = cleanNumber.substring(0, 10);
        }

        if (cleanNumber.length >= 3) {
            formattedNumber += '(' + cleanNumber.substring(0, 3) + ')';
        } else if (cleanNumber.length > 0) {
            formattedNumber += '(' + cleanNumber;
        }

        if (cleanNumber.length >= 6) {
            formattedNumber += ' ' + cleanNumber.substring(3, 6) + '-';
        } else if (cleanNumber.length > 3) {
            formattedNumber += ' ' + cleanNumber.substring(3);
        }

        if (cleanNumber.length >= 10) {
            formattedNumber += cleanNumber.substring(6, 10);
        } else if (cleanNumber.length > 6) {
            formattedNumber += cleanNumber.substring(6);
        }

        phoneInput.value = formattedNumber;
    }

    function preventInvalidInput(event) {
        if (!/\d/.test(event.key) && event.key !== '+') {
            event.preventDefault();
        }
    }
});
