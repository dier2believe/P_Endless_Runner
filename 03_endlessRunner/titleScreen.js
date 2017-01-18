/*var titleScreen = function(game) {};
titleScreen.prototype = {
    create: function() {
        console.log("title screen here");
        //game.stage.backgroundColor = bgColors[game.rnd.between(0, bgColors.length - 1)];
        savedData = localStorage.getItem(localStorageName)===null?{score:0}:JSON.parse(localStorage.getItem(localStorageName));
        
        var titleBG = game.add.tileSprite(0, 0, game.width, game.height, "backsplash");
        titleBG.tint = bgColors[game.rnd.between(0, bgColors.length - 1)];
        
        document.body.style.background = "#"+titleBG.tint.toString(16);
        
        var title = game.add.image(game.width / 2, 210, "title");
        title.anchor.set(0.5);
        
        game.add.bitmapText(game.width / 2, 480, "font", "Best score", 48).anchor.x = 0.5;
        game.add.bitmapText(game.width / 2, 530, "font", savedData.score.toString(), 72).anchor.x = 0.5;
        
        var playButton = game.add.button(game.width / 2, game.height - 150, "playbutton", this.startGame);
        
        var tween = game.add.tween(playButton).to({
            width: 220,
            height: 220
        }, 1500, "Linear", true, 0, -1);
        tween.yoyo(true);
    },
    
    startGame: function() {
        game.state.start("PlayGame");
    }
}*/

var titleScreen = function(game){};
titleScreen.prototype = {  
     create: function(){  
          savedData = localStorage.getItem(localStorageName)==null?{score:0}:JSON.parse(localStorage.getItem(localStorageName));
          var titleBG = game.add.tileSprite(0, 0, game.width, game.height, "backsplash");
          titleBG.tint = bgColors[game.rnd.between(0, bgColors.length - 1)];
          document.body.style.background = "#"+titleBG.tint.toString(16);
          var title = game.add.image(game.width / 2, 210, "title");
          title.anchor.set(0.5);
          game.add.bitmapText(game.width / 2, 480 , "font", "Best score", 48).anchor.x = 0.5;
          game.add.bitmapText(game.width / 2, 530 , "font", savedData.score.toString(), 72).anchor.x = 0.5;
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
