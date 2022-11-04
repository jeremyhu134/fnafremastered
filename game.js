const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "000000",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          enableBody: true,
        }
    },
  scene:[MenuScene,introNight,SIXAM,camera,Night1,gameOver],
    scale: {
        zoom: 0.95
    }
};

const game = new Phaser.Game(config);

let gameState = {               
    night: 1,
    ldoorOpen: true,
    rdoorOpen: true,
    
    bonnie: {
        active: false,
        cooldown: 0,
    },chica: {
        active: false,
        cooldown: 0,
    },freddy: {
        active: false,
        cooldown: 0,
    },foxy: {
        active: false,
        cooldown: 0,
    },
    resetAll: function(){
        gameState.foxy.active = false;
        gameState.bonnie.active = false;
        gameState.freddy.active = false;
        gameState.chica.active = false;
    }
}