import express from "express";
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get("/healthcheck", (req, res) =>{
    res.send('Healthcheck')
})

app.listen(port, () => {
    console.log(`Ejecutando app en el puerto ${port}`);
});
