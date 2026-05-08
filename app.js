/* modules import */
import express from "express";
import handlebars from 'express-handlebars'

/* config app */
const app = express();

/* config handlebars */
const hdb = handlebars.create({
    
    defaultLayout: 'main',
    extname: '.hbs'
})

app.engine('hbs', hdb.engine)
app.set('view engine', 'hbs')

/* server listen */
app.listen(3000, () => {
    console.log("server fly - localhost:3000")
})