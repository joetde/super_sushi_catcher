
var g_game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-template', {preload: preload, create: create});
var g_music;

function preload() {
    // load resources
    g_game.load.audio('main_loop', 'res/music/main_loop.mp3');
}

function create() {
    // start game
    g_game.stage.backgroundColor = '#2d2d2d';

    g_music = g_game.add.audio('main_loop');
    g_game.sound.setDecodedCallback(g_music, on_music_decoded, this);
}

function on_music_decoded() {
    g_music.loopFull(0.6);
}
