const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM produtos', (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    
    getById: (produtos_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM produtos WHERE id = ?', [produtos_id], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);          
            });
        });
    },

    addProduto: (nome, descricao, tamanho, taxa_lucro, codigo_receita) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO produtos (nome, descricao, tamanho, taxa_lucro, codigo_receita) VALUES (?, ?, ?, ?, ?)',
            [nome, descricao, tamanho, taxa_lucro, codigo_receita], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },

    updateProduto: (produtos_id, nome, descricao, tamanho, taxa_lucro, codigo_receita) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE produtos SET nome = ?, descricao = ?, tamanho = ?, taxa_lucro = ?, codigo_receita = ? WHERE id = ?',
            [nome, descricao, tamanho, taxa_lucro, codigo_receita, produtos_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results.updateId);
            });
        });
    },

    deleteProduto: (produtos_id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM produtos WHERE id = ?', [produtos_id], (error, results) => {
                if(error) { reject(error); return; }
                resolve(results)
            });
        });
    }


}