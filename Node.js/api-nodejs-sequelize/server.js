require('dotenv').config(); // Carga las variables de entorno desde un archivo .env
const app = require('./app'); // Importa la aplicación de Express

const PORT = process.env.PORT || 3001; // Define el puerto en el que el servidor escuchará, usando una variable de entorno o el puerto 3001 por defecto

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Mensaje de éxito al iniciar el servidor
});