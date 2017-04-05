import bodyParser from 'body-parser'
import Express from 'express'

let app = Express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let port = process.env.port || 8080