var boot = function(game) {};
boot.prototype = {
    preload: function() {
        this.game.load.image("loading", "assets/sprites/loading.png");
    },
    create: function() {
        console.log("game started");
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.state.start("Preload");
    }
}