Barrier = function (game, speed, tintColor) {
    var positions = [ (game.width - tunnelWidth) / 2, (game.width + tunnelWidth) / 2];
    var position = game.rnd.between(0, 1);
    Phaser.Sprite.call(this, game, positions[position], -100, "barrier");
    var cropRect = new Phaser.Rectangle(0, 0, tunnelWidth / 2, 24);
    this.crop(cropRect);
        game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(position, 0.5);
    this.levelTint = tintColor;
    if(game.rnd.between(0, friendlyBarRatio) !== 0) {
        this.tint = tintColor;
        this.friendly = false;
    } else {
        this.friendly = true;
    }
    this.body.immovable = true;
    this.body.velocity.y = speed;
    this.placeBarrier = true;
};

Barrier.prototype = Object.create(Phaser.Sprite.prototype);
Barrier.prototype.constructor = Barrier;

Barrier.prototype.update = function() {
    if(this.placeBarrier && this.y > barrierGap) {
        this.placeBarrier = false;
        playGame.prototype.addBarrier(this.parent, this.levelTint);
    }
    
    if(this.y > game.height) {
        this.destroy();
    }
}