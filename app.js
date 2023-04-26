const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const {returnKeys} = require('./sol')
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
// app.use(adminRoutes);
// app.use(shopRoutes);

app.post("/getKeys", (req, res, next) => {
    returnKeys(req.body.url, (allkeys) => {
        res.send(allkeys);
    })
})
app.listen(3000);
