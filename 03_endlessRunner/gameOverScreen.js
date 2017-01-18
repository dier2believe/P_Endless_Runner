var gameOverScreen = function(game){};
gameOverScreen.prototype = {
     create: function(){  
          var bestScore = Math.max(score, savedData.score);
          var titleBG = game.add.tileSprite(0, 0, game.width, game.height, "backsplash");
          titleBG.tint = bgColors[game.rnd.between(0, bgColors.length - 1)];
          document.body.style.background = "#"+titleBG.tint.toString(16);
          game.add.bitmapText(game.width / 2, 50 , "font", "Your score", 48).anchor.x = 0.5;
          game.add.bitmapText(game.width / 2, 150 , "font", score.toString(), 72).anchor.x = 0.5;
          game.add.bitmapText(game.width / 2, 350 , "font", "Best score", 48).anchor.x = 0.5;
          game.add.bitmapText(game.width / 2, 450 , "font", bestScore.toString(), 72).anchor.x = 0.5;
          localStorage.setItem(localStorageName,JSON.stringify({
               score: bestScore
     	}));
          var playButton = game.add.button(game.width / 2, game.height - 150, "playbutton", this.startGame);
          playButton.anchor.set(0.5);
          var tween = game.add.tween(playButton).to({
               width: 220,
               height:220
          }, 1500, "Linear", true, 0, -1); 
          tween.yoyo(true);
     },
     startGame: function(){
          game.state.start("PlayGame");     
     }    
}