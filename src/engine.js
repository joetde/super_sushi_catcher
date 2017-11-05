
/*
 * Rule engine
 */
ssc.engine = {

    load : function() {
        ssc.engine.spawn_timer = ssc.game.time.create(false);
        // TODO allow update spawning frequency
        ssc.engine.spawn_timer.loop(750, ssc.engine.spawn_new_sushi, this);
    },

    init : function() {
        ssc.engine.spawn_new_sushi();
        ssc.engine.spawn_timer.start();
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
            // TODO good catch
        } else {
            // TODO bad catch buddy
        }
    },

    required_type : function() {
        // TODO generate required types
        return ssc.sprite.sushi_types.SALMON;
    },

    spawn_new_sushi : function() {
        ssc.engine.provide_new_sushi();
    }
};
