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
  scene:[MenuScene,introNight,SIXAM,camera,Night1,Night2,Night3,Night4,Night5,Night6,gameOver],
    scale: {
        zoom: 0.95,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

let gameState = {               
    night: 0,
    ldoorOpen: true,
    rdoorOpen: true
}