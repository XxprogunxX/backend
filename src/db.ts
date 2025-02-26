import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const uri = 'mongodb+srv://javierhdz754:AyrmLSUp4ZsEvb6W@cluster0.uwlht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(uri);
    console.log(">>>>> Base de datos conectada (: <<<<<");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};
