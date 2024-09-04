
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        document.getElementById('registrationForm').reset();
    });
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword').value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    
        let notification = document.getElementById('notification');
        notification.classList.add('show');
    
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    
        document.getElementById('registrationForm').reset();
    });
