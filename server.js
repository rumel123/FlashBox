const express = require('express');
const cors = require('cors');
const path = require('path');
const fbtRoutes = require('./src/user/routes');

const app = express();
const port = 3000;

app.use(cors());


app.use(express.json());
app.use('/api/v1/fbt', fbtRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.js', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.js'));
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // adjust in production
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/fbt/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM trackingfbt WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({message: 'Data not found'});
        }
    } catch (error) {
        console.error('Database query error', error.stack);
        res.status(500).json({message: 'Server error'});
    }
});


app.listen(port, () => console.log(`app listening on port ${port}`));
