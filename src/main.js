
ssc.game = new Phaser.Game(800, 600, Phaser.AUTO, 'ssc',
    {preload: preload,
     create: create,
     update: update,
     render: render});

function preload() {
    // load resources
    ssc.sound.load();
    ssc.sprite.load();
    ssc.engine.load();
}

function create() {
    // start game
    ssc.sound.init();
    ssc.sprite.init();
    ssc.engine.init();

    ssc.game.stage.backgroundColor = '#2d2d2d';
}

function update() {
    ssc.sprite.update();
    ssc.engine.update();
}

function render() {
    // update graphics
}
