var LOBBY_MUSIC_URL = "audio/music/lobby.mp3";
var MENU_MUSIC_URL = "audio/music/menu.mp3";
var SKINCOUNT = 1;
var SKIN_MUSIC_URL = {};
(function() {
    var assetData = resources["assets.json"];
    if (assetData.skins.count != undefined)
        SKINCOUNT=assetData.skins.count;
    for (i in assetData.skins.properties) {
        var prop = assetData.skins.properties;
        var music = prop[i].music;
        if (music != undefined)
            SKIN_MUSIC_URL[prop[i].id] = music;
    }
})();
print("loading url.js finished");
