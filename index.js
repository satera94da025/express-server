const express = require("express");
const cors = require('cors')
const {v1} = require("uuid");
const app = express(); // create express app


function pass_gen(len) {
    let chars = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
    let str = '';
    for (let i = 0; i < len; i++) {
        const pos = Math.floor(Math.random() * chars.length);
        str += chars.substring(pos, pos + 1);
    }
    return str;
}

app.use(cors())




app.get('/api/users', (req, res) => {

    const last_n_messages = +req.query.last_n_messages


    const users = [
        {id: v1(), name: 'John', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Helen', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Alex', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Nate', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Tommy', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Liza', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Roma', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Kate', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Jared', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Tim', date: new Date().toISOString(), message: pass_gen(20)},
        {id: v1(), name: 'Bernard', date: new Date().toISOString(), message: pass_gen(20)},
    ]

    let uu = []
    for (let i = 0; i < last_n_messages; i++) {
        uu.unshift(users[users.length - 1 - i])
    }
    res.status(200).json(last_n_messages ? uu : users)

})


app.get("/", (req, res) => {
    res.send("This is from express.js !!");

});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});