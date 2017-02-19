
ssc.game = new Phaser.Game(800, 600, Phaser.AUTO, 'ssc',
    {preload: preload,
     create: create,
     update: update,
     render: render});

var sushi_sprite;

function preload() {
    // load resources
    ssc.sound.load();
    ssc.game.load.image('sushi', 'res/sprite/salmon_sushi_1.png');
}

function create() {
    // start game
    ssc.sound.init();

    ssc.game.stage.backgroundColor = '#2d2d2d';
    sushi_sprite = ssc.game.add.sprite(ssc.game.world.width, ssc.game.world.centerY, 'sushi');
}

function update() {
    sushi_sprite.x -= 1;
}

function render() {
    // update graphics
}
