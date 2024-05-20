const express = require('express');
const path = require('path');
const fbtRoutes = require('./src/user/routes');
//const scrape = require('../../scrape');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/fbt', fbtRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(port, () => console.log(`app listening on port ${port}`));
