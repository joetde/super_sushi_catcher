
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
        // TODO engine update
        // ticking
    },

    provide_new_sushi : function() {
        // TODO random type
        var sushi_type = ssc.sprite.sushi_types.SALMON;
        ssc.sprite.add_rolling(sushi_type);
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
        // TODO rand
        return ssc.sprite.sushi_types.SALMON;
    },

    spawn_new_sushi : function() {
        ssc.engine.provide_new_sushi();
    }
};
