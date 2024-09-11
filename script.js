document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const urlInput = document.querySelector('.URL-input');
    const select = document.querySelector('.opt');
    const serverURL = 'http://localhost:4000';

    btn.addEventListener('click', async () => {
        const videoType = select.value;
        const videoUrl = urlInput.value.trim();

        try {
            validateInput(videoUrl);

            const downloadUrl = `${serverURL}/download${videoType}?url=${encodeURIComponent(videoUrl)}`;
            
            // Create an anchor element to force download
            const anchor = document.createElement('a');
            anchor.href = downloadUrl;
            anchor.download = true;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

        } catch (error) {
            handleFetchError(error);
        }
    });

    function validateInput(input) {
        if (!input) {
            throw new Error('Please enter a YouTube URL');
        }

        if (!isValidURL(input)) {
            throw new Error('Invalid YouTube URL');
        }
    }

    function handleFetchError(error) {
        console.error('Fetch error:', error);
        showAlert('An error occurred. Please try again later.');
    }

    function showAlert(message) {
        alert(message);
    }

    function isValidURL(input) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(input);
    }
});
