// Import mysql module and dotenv to manage environment variables
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}); 

db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal: ', err);
        return;
    }
    console.log('Koneksi ke database berhasil!');
});

export default db;