 document.getElementById('signInForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Please fill in both fields.');
            return;
        }

        alert('Sign-In successful!');
});

