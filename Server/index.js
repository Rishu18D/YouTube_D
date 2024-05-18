import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/', (_, res) => {
    res.send('Welcome to the YouTube Downloader');
});

app.get('/downloadmp3', async (req, res) => {
    const url = req.query.url;
    if (!url || !ytdl.validateURL(url)) return res.status(400).send('Invalid or missing YouTube URL');

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\x00-\x7F]/g, '');

    res.setHeader('Content-Disposition', `attachment; filename="${title}.mp3"`);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.status(200);

    ytdl(url, { quality: 'highestaudio' }).pipe(res);
});

app.get('/downloadmp4', async (req, res) => {
    const url = req.query.url;
    if (!url || !ytdl.validateURL(url)) return res.status(400).send('Invalid or missing YouTube URL');

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\x00-\x7F]/g, '');

    res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`);
    res.setHeader('Content-Type', 'video/mp4');
    res.status(200);

    ytdl(url, { quality: 'highestvideo' }).pipe(res);
});

app.use((_, res) => {
    res.status(404).send('Not Found');
});

app.use((err, _, res, __) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server Works !!! At port ${PORT}`);
});

export default app;
