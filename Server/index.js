import express from 'express';
import cors from 'cors';
import playdl from 'play-dl'; // Using play-dl instead of ytdl-core
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/', (_, res) => {
    res.send('Welcome to the YouTube Downloader');
});

app.get('/downloadmp3', async (req, res) => {
    try {
        const url = req.query.url;
        if (!url || !(await playdl.validate(url))) return res.status(400).send('Invalid or missing YouTube URL');

        const info = await playdl.video_info(url);
        const title = info.video_details.title.replace(/[^\x00-\x7F]/g, '').replace(/ /g, '_');

        res.setHeader('Content-Disposition', `attachment; filename="${title}.mp3"`);
        res.setHeader('Content-Type', 'audio/mpeg');

        const stream = await playdl.stream(url, { quality: 2 }); // quality: 2 for audio

        // Pipe the audio stream directly to the response
        stream.stream.pipe(res);

        stream.stream.on('error', (err) => {
            console.error('Stream error:', err);
            res.status(500).send('Error during download');
        });
    } catch (error) {
        console.error('Download error:', error);
        res.status(500).send('Server error');
    }
});

app.get('/downloadmp4', async (req, res) => {
    try {
        const url = req.query.url;
        if (!url || !(await playdl.validate(url))) return res.status(400).send('Invalid or missing YouTube URL');

        const info = await playdl.video_info(url);
        const title = info.video_details.title.replace(/[^\x00-\x7F]/g, '').replace(/ /g, '_');

        res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`);
        res.setHeader('Content-Type', 'video/mp4');

        const stream = await playdl.stream(url, { quality: 1 }); // quality: 1 for video

        // Pipe the video stream directly to the response
        stream.stream.pipe(res);

        stream.stream.on('error', (err) => {
            console.error('Stream error:', err);
            res.status(500).send('Error during download');
        });
    } catch (error) {
        console.error('Download error:', error);
        res.status(500).send('Server error');
    }
});

app.use((_, res) => {
    res.status(404).send('Not Found');
});

app.use((err, _, res, __) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
