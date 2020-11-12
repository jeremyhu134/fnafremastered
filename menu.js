
class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        this.load.image('freddyavatar','fnafpicture/freddyavatar.png');
        this.load.audio('noises','audio/MMusic.mp3');
    }
    create() {
        var loops = {
            loop: true
        }
        gameState.menunoise = this.sound.add('noises');
		this.add.text( 100, 40, 'Five', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 80, 'Nights', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 120, 'at', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 160, 'Freddy\'s', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.image(700,0, 'freddyavatar').setOrigin(0,0).setScale(1.3);
        gameState.newGameButton = this.add.text( 100, 400, 'New Game', {fill: '#FFFFFF', fontSize: '25px'}).setInteractive();
        console.log('worked', gameState.night);
        if(localStorage.getItem("night") == undefined){
            gameState.night = 1;
        }
        else {
            gameState.night = localStorage.getItem("night");
        }
        gameState.nightButton = this.add.text( 100, 440, `Continue : Night ${gameState.night}`, {fill: '#FFFFFF', fontSize: '25px'}).setInteractive();
        gameState.menunoise.play();
		gameState.newGameButton.on('pointerdown', () => {
            gameState.menunoise.setMute(true);
            gameState.night = 1;
            localStorage.setItem("night",1);
			this.scene.stop('MenuScene');
			this.scene.start('introNight');
		});
        gameState.nightButton.on('pointerdown', () => {
            gameState.menunoise.setMute(true);
			this.scene.stop('MenuScene');
			this.scene.start('introNight');
		});
	}
    update(){
        
    }
}