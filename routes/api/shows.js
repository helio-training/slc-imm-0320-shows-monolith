let express = require('express');
let router = express.Router();

let index = 1;
const shows = require('../../data/shows');

/* GET shows listing. */
router.get('/', function (req, res, next) {
    const results = shows.getShows();
    res.send(results);
});

router.post('/', function (req, res, next) {
    const show = shows.createShow(req.body);
    res.send(show);
});

router.delete('/:id', function (req, res, next) {
    const show = shows.deleteShow(req.params.id);
    res.send(show);
});

module.exports = router;