/*var game;
var score;
var savedData;
var bgColors = [0xF16745, 0xFFC65D, 0x7BC8A4, 0x4CC3D9, 0x93648D, 0x7c786a, 0x588c73, 0x8c4646, 0x2a5b84, 0x73503c];
var tunnelWidth = 256;
var shipHorizontalSpeed = 100;
var shipMoveDelay = 0;
var shipVerticalSpeed = 15000;
var swipeDistance = 10;
var barrierSpeed = 280;
var barrierGap = 120;
var shipInvisibilityTime = 1000;
var barrierIncreaseSpeed = 1.1;
var scoreHeight = 100;
var scoreSegments = [100, 50, 25, 10, 5, 2, 1];
var friendlyBarRatio = 10;
var localStorageName = "myrocketgame";

window.onload = function() {
    var width = 640;
    var height = 960;
    var windowRatio = window.innerWidth / window.innerHeight;
    if(windowRatio < width / height) {
        var height = width / windowRatio;
    }
    game = new Phaser.Game(width, height, Phaser.AUTO, "");
    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("TitleScreen", titleScreen);
    game.state.add("PlayGame", playGame);
    game.state.add("GameOverScreen", gameOverScreen);
    game.state.start("Boot");
};*/

var game;
var score;
var savedData;
var bgColors = [0xF16745, 0xFFC65D, 0x7BC8A4, 0x4CC3D9, 0x93648D, 0x7c786a, 0x588c73, 0x8c4646, 0x2a5b84, 0x73503c];
var tunnelWidth = 256;
var shipHorizontalSpeed = 100;
var shipMoveDelay = 0;
var shipVerticalSpeed = 15000; 
var swipeDistance = 10;
var barrierSpeed = 280;
var barrierGap = 120;
var shipInvisibilityTime = 1000;
var barrierIncreaseSpeed = 1.1;
var scoreHeight = 100; 
var scoreSegments = [100, 50, 25, 10, 5, 2, 1];
var friendlyBarRatio = 10;
var localStorageName = "myrocketgame";

window.onload = function() {
     var width = 640;
     var height = 960;	
     var windowRatio = window.innerWidth / window.innerHeight;
     if(windowRatio < width / height){
          var height = width / windowRatio;
     }
	game = new Phaser.Game(width, height, Phaser.AUTO, "");
     game.state.add("Boot", boot);
     game.state.add("Preload", preload); 
     game.state.add("TitleScreen", titleScreen);
     game.state.add("PlayGame", playGame);
     game.state.add("GameOverScreen", gameOverScreen);
     game.state.start("Boot");
}