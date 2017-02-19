
ssc.sound = {
    quiet : false,

    load : function() {
        ssc.game.load.audio('main_loop', 'res/music/main_loop.mp3');
    },

    init : function() {
        ssc.sound.music = ssc.game.add.audio('main_loop');
        ssc.game.sound.setDecodedCallback(ssc.sound.music, ssc.sound.on_music_decoded, this);
    },

    on_music_decoded : function() {
        if (!ssc.sound.quiet) { ssc.sound.music.loopFull(0.6); }
    }
};
