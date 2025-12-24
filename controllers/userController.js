import db from "../config/db.js";  

// Menampilkan data dari tabel
//get ? select * From users
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});

        // Jika berhasil
        res.status(200).json(results);
    });
}


// Menyimpan data
// sql : insert into users (name, email) values (?, ?)
export const insertUser = (req, res) => {
    const { name, email,password } = req.body;

    db.query("INSERT INTO users (name, email,password) VALUES (?, ?, ?)", [name, email,password], (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.status(201).json({ message: "Data berhasil disimpan!" });
    });
}

// Menampilkan data berdaasa ID
// select * from users where id = ?
export const showUser = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});

        // Jika data ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "User tidak ditemukan!" });
        }
        //Jika ditemukan
        res.json(results[0]);
    });
}

// Update data
// sql : update users set name = ?, email = ? where id = ?
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email} = req.body;

    db.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email,password, id], (err, results) => {
        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.json({ message: "Data berhasil diupdate!" });
    });
}

// Menghapus data
// sql : delete from users where id = ?
export const deleteUser = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.json({ message: "Data berhasil dihapus!" });
    });
}