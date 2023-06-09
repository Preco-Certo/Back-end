const ProdutoService = require("../services/ProdutoService");

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:{}};

        let produtos = await ProdutoService.getAll();

        if(produtos){
            json.result = produtos;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = {error:'', result:{}};

        let produto_id = req.params.id;
        let produtos = await ProdutoService.getById(produto_id);

        if(produtos){
            json.result = produtos;
        }
        res.json(json);
    },

    addProduto: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let tamanho = req.body.tamanho;
        let taxa_lucro = req.body.taxa_lucro;
        let codigo_receita = req.body.codigo_receita;

        try {
            await ProdutoService.addProduto(nome, descricao, tamanho, taxa_lucro, codigo_receita);
            json.result = {
                nome,
                descricao,
                tamanho,
                taxa_lucro,
                codigo_receita
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateProduto: async (req, res) => {
        let json = {error:'', result:{}};

        let produto_id = req.params.id;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let tamanho = req.body.tamanho;
        let taxa_lucro = req.body.taxa_lucro;
        let codigo_receita = req.body.codigo_receita;

        try{
            await ProdutoService.updateProduto(produto_id, nome, descricao, tamanho, taxa_lucro, codigo_receita);
            json.result = {
                nome,
                descricao,
                tamanho,
                taxa_lucro,
                codigo_receita
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);

    },

    deleteProduto: async(req, res) => {
        let json = {error:'', result:{}};

        await ProdutoService.deleteProduto(req.params.id);
        res.json(json);
    }

}