const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://db/myapp';

MongoClient.connect(mongoUri, async (err, client) => {
  if (err) throw err;

  const db = client.db('myapp');
  const studentsCollection = db.collection('students');

  // Insertion d'un étudiant et récupération de l'étudiant inséré
  const student = { name: 'Fadimata H ASCOFARE' };
  const result = await studentsCollection.insertOne(student);
  const insertedStudent = await studentsCollection.findOne({ _id: result.insertedId });

  console.log('Étudiant inséré:', insertedStudent);

  app.post('/add-student', async (req, res) => {
    const studentData = req.body;
    const insertResult = await studentsCollection.insertOne(studentData);
    const insertedStudent = await studentsCollection.findOne({ _id: insertResult.insertedId });

    res.status(201).json(insertedStudent);
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
});
