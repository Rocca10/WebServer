const express = require("express");
const path = require("path"); //Es para poner dirname, es una libreria de node
const app = express();

//comando para ejectuarlo nodemon: npm run start
//comando para ejecutarlo con node: node app.js (app es el nombre del archivo)

app.get('/',(req,res)=>{
    //res.send("Pagina principal") Es para probar que corrió el servidor

    //res.sendFile("C:/Users/Aula 3.4/Desktop/WebServer/index.html"); //Aca le mando el archivo html para poder ir armando el servidor. No se usa muy seguido esta manera ya que si cambia la dirección de donde se alojó el archivo pierdo todo. Conviene hacerlo con dirname path

    res.sendFile(path.join(__dirname + "/index.html")); //Lo bueno es que si movemos la ruta de index html, la va a correr igual ya que dirname la busca automaticamente.
})

app.get('/index.html',(req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
}) //Tengo que ponerlo asi por que si no me da error y no me envía a la pagina de inicio.

app.get('/login.html',(req, res)=>{
    res.sendFile(path.join(__dirname + '/login.html')); //Tener en cuenta que se pone sendFile y no solo send y poner el .html, si no da get error.
})

app.get('/contacto.html',(req,res)=>{
    res.sendFile(path.join(__dirname + '/contacto.html'))
})

app.listen(3000,()=>{
    console.log("Servidor corriendo",3000);
});