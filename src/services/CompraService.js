const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM compra', (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    getById: (compra_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM compra WHERE id = ?',[compra_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    addCompra: (nf_pedido, data, codigo_fornecedor) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO compra (nf_pedido, data, codigo_fornecedor) VALUES (?, ?, ?)', 
            [nf_pedido, data, codigo_fornecedor], (error, result) => {
                if(error) { reject(error); return; }
                resolve(result.insertId);
            });
        });
    },

    updateCompra: (compra_id, nf_pedido, data, codigo_fornecedor) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE compra SET nf_pedido = ?, data = ?, codigo_fornecedor = ? WHERE id = ?',
            [nf_pedido, data, codigo_fornecedor, compra_id], (error, result) => {
                if(error) {reject(error); return; }
                resolve(result.updateId);
            })
        })
    },

    delCompra: (compra_id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM compra WHERE id = ?', [compra_id], (error, result) => {
                if(error) {reject(error); return; }
                resolve(result);
            });
        });
    }

}