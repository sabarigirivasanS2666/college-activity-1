document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    function hideAlerts() {
        document.getElementById('errorAlert').classList.remove('show');
        document.getElementById('successAlert').classList.remove('show');
    }

    function showError(msg) {
        hideAlerts();
        const el = document.getElementById('errorAlert');
        el.textContent = msg;
        el.classList.add('show');
    }

    function showSuccess(msg) {
        hideAlerts();
        const el = document.getElementById('successAlert');
        el.textContent = msg;
        el.classList.add('show');
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        if (email === 'admin@odoocafe.com' && password === 'admin123') {
            showSuccess('Login successful! Redirecting...');
            setTimeout(() => window.location.href = 'dashboard.html', 600);
        } else {
            showError('Invalid login. Use admin@odoocafe.com / admin123');
        }
    });
});
