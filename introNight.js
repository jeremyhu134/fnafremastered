class introNight extends Phaser.Scene {
    constructor() {
		super({ key: 'introNight' })
	}
    preload(){
        this.load.audio('intro','audio/nightintro.mp3');
    }
    create() {
        gameState.intro = this.sound.add('intro');
        gameState.intro.play();
        if(gameState.night == 8){
            this.add.text( window.innerWidth/2-70,window.innerHeight/2-50, `Night ???`, {fill: '#FFFFFF', fontSize: '60px'});
        }else{
            this.add.text( window.innerWidth/2-70,window.innerHeight/2-50, `Night${gameState.night}`, {fill: '#FFFFFF', fontSize: '60px'});
        }
        
        var introtimer = this.time.addEvent({
            delay: 3000,
            callback: ()=>{
                this.scene.stop('introNight');
                this.scene.start(`Night1`);
            },
            startAt: 0,
            timeScale: 1,
        });
	}
    update(){
        
    }
}