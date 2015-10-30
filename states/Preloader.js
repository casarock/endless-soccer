Soccer.Preloader = function(game) {
    this.ready = false;
};

Soccer.Preloader.prototype = {

    preload: function() {
        this.load.image('pitch', 'images/football-pitch.png');
        this.load.spritesheet('player', 'images/player_transparent.png', 16, 16);
    },

    create: function() {
        this.game.stage.backgroundColor = '#ffffff';
        var logo = this.add.sprite(this.world.width/2, this.world.height/2, 'appsbude');

        logo.anchor.set(0.5, 0.5);

        // this.game.time.events.add(Phaser.Timer.SECOND * 2.0, function() {
        //
        //     var tween = this.add.tween(logo)
        //         .to({alpha: 0}, 750, Phaser.Easing.Linear.none);
        //
        //     tween.onComplete.add(function() {
        //         logo.destroy();
        //         this.startGame();
        //     }, this);
        //
        //     tween.start();
        // }, this);

        this.startGame();
    },

    startGame: function() {
        this.state.start('Game');
    }

};
