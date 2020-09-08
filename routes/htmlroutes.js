const path = require('path');

exports.route = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('../public/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    app.get("../public/stats", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
      });
}