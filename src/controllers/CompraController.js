const CompraService = require("../services/CompraService");

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:{}};

        let compra = await CompraService.getAll();

        if(compra){
            json.result = compra;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = {error:'', result:{}};

        let compra_id = req.params.id;
        let compra = await CompraService.getById(compra_id);

        if(compra){
            json.result = compra;
        }
        res.json(json);
    },

    addCompra: async (req, res) => {
        let json = {error:'', result:{}};

        let nf_pedido = req.body.nf_pedido;
        let data = req.body.data;
        let codigo_fornecedor = req.body.codigo_fornecedor;

        try{
            await CompraService.addCompra(nf_pedido, data, codigo_fornecedor);
            json.result = {
                nf_pedido,
                data,
                codigo_fornecedor
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateCompra: async (req, res) => {
        let json = {error:'', result:{}};

        let compra_id = req.params.id;
        let nf_pedido = req.body.nf_pedido;
        let data = req.body.data;
        let codigo_fornecedor = req.body.codigo_fornecedor;

        try{
            await CompraService.updateCompra(compra_id, nf_pedido, data, codigo_fornecedor);
            json.result = {
                nf_pedido,
                data,
                codigo_fornecedor
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    delCompra: async (req, res) => {
        let json = {error:'', result:{}};

        await CompraService.delCompra(req.params.id);
        res.json(json);

    }

}