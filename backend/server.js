const express = require("express")
const port = 3000
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/post", require("../routes/post.routes"))

// Lancer le serveur
app.listen(port, ()=> console.log("le serveur à démarré"))
