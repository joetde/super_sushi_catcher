
/*
 * Rule engine
 */
ssc.engine = {

    load : function() {
        ssc.engine.spawn_timer = ssc.game.time.create(false);
        // TODO allow update spawning frequency
        ssc.engine.spawn_timer.loop(750, ssc.engine.spawn_new_sushi, this);
        ssc.engine.hud.score_text = ssc.game.add.text(ssc.game.world.width - 100, 32, '', { font: "15px Arial", fill: "#19de65"});
    },

    init : function() {
        ssc.engine.spawn_new_sushi();
        ssc.engine.spawn_timer.start();
        ssc.engine.score = 0;
        ssc.engine.hud.score_text.text = ssc.engine.score;
        // TODO random type
        ssc.sprite.add_card(ssc.sprite.sushi_types.SALMON);
    },
    
    update : function() {
    },

    provide_new_sushi : function() {
        var random_idx = Math.floor((Math.random() * ssc.sprite.ALL_SUSHI_TYPES.length));
        ssc.sprite.add_rolling(ssc.sprite.ALL_SUSHI_TYPES[random_idx]);
    },

    on_sushi_clicked : function(sushi_sprite) {
        // clear clicked sushi
        ssc.sprite.remove_sprite(sushi_sprite);

        // check type for scoring
        if (sushi_sprite.ssc_type == ssc.engine.required_type()) {
            ssc.engine.on_sushi_clicked_success();
        } else {
            ssc.engine.on_sushi_clicked_missed();
        }

        // refresh score text
        ssc.engine.hud.score_text.text = ssc.engine.score;
    },

    on_sushi_clicked_missed : function() {
        ssc.engine.score--;
        // TODO sounds
        // TODO lose condition
    },

    on_sushi_clicked_success : function() {
        ssc.engine.score++;
        // TODO sounds
        // TODO update cards (remove matched)
    },

    required_type : function() {
        // TODO mechanism to prevent array to be empty
        return ssc.sprite.card_sprites[0].ssc_type;
    },

    spawn_new_sushi : function() {
        ssc.engine.provide_new_sushi();
    }
};

ssc.engine.hud = {}
