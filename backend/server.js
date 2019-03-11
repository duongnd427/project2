const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const apiRouter = require('./routers/apiRouter');
const userRouter = require('./routers/apiUserRouter');
const mysql = require('./mysql')

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: [ 'http://localhost:3000'], credentials: true }));

app.use(session({
    secret: 'bimat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 2 * 60 * 60 * 1000 }
}))

app.use((req, res, next) => {
    // console.log(req.session);
    next();
})

app.use('/api', apiRouter);

const port = 1010;

app.listen(port, (err) => {
    if(err) console.error(err)
    else console.log(`Server is listening at ${port}`);
});

mysql.connect( err => {
    if(err) console.error(err)
    console.log('db connected');
});