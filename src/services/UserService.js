const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM funcionarios', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getById: (user_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM funcionarios WHERE id = ?', [user_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    addUser: (nome, login, senha, nivel, cpf, rua, numero, complemento) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO funcionarios (nome, login, senha, nivel, cpf, rua, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [nome, login, senha, nivel, cpf, rua, numero, complemento], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },

    updateUser: (user_id, nome, login, senha, nivel, cpf, rua, numero, complemento) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE funcionarios SET nome = ?, login = ?, senha = ?, nivel = ?, cpf = ?, rua = ?, numero = ?, complemento = ? WHERE id = ?',
            [nome, login, senha, nivel, cpf, rua, numero, complemento, user_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.updateId);
            });
        });
    },

    delUser: (user_id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM funcionarios WHERE id = ?', [user_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    login: (login) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT login, senha FROM funcionarios WHERE login = ?', [login], (error, results) => {
                if(error) { reject(error); return; }
                return resolve(results);
            });
        });
    }


}