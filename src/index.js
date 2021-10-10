const finTalkService = require('./finTalkService');
const express = require('express')
const app = express()
const port = 3000

app.post('/chat', (req, res) => {

    finTalkService.chat('hello').then(
        function(value) {
            res.send(value);
        },
        function(error) {
            console.log(error);
        }
    );

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
