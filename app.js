/* modules import */
import express from "express";
import handlebars from 'express-handlebars'
import { fileURLToPath } from 'url'
import path from 'path'
import bodyParser from 'body-parser'

/* config app */
const app = express();

/* config handlebars */
const hdb = handlebars.create({

    defaultLayout: 'main',
    extname: '.hbs'
})

app.engine('hbs', hdb.engine)
app.set('view engine', 'hbs')

/* filename & dirname */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* statics files */
app.use(express.static(path.join(__dirname, 'public')))

/* body parser */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* internal routes */
app.get("/", (req, res) => {
    res.render("home")
})

/* server listen */
app.listen(3000, () => {
    console.log("server fly - localhost:3000")
})