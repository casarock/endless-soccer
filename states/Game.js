Soccer.Game = function(game) {

};

Soccer.Game.prototype = {
	create: function() {
		this.game.world.setBounds(0, 0, 960, this.game.height);
		this.background = this.game.add.sprite(0, 960-1200, 'pitch');
		this.background2 = this.game.add.sprite(0, -this.background.height + this.background.y, 'pitch');

		this.player = this.game.add.sprite(this.game.width/2, this.game.height - 64, 'player');
		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

		this.player.anchor.setTo(0.5);

		this.player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7]);
		this.player.animations.add('runleft', [56, 57, 58, 59, 60, 61, 62]);
		this.player.animations.add('runright', [8, 9, 10, 11, 12, 13, 14, 15]);
		this.player.animations.add('stop', [0]);
    	this.player.animations.play('run', 20, true);
		this.player.scale.setTo(4);

		this.animation = this.oldAnimation = 'run';
		this.animationSpeed = 20;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.game.camera.follow(this.player);
	},

	update: function() {

		if (this.background.y > this.game.height + 10) {
			this.background.y = this.background2.y - this.background.height;
		}

		if (this.background2.y > this.game.height + 10) {
			this.background2.y = this.background.y - this.background2.height;
		}

	    if (this.cursors.left.isDown) {
	        this.player.x -= 4;
			this.animation = 'runleft';
	    }
	    else if (this.cursors.right.isDown) {
	        this.player.x += 4;
			this.animation = 'runright';
	    }
		else if(this.cursors.up.isDown) {
			if (this.player.y > 256) {
				this.player.y -=4;
			}
		}
		else if(this.cursors.down.isDown) {
			if (this.player.y < this.game.height - 64) {
				this.player.y +=4;
				this.animation = 'stop';
			}
		}
		else {
			this.animation = 'run';
		}

		if (this.animation !== this.oldAnimation) {
			console.log(this.animationSpeed);
			this.oldAnimation = this.animation;
			this.player.animations.play(this.animation , this.animationSpeed, true);
		}

		this.background.y += 4;
		this.background2.y += 4;
	},

	quitGame: function(pointer) {
		this.state.start('MainMenu');
	},

	render: function() {

	}
};
