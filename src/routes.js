const express = require('express');
const router = express.Router();

// Usuarios
const UserController = require("./controllers/UserController");
router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.post('/user', UserController.addUser);
router.patch('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.delUser);
router.post('/login', UserController.login);

// INGREDIENTES
const IngredienteController = require("./controllers/IngredienteController");
router.get('/ingredientes', IngredienteController.getAll);
router.get('/ingrediente/:id', IngredienteController.getById);
router.post('/ingrediente', IngredienteController.addIngrediente);
router.patch('/ingrediente/:id', IngredienteController.updateIngrediente);
router.delete('/ingrediente/:id', IngredienteController.deleteIngrediente);

//PRODUTOS
const ProdutoController = require("./controllers/ProdutoController");
router.get('/produtos', ProdutoController.getAll);
router.get('/produto/:id', ProdutoController.getById);
router.post('/produto', ProdutoController.addProduto);
router.patch('/produto/:id', ProdutoController.updateProduto);
router.delete('/produto/:id', ProdutoController.deleteProduto);

//COMPRA
const CompraController = require("./controllers/CompraController");
router.get('/compra', CompraController.getAll);
router.get('/compra/:id', CompraController.getById);
router.post('/compra', CompraController.addCompra);
router.patch('/compra/:id', CompraController.updateCompra);
router.delete('/compra/:id', CompraController.delCompra);

//COMPRA_INGREDIENTES
const CompraIngredienteController = require("./controllers/CompraIngredienteController");
router.get('/compraingrediente', CompraIngredienteController.getAll);
router.get('/compraingrediente/compra/:id', CompraIngredienteController.getByCompraId);
router.get('/compraingrediente/ingrediente/:id', CompraIngredienteController.getByIngredienteId);
router.post('/compraingrediente', CompraIngredienteController.addCompraIngrediente);

module.exports = router;