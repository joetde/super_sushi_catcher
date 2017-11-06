
ssc.sprite = {
    rolling_sprites : [],
    sprite_counter : 0,

    load : function() {
        ssc.game.load.spritesheet(ssc.sprite.sushi_types.SALMON, 'res/sprite/salmon_sushi_sprite.png', 100, 100);
        ssc.game.load.spritesheet(ssc.sprite.sushi_types.TUNA, 'res/sprite/tuna_sushi_sprite.png', 100, 100);
        ssc.game.load.spritesheet(ssc.sprite.sushi_types.OMELETTE, 'res/sprite/omelette_sushi_sprite.png', 100, 100);
    },

    init : function() {
    },

    update : function() {
        for (var i = ssc.sprite.rolling_sprites.length - 1; i >= 0; i--) {
            var curr = ssc.sprite.rolling_sprites[i];
            curr.x -= 4; // TODO update with speed

            // remove sprites that exist the screen
            if (curr.x + curr.width < 0) {
                curr.destroy();
                ssc.sprite.rolling_sprites.splice(i, 1);
            }
        }
    },

    add_rolling : function(sushi_type) {
        var curr = ssc.game.add.sprite(ssc.game.world.width, ssc.game.world.centerY, sushi_type);
        curr.ssc_type = sushi_type;

        curr.ssc_id = ssc.sprite.sprite_counter;
        ssc.sprite.sprite_counter++;

        curr.inputEnabled = true;
        curr.events.onInputDown.add(ssc.sprite.on_sushi_clicked, this);

        curr.animations.add('jump');
        curr.animations.play('jump', 24, true);

        ssc.sprite.rolling_sprites.push(curr);
    },

    on_sushi_clicked : function(sprite) {
        ssc.engine.on_sushi_clicked(sprite);
    },

    remove_sprite : function(sprite) {
        for (var i = ssc.sprite.rolling_sprites.length - 1; i >= 0; i--) {
            var curr = ssc.sprite.rolling_sprites[i];
            if (curr.ssc_id == sprite.ssc_id) {
                // destroy sprite
                curr.destroy();
                // remove from list
                ssc.sprite.rolling_sprites.splice(i, 1);
            }
        }
    }
};

ssc.sprite.sushi_types = {
    SALMON : "salmon_sushi",
    TUNA : "tuna_sushi",
    OMELETTE : "omelette_sushi"
};

ssc.sprite.ALL_SUSHI_TYPES = [ssc.sprite.sushi_types.SALMON,
                              ssc.sprite.sushi_types.TUNA,
                              ssc.sprite.sushi_types.OMELETTE];
