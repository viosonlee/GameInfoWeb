let express = require('express');
let fs = require("fs");
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    fs.exists("gameData.json", function (exists) {
        if (!exists) {
            createGameDataFile();
            res.send("<h1>初始化数据，稍后再试</h1>")
        } else {
            let file = "gameData.json";
            res.render('game', {gameData: fs.readFileSync(file)});
        }
    });
});

function createGameDataFile() {
    let p1 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p2 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p3 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p4 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p5 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p6 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p7 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let p8 = ["JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV", "JADNV"];
    let table1 = ["1/2", "$", p1];
    let table2 = ["1/2", "$", p2];
    let table3 = ["1/2", "$", p3];
    let table4 = ["1/2", "RMB", p4];
    let table5 = ["1/2", "RMB", p5];
    let table6 = ["1/2", "RMB", p6];
    let table7 = ["1/2", "RMB", p7];
    let table8 = ["1/2", "RMB", p8];
    let data = [table1, table2, table3, table4, table5, table6, table7, table8];//初始数据
    fs.writeFile("gameData.json", JSON.stringify(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = router;
