const fs = require("fs");
let emotes = new Map();

fs.readFile("bttv_pwgood.json", function (err, data) {
  let jsonData = data;
  let jsonParsed = JSON.parse(jsonData);
  for (let i = 0; i <= 76; i++) {
    emotes.set(
      "`" + jsonParsed.channelEmotes[i].code + "`",
      "`" +
        `https://cdn.betterttv.net/emote/${jsonParsed.channelEmotes[i].id}/1x` +
        "`"
    );
  }
  for (let i = 0; i <= 84; i++) {
    emotes.set(
      "`" + jsonParsed.sharedEmotes[i].code + "`",
      "`" +
        `https://cdn.betterttv.net/emote/${jsonParsed.sharedEmotes[i].id}/1x` +
        "`"
    );
  }
});
fs.readFile("ffz_pwgood.json", function (err, data) {
  let jsonData = data;
  let jsonParsed = JSON.parse(jsonData);
  for (let i = 0; i <= 49; i++) {
    let emoteUrl = jsonParsed.emoticons[i].urls[1];
    emoteUrl = emoteUrl.slice(2);
    emotes.set(
      "`" + jsonParsed.emoticons[i].name + "`",
      "`" + "https://" + emoteUrl + "`"
    );
  }
});

let query;
setTimeout(() => {
  emotes.forEach(function (value, key) {
    query = "[" + key + "," + value + "],";
    fs.appendFile("emotes.js", query, function () {
      console.log("...");
    });
  });
}, 1000);
