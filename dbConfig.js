const { MongoClient } = require('mongodb');

module.exports = async function connectToDatabase() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://db/myapp';
    return await MongoClient.connect(uri);
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1); // Arrête le processus en cas d'échec de la connexion
  }
};