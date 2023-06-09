const CompraIngredienteService = require("../services/CompraIngredienteService");

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:{}};

        let compraIngrediente = await CompraIngredienteService.getAll();

        if(compraIngrediente){
            json.result = compraIngrediente;
        }
        res.json(json);
    },

    getByCompraId: async (req, res) => {
        let json = {error:'', result:{}};

        let compra_id = req.params.id;
        let compraIngrediente = await CompraIngredienteService.getByCompraId(compra_id);

        if(compraIngrediente){
            json.result = compraIngrediente;
        }
        res.json(json);
    },

    getByIngredienteId: async (req, res) => {
        let json = {error:'', result:{}};

        let ingrediente_id = req.params.id;
        let compraIngrediente = await CompraIngredienteService.getByIngredienteId(ingrediente_id);

        if(compraIngrediente){
            json.result = compraIngrediente;
        }
        res.json(json);
    },

    addCompraIngrediente: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo_ingrediente = req.body.codigo_ingrediente;
        let codigo_compra = req.body.codigo_compra;
        let quantidade = req.body.quantidade;
        let valor = req.body.valor;

        try{
            await CompraIngredienteService.addCompraIngrediente(codigo_ingrediente, codigo_compra, quantidade, valor);
            json.result = {
                codigo_ingrediente,
                codigo_compra,
                quantidade,
                valor,
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    }

}