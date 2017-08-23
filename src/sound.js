
/**
 * Sound module. Handling of music and sound effects.
 */
ssc.sound = {
    quiet : true,

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

/**
 * Voice synthetizer, for fun
 */
ssc.sound.voice = {
    say : function(what_to_say) {
        if (!ssc.sound.quiet) {
            var msg = new SpeechSynthesisUtterance(what_to_say);
            window.speechSynthesis.speak(msg);
        }
    }
}
