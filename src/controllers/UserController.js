const UserService = require('../services/UserService');

module.exports = {

    getAll: async (req, res) => {
        let json = {error: '', result: {}};

        let user = await UserService.getAll();

        if(user) {
            json.result = user;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = {error: '', result: {}};

        let user_id = req.params.id;
        let user = await UserService.getById(user_id);

        if(user) {
            json.result = user;
        }
        res.json(json);
    },

    addUser: async (req, res) => {
        let json = {error: '', result: {}};
        
        let nome = req.body.nome;
        let login = req.body.login;
        let senha = req.body.senha;
        let nivel = req.body.nivel;
        let cpf = req.body.cpf;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;

        try{
            await UserService.addUser(nome, login, senha, nivel, cpf, rua, numero, complemento);
            json.result = {
                nome,
                login,
                senha,
                nivel,
                cpf,
                rua,
                numero,
                complemento
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateUser: async (req, res) => {
        let json = {error:'', result: {}};

        let user_id = req.params.id;
        let nome = req.body.nome;
        let login = req.body.login;
        let senha = req.body.senha;
        let nivel = req.body.nivel;
        let cpf = req.body.cpf;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let complemento = req.body.complemento;
        
        try {
            await UserService.updateUser(user_id, nome, login, senha, nivel, cpf, rua, numero, complemento);
            json.result = {
                nome,
                login,
                senha,
                nivel,
                cpf,
                rua,
                numero,
                complemento,
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    
    },

    delUser: async (req, res) => {
        let json = {error: '', result: {}};

        await UserService.delUser(req.params.id);
        res.json(json);
    },

    login: async (req, res) => {
        try {
            let login = req.body.login;
            let senha = req.body.senha;

            let results = await UserService.login(login);

            console.log(results);
            if(senha == results[0].senha){
                return res.status(200).send({
                    message: 'Autenticado com sucesso',
                });
            }
            return res.status(401).send({ message: 'Falha na autenticação'});
        }catch(error){
            console.log(error);
            return res.status(500).send({ message: 'Falha na autenticação'});
        }
    }

}