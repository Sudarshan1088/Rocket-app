const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const homePage = path.join(__dirname, 'frontend', 'index.html');

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(homePage);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});