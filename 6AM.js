
class SIXAM extends Phaser.Scene {
    constructor() {
		super({ key: 'SIXAM' })
	}
    preload(){
        this.load.audio('chime','audio/6AM.mp3');
    }
    create() {
        gameState.chime = this.sound.add('chime');
        gameState.chime.play();
		this.add.text( window.innerWidth/2-100,window.innerHeight/2-50, '6AM', {fill: '#FFFFFF', fontSize: '60px'});
        var sixtimer = this.time.addEvent({
            delay: 10000,
            callback: ()=>{
                this.scene.stop('SIXAM');
			    this.scene.start('MenuScene');
            },
            startAt: 0,
            timeScale: 1,
        });
	}
    update(){
        
    }
}