const IngredienteService = require("../services/IngredienteService");

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:{}};

        let ingredientes = await IngredienteService.getAll();

        if(ingredientes){
            json.result = ingredientes;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = {error:'', result:{}};

        let ingrediente_id = req.params.id;
        let ingredientes = await IngredienteService.getById(ingrediente_id);

        if(ingredientes){
            json.result = ingredientes;
        }
        res.json(json);
    },

    addIngrediente: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let valor_unitario = req.body.valor_unitario;

        try {
            await IngredienteService.addIngrediente(nome, tamanho, valor_unitario);
            json.result = {
                nome,
                tamanho,
                valor_unitario
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateIngrediente: async (req, res) => {
        let json = {error:'', result:{}};

        let ingrediente_id = req.params.id;
        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let valor_unitario = req.body.valor_unitario;

        try{
            await IngredienteService.updateIngrediente(ingrediente_id, nome, tamanho, valor_unitario);
            json.result = {
                nome,
                tamanho,
                valor_unitario
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);

    },

    deleteIngrediente: async(req, res) => {
        let json = {error:'', result:{}};

        await IngredienteService.deleteIngrediente(req.params.id);
        res.json(json);
    }

}