var express = require('express');
var fs = require("fs");
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    fs.exists("gameData.json", function (exists) {
        if (!exists) {
            createGameDataFile();
            res.send("<h1>初始化数据，稍后再试</h1>")
        } else {
            var file = "gameData.json";
            res.render('game', {gameData: fs.readFileSync(file)});
        }
    });
});

function createGameDataFile() {
    var p1 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p2 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p3 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p4 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p5 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p6 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p7 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var p8 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    var table1 = ["1/2", "$", p1];
    var table2 = ["1/2", "$", p2];
    var table3 = ["1/2", "$", p3];
    var table4 = ["1/2", "RMB", p4];
    var table5 = ["1/2", "RMB", p5];
    var table6 = ["1/2", "RMB", p6];
    var table7 = ["1/2", "RMB", p7];
    var table8 = ["1/2", "RMB", p8];
    var data = [table1, table2, table3, table4, table5, table6, table7, table8];//初始数据
    fs.writeFile("gameData.json", JSON.stringify(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = router;
