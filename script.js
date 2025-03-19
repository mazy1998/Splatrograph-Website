function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const button = document.querySelector(`button[onclick="copyText('${elementId}')"]`);
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(() => {
            button.innerText = originalText;
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
} 