
ssc.sprite = {
    rolling_sprites : [],
    sprite_counter : 0,

    load : function() {
        ssc.game.load.image('sushi', 'res/sprite/salmon_sushi_1.png');
    },

    init : function() {
        ssc.sprite.add_rolling('salmon');
    },

    update : function() {
        for (i = ssc.sprite.rolling_sprites.length - 1; i >= 0; i--) {
            var curr = ssc.sprite.rolling_sprites[i];
            curr.x -= 4; // TODO update with speed
            if (curr.x + curr.width < 0) {
                curr.destroy();
                ssc.sprite.rolling_sprites.splice(i, 1);
                ssc.sprite.add_rolling('salmon');
            }
        }
    },

    add_rolling : function(type) {
        var curr = ssc.game.add.sprite(ssc.game.world.width, ssc.game.world.centerY, 'sushi');
        curr.ssc_type = type;
        curr.ssc_id = ssc.sprite.sprite_counter;
        ssc.sprite.sprite_counter++;
        curr.inputEnabled = true;
        curr.events.onInputDown.add(ssc.sprite.on_sushi_clicked, this);
        ssc.sprite.rolling_sprites.push(curr);
    },

    on_sushi_clicked : function(sprite) {
        console.log(sprite.ssc_id);
    }
};
