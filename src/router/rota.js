const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()


router.post('/contato', (req, res)=>{
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com'", // Substitua "yourdomain.com" pelo seu domínio na Hostinger
      port: 465, // A porta pode ser 587 ou 465, dependendo das configurações do seu provedor
      secure: true, // Use true para a porta 465, false para a porta 587
      auth: {
        user: "benolopesdias@gmail.com", // Substitua pelo seu endereço de e-mail
        pass: "abkdzzztgadalkhz", // Substitua pela sua senha
      },
    });
    

    let mensagem ={
        from:'contato@rhuna.tech' ,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text     
    }
     transport.sendMail(mensagem, function (erro){
        if(erro) return res.status(400).send({Erro: 'Erro ao enviar o email'})
     })
     return res.send({
        Ok: 'Email enviado com sucesso'
     })

})



module.exports = router