import express from 'express';

const app = express();

/**
 * GET => Burcas
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteraçao especifica
 */
// Criando rotas
 //http://localhost:3000/users

app.get("/", (request, response) => {
    return response.json({message: "Hello Word _ NLW#4" })
});

app.post("/", (request, response) =>{
    //recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucessos!"})
})
app.listen(3000,
    () => console.log("server is running"));