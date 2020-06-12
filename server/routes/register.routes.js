const router = require('express').Router();
let Register_Table = require('../models/register.model');

router.route('/').get((req, res) => {
    Register_Table.find((err, entry) => {
        if (err) {
            console.log(err);
        } else {
            res.json(entry);
        }
    })
});

router.route('/search/:name').get((req, res) => {
    Register_Table.find({name: `${req.params.name}`}, (err, entry) => {
        if (err) {
            console.log(err);
        } else {
            res.json(entry);
        }
    })
})

router.route('/').post((req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const amount = req.body.amount;

    const entry = new Register_Table({ name, year, amount });

    entry.save()
        .then(entry => {
            res.status(200).json("Entry added!");
        });
})

module.exports = router;