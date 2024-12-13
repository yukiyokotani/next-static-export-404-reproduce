/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const path = require('path');

const app = express();
const basePath = '/next-static-export-404-reproduce';
const outDir = path.join(__dirname, 'out');

app.use(basePath, express.static(outDir));

app.get(`${basePath}/*`, (req, res) => {
    res.sendFile(path.join(outDir, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${basePath}`);
});
