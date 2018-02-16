module.exports = {

getAllBins: (req, res) => {
    const db = req.app.get('db');
    const{ params } = req;

    db.getAllBins([params.id]).then(bins => res.status(200).send(bins));

},
getBinCont: (req, res) => {
    const db = req.app.get('db');
    const{params} = req;

    db.getBinCont([params.id]).then(bins => res.status(200).send(bins));
},
delete: (req, res) => {
    const db = req.app.get('db');
    const{params} = req;

    db.delete([params.id]).then(bins => res.status(200).send(bins))
},
add: (req, res) => {
    const db = req.app.get('db');
    const{binname, price, toggle, binid} = req.body

    db.add([binname, price, toggle, binid]).then(bins => res.status(200).send(bins))
}




}