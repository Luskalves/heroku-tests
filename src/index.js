const express = require('express');

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Criando os baguio!!');
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})