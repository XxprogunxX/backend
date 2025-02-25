import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const uri = 'mongodb://atlas-sql-67b7e145f1da1643d2e04f73-uwlht.a.query.mongodb.net/eggsync?ssl=true&authSource=admin';
    await mongoose.connect(uri);
    console.log(">>>>> Base de datos conectada (: <<<<<");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};