const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller.js')

const connectionString='postgres://frgnrvmikteelq:31c445090432a22e56af4717e3ac81024cb12de160c7b29c73603f8c2420df0e@ec2-54-235-90-200.compute-1.amazonaws.com:5432/dct905gjgmq963?ssl=true';

const app = express();
app.use(bodyParser.json());

const port = 3030;


// app.put('/api/bincontent/:id', ctrl.create);
app.get('/api/binlist/:id', ctrl.getAllBins);
app.get('/api/binlist/bincontent/:id', ctrl.getBinCont)
app.delete('/api/binlist/:id', ctrl.delete);
app.post('/api/binlist/:id', ctrl.add);















massive(connectionString).then(db => {
    app.set('db', db);
    app.listen(port, () => {
      console.log('Started server on port', port);
    });
  })