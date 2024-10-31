const fs = require("fs");

const data = fs.readFileSync('./data.json',
    { encoding: 'utf8', flag: 'r' });

const latest = fs.readFileSync('./latest.json',
    { encoding: 'utf8', flag: 'r' });

var data_json = JSON.parse(data);
var latest_json = JSON.parse(latest).observations[0];
data_json.observations.push(latest_json);

fs.writeFileSync("./data.json", JSON.stringify(data_json, null, 2));
