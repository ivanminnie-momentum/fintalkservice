const finTalkService = require('./finTalkService');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.post('/chat', (req, res) => {

    console.log(req.body);
    console.log(req.body.message);
    console.log(req.body.sessionId);

    finTalkService.chat(req.body.message, req.body.sessionId).then(
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
