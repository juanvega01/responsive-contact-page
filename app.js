const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de middleware
app.use(express.static(__dirname));

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Errores
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

