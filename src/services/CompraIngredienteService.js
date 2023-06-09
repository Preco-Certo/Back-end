const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM compra_ingredientes', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getByCompraId: (compra_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM compra_ingredientes WHERE codigo_compra = ?',[compra_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getByIngredienteId: (ingrediente_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM compra_ingredientes WHERE codigo_ingrediente = ?',[ingrediente_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    addCompraIngrediente: (codigo_ingrdiente, codigo_compra, quantidade, valor) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO compra_ingredientes (codigo_ingrediente, codigo_compra, quantidade, valor) VALUES (?, ?, ?, ?)',
            [codigo_ingrdiente, codigo_compra, quantidade, valor], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            })
        })
    }

}