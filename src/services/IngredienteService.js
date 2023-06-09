const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ingredientes', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    
    getById: (ingredientes_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ingredientes WHERE id = ?', [ingredientes_id], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);          
            });
        });
    },

    addIngrediente: (nome, tamanho, valor_unitario) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ingredientes (nome, tamanho, valor_unitario) VALUES (?, ?, ?)',
            [nome, tamanho, valor_unitario], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },

    updateIngrediente: (ingredientes_id, nome, tamanho, valor_unitario) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE ingredientes SET nome = ?, tamanho = ?, valor_unitario = ? WHERE id = ?',
            [nome, tamanho, valor_unitario, ingredientes_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.updateId);
            });
        });
    },

    deleteIngrediente: (ingredientes_id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM ingredientes WHERE id = ?', [ingredientes_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results)
            });
        });
    }


}