document.getElementById('name-input').addEventListener('input', function () {
    const input = document.getElementById('name-input').value.trim();
    const output = document.getElementById('name-output');

    if (input) {
        output.textContent = input;
    } else {
        output.textContent = 'Anonymous';
    }
});