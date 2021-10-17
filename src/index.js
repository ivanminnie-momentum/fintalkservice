const finTalkService = require('./finTalkService');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors({
    //origin: 'http://localhost:4200'
    origin: '*'
}));

app.post('/chat', (req, res) => {

    console.log(req);
    finTalkService.chat('hello').then(
        function(value) {
            res.send({message: value});
        },
        function(error) {
            console.log(error);
        }
    );

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
