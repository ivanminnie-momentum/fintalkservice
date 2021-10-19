const finTalkService = require('./finTalkService');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.text());
app.post('/chat', (req, res) => {

    finTalkService.chat(req.body).then(
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
