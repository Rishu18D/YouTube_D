# YouTube_D

This project is a simple YouTube downloader web application that allows users to download YouTube videos in either MP3 or MP4 format. The frontend is built with HTML, CSS, and JavaScript, while the backend is powered by Node.js and Express.

## Features

- Download YouTube videos as MP3 (audio) or MP4 (video)
- Simple and user-friendly interface

## Technologies Used

- HTML, CSS, JavaScript for the frontend
- Node.js and Express for the backend
- [ytdl-core](https://www.npmjs.com/package/ytdl-core) for downloading YouTube videos
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) for processing video/audio

## Installation

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/Rishu18D/YouTube_D.git
    cd YouTube_D
    ```

2. Navigate to the server directory and install dependencies:

    ```sh
    cd Server
    npm install
    ```

3. Start the server:

    ```sh
    node index.js
    ```

4. Open `index.html` in your browser to use the application.

## Usage

1. Enter the URL of the YouTube video you want to download.
2. Select the format (MP3 or MP4).
3. Click the "Convert" button.
4. The video will be processed and a download link will appear.

## Project Structure

.
├── Server
│ ├── .gitignore
│ ├── index.js
│ ├── package.json
├── index.html
├── script.js
├── style.css



- `Server/index.js`: The backend server code.
- `index.html`: The main HTML file for the frontend.
- `script.js`: The JavaScript file handling frontend logic.
- `style.css`: The CSS file for styling the frontend.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [ytdl-core](https://www.npmjs.com/package/ytdl-core) for YouTube video downloading.
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) for processing video and audio.

## Contact

For any questions or inquiries, please contact [Your Name] at [your email].



