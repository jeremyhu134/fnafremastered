
class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        this.load.image('freddyavatar','fnafpicture/freddyavatar.png');
        this.load.audio('noises','audio/MMusic.mp3');
        this.load.image('newsPaper','fnafpicture/newsPaper.png');
        this.load.image('ghost','fnafpicture/ghost.png');
    }
    create() {
        var loops = {
            loop: true
        }
        gameState.resetAll();
        if(parseInt(localStorage.getItem(1))){
            gameState.night = parseInt(localStorage.getItem(1));
        }
        gameState.menunoise = this.sound.add('noises');
		this.add.text( 100, 40, 'Five', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 80, 'Nights', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 120, 'at', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.text( 100, 160, 'Freddy\'s', {fill: '#FFFFFF', fontSize: '40px'});
        this.add.image(700,0, 'freddyavatar').setOrigin(0,0).setScale(window.innerHeight/100);
        gameState.newGameButton = this.add.text( 100, 400, 'New Game', {fill: '#FFFFFF', fontSize: '25px'}).setInteractive();
        gameState.nightButton = this.add.text( 100, 440, `Continue : Night ${gameState.night}`, {fill: '#FFFFFF', fontSize: '25px'}).setInteractive();
        gameState.menunoise.play();
        var scene = this;
		gameState.newGameButton.on('pointerdown', () => {
            gameState.menunoise.setMute(true);
            gameState.night = 1;
            scene.add.image(0,0, 'newsPaper').setOrigin(0,0).setScale(window.innerHeight/400);
            scene.time.addEvent({
                delay: 3000,
                callback: ()=>{
                    this.scene.stop('MenuScene');
                    this.scene.start('introNight');
                },
                startAt: 0,
                timeScale: 1,
            });
		});
        gameState.nightButton.on('pointerdown', () => {
            gameState.menunoise.setMute(true);
			this.scene.stop('MenuScene');
			this.scene.start('introNight');
		});
        
        var ghost = this.add.image(window.innerWidth-20,window.innerHeight-20, 'ghost').setOrigin(0,0).setScale(1).setInteractive();
        ghost.on('pointerdown', () => {
            gameState.menunoise.setMute(true);
            gameState.night = 8;
			this.scene.stop('MenuScene');
			this.scene.start('introNight');
		});
	}
    update(){
        
    }
}