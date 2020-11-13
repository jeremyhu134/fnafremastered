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
  scene:[MenuScene,introNight,SIXAM,camera,Night1,Night2,gameOver]
};

const game = new Phaser.Game(config);

let gameState = {               
    night: 0,
    ldoorOpen: true,
    rdoorOpen: true
}