Soccer.Game = function(game) {

};

Soccer.Game.prototype = {
	create: function() {
		this.game.world.setBounds(0, 0, 960, this.game.height);
		this.background = this.game.add.sprite(0, 960-1200, 'pitch');
		this.background2 = this.game.add.sprite(0, -this.background.height + this.background.y, 'pitch');
		this.background.tint = Math.random() * 0xffffff;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.game.camera.x = this.game.width/4;

	},

	update: function() {

		if (this.background.y > this.game.height + 10) {
			this.background.y = this.background2.y - this.background.height;
			this.background.tint = Math.random() * 0xffffff;
		}

		if (this.background2.y > this.game.height + 10) {
			this.background2.y = this.background.y - this.background2.height;
			this.background2.tint = Math.random() * 0xffffff;
		}

	    if (this.cursors.left.isDown) {
	        this.game.camera.x -= 4;
	    }
	    else if (this.cursors.right.isDown) {
	        this.game.camera.x += 4;
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
