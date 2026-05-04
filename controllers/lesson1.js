const route = (req, res) => {
    res.send('Eunice!');
};

const ann =  (req, res) => {
    res.send('Ann!');
};

module.exports = {route, ann};