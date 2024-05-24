const express = require('express');
const cors = require('cors');
const fs = require('fs');
const PORT = 5000

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    const blogs = fs.readFileSync('blogs.json', 'utf8');
    const parsedBlogs = JSON.parse(blogs);
    res.status(200).json(parsedBlogs);
});

app.get('/shop', (req, res) => {
    const items = fs.readFileSync('itemInformation.json', 'utf8');
    const parsedItems = JSON.parse(items) // JSON.parse() am besten immer in Variable speichern, um Objecte richtig anzuzeigen
    res.status(200).json(parsedItems);
});

app.listen(PORT, () => 
    console.log(`Server läuft auf http://localhost:${PORT}`));