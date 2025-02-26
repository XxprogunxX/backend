import app from "./app.ts";
import { connectDB } from "./db.ts";

// Conectar a la base de datos antes de iniciar el servidor
connectDB()
  .then(() => {
    // Iniciar el servidor después de conectar a la base de datos
    app.listen(3000, () => {
      console.log('Server on port 3000');
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
  });
