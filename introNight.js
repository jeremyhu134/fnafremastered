class introNight extends Phaser.Scene {
    constructor() {
		super({ key: 'introNight' })
	}
    preload(){
        this.load.image('bg','fnafpicture/blackscreen.png');
        this.load.image('Office','fnafpicture/Office.png');
        this.load.image('darkOffice','fnafpicture/darkOffice.png');
        this.load.spritesheet('ldoor','fnafpicture/ldoor.png',{frameWidth: 120,frameHeight:393});
        this.load.spritesheet('bonnieJumpscare','fnafpicture/bonnieJumpscare.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('chicaJumpscare','fnafpicture/chicaJumpscare.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('freddyJumpscare','fnafpicture/freddyJumpscare.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('freddyJumpscare2','fnafpicture/freddyJumpscare2.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('foxyJumpscare','fnafpicture/foxyJumpscare.png',{frameWidth: 180,frameHeight:400});
        this.load.spritesheet('freddySinging','fnafpicture/freddySinging.png',{frameWidth: 50,frameHeight:50});
        this.load.image('rdoor','fnafpicture/rdoor.png');
        this.load.image('llighton','fnafpicture/llighton.png');
        this.load.image('bonniellighton','fnafpicture/bonniellighton.png');
        this.load.image('chicallighton','fnafpicture/chicallighton.png');
        this.load.image('button','fnafpicture/button.png');
        this.load.image('mbutton', 'fnafpicture/muteb.png');
        this.load.image('camera','fnafpicture/cambutton.png');
        this.load.image('gusage','fnafpicture/greenusage.png');
        this.load.image('yusage','fnafpicture/yellowusage.png');
        this.load.image('rusage','fnafpicture/redusage.png');
        //audio
        this.load.audio('intro','audio/nightintro.mp3');
        this.load.audio('doormove', 'audio/doormove.mp3');
        this.load.audio('windowscare', 'audio/windowscare.mp3');
        this.load.audio('lighttrigger', 'audio/lighttrigger.mp3');
        this.load.audio('officenoise', 'audio/officenoise.mp3');
        this.load.audio('cameranoise', 'audio/cameranoise.mp3');
        this.load.audio('ambient1', 'audio/ambient1.mp3');
        this.load.audio('phonecall1', 'audio/phonecall1.mp3');
        this.load.audio('phonecall2', 'audio/phonecall2.mp3');
        this.load.audio('phonecall3', 'audio/phonecall3.mp3');
        this.load.audio('phonecall4', 'audio/phonecall4.mp3');
        this.load.audio('phonecall5', 'audio/phonecall5.mp3');
        this.load.audio('robotscream', 'audio/robotscream.mp3');
        this.load.audio('knock', 'audio/knock.mp3');
        this.load.audio('camsound','audio/nightintro.mp3');
        this.load.audio('powerDown','audio/powerDown.mp3');
        this.load.audio('freddyMusicBox','audio/freddyMusicBox.mp3');
        this.load.audio('freddyLaugh','audio/freddyLaugh.mp3');
        this.load.audio('kitchenNoise','audio/kitchenNoise.mp3');
        //cam pictures
        this.load.audio('static','audio/static.mp3');
        this.load.audio('run','audio/run.mp3');
        this.load.image('bg','fnafpicture/blackscreen.png');
        this.load.image('static','fnafpicture/static.png');
        this.load.image('CAMSlayout','fnafpicture/CAMSlayout.png');
        this.load.image('CAM2B','fnafpicture/CAM2B.png');
        this.load.image('CAM2Bc','fnafpicture/CAM2Bc.png');
        this.load.image('bonnieCAM2Bc','fnafpicture/bonnieCAM2Bc.png');
        this.load.image('CAM2A','fnafpicture/CAM2A.png');
        this.load.image('CAM2Ac','fnafpicture/CAM2Ac.png');
        this.load.image('bonnieCAM2Ac','fnafpicture/bonnieCAM2Ac.png');
        this.load.image('CAM3','fnafpicture/CAM3.png');
        this.load.image('CAM1C','fnafpicture/CAM1C.png');
        this.load.image('CAM5','fnafpicture/CAM5.png');
        this.load.image('CAM5c','fnafpicture/CAM5c.png');
        this.load.image('bonnieCAM5c','fnafpicture/bonnieCAM5c.png');
        this.load.image('CAM1B','fnafpicture/CAM1B.png');   
        this.load.image('CAM1Bc','fnafpicture/CAM1Bc.png');
        this.load.image('bonnieCAM1Bc','fnafpicture/bonnieCAM1Bc.png');
        this.load.image('chicaCAM1Bc','fnafpicture/chicaCAM1Bc.png');
        this.load.image('bonniechicaCAM1Bc','fnafpicture/bonniechicaCAM1Bc.png');
        this.load.image('bonniefreddyCAM1Bc','fnafpicture/bonniefreddyCAM1Bc.png');
        this.load.image('chicafreddyCAM1Bc','fnafpicture/chicafreddyCAM1Bc.png');
        this.load.image('freddyCAM1Bc','fnafpicture/freddyCAM1Bc.png');
        this.load.image('bonniechicafreddyCAM1Bc','fnafpicture/bonniechicafreddyCAM1Bc.png');
        this.load.image('CAM1A','fnafpicture/CAM1A.png');
        this.load.image('CAM1Ac','fnafpicture/CAM1Ac.png');
        this.load.image('bonnieCAM1Ac','fnafpicture/bonnieCAM1Ac.png');
        this.load.image('chicaCAM1Ac','fnafpicture/chicaCAM1Ac.png');
        this.load.image('bonniechicaCAM1Ac','fnafpicture/bonniechicaCAM1Ac.png');
        this.load.image('bonniefreddyCAM1Ac','fnafpicture/bonniefreddyCAM1Ac.png');
        this.load.image('chicafreddyCAM1Ac','fnafpicture/chicafreddyCAM1Ac.png');
        this.load.image('freddyCAM1Ac','fnafpicture/freddyCAM1Ac.png');
        this.load.image('bonniechicafreddyCAM1Ac','fnafpicture/bonniechicafreddyCAM1Ac.png');
        this.load.image('CAM7','fnafpicture/CAM7.png');
        this.load.image('CAM7c','fnafpicture/CAM7c.png');
        this.load.image('chicaCAM7c','fnafpicture/chicaCAM7c.png');
        this.load.image('freddyCAM7c','fnafpicture/freddyCAM7c.png');
        this.load.image('CAM6','fnafpicture/CAM6.png');
        this.load.image('CAM6c','fnafpicture/CAM6c.png');
        this.load.image('CAM4A','fnafpicture/CAM4A.png');
        this.load.image('CAM4Ac','fnafpicture/CAM4Ac.png');
        this.load.image('chicaCAM4Ac','fnafpicture/chicaCAM4Ac.png');
        this.load.image('freddyCAM4Ac','fnafpicture/freddyCAM4Ac.png');
        this.load.image('CAM4B','fnafpicture/CAM4B.png');
        this.load.image('CAM4Bc','fnafpicture/CAM4Bc.png');
        this.load.image('chicaCAM4Bc','fnafpicture/chicaCAM4Bc.png');
        this.load.image('freddyCAM4Bc','fnafpicture/freddyCAM4Bc.png');
        this.load.image('CAM3c','fnafpicture/CAM3c.png');
        this.load.image('bonnieCAM3c','fnafpicture/bonnieCAM3c.png');
        this.load.image('CAM1Cc','fnafpicture/CAM1Cc.png');
        this.load.image('foxy1CAM1Cc','fnafpicture/foxy1CAM1Cc.png');
        this.load.image('foxy2CAM1Cc','fnafpicture/foxy2CAM1Cc.png');
        this.load.image('foxy3CAM1Cc','fnafpicture/foxy3CAM1Cc.png');
        this.load.spritesheet('foxyCAM2Ac','fnafpicture/foxyCAM2Ac.png',{frameWidth: 120,frameHeight:50});
    }
    create() {
        gameState.intro = this.sound.add('intro');
        gameState.intro.play();
        this.add.text( window.innerWidth/2-200,window.innerHeight/2-50, `Night${gameState.night}`, {fill: '#FFFFFF', fontSize: '60px'});
        var introtimer = this.time.addEvent({
            delay: 3000,
            callback: ()=>{
                this.scene.stop('introNight');
			    this.scene.start(`Night${gameState.night}`);
            },
            startAt: 0,
            timeScale: 1,
        });
        
        gameState.win6AM = function(scene){
            gameState.officenoise.setMute(true);
            gameState.ambient1.setMute(true);
            gameState.doormove.setMute(true);
            gameState.lighttrigger.setMute(true);
            gameState.phonecall.setMute(true);
            scene.scene.stop(`Night${gameState.night}`);
            scene.scene.stop('camera');
            gameState.night += 1;
            localStorage.setItem("night",gameState.night);
            reset();
            scene.scene.start('SIXAM');
        }
        
        gameState.checkPowerUsage = function (scene){
            console.log("Power level", powerlevel);
            if(powerlevel === 1){
                gameState.gusage.x = 10000;
                gameState.gusage.y = 10000;
            }
            else if(powerlevel === 2){
                gameState.gusage.x = 130;
                gameState.gusage.y = window.innerHeight-60;
                gameState.gusage2.x = 10000;
                gameState.gusage2.y = 10000;
            } 
            else if(powerlevel === 3){
                gameState.gusage2.x = 160;
                gameState.gusage2.y = window.innerHeight-60;
                gameState.gusage3.x = 10000;
                gameState.gusage3.y = 10000;
            } 
            else if(powerlevel === 4){
                gameState.gusage3.x = 190;
                gameState.gusage3.y = window.innerHeight-60;
            }
        }
        
        gameState.checkcam = function(scene){
                if(camPOS == 1){
                   if(bonniePOS == 1){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 1){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    } 
                }
                if(camPOS == 2){
                    if(bonniePOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if (foxyPOS == 1 && gameState.foxyChecked == false){
                        gameState.foxyChecked = true;
                        console.log(gameState.foxyChecked);
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                        gameState.camerabg.anims.play('foxyRun',true);
                        gameState.run.play();
                        foxycooldown = 150;
                    }
                    else{
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 3){
                    if(bonniePOS == 3){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM3c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 3){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM3c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 4){
                    if(foxyPOS == 3){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy1CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(foxyPOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy2CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(foxyPOS == 1){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy3CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(foxyPOS == 4){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 5){
                    if(bonniePOS == 5){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 5){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 6){
                    if(bonniePOS == 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS == 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 6 && chicaPOS == 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS == 6 && chicaPOS == 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicafreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS == 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'chicafreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 6 && chicaPOS !== 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniefreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS !== 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 7){
                    if(bonniePOS !== 7 && chicaPOS == 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS !== 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 7 && chicaPOS !== 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicaCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS == 7 && freddyPOS !== 7){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS !== 7 && freddyPOS !== 7){
                        gameState.camerabg = scene.add.sprite(0,0,'chicafreddyCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 7 && chicaPOS == 7 && freddyPOS !== 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniefreddyCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 7 && chicaPOS !== 7 && freddyPOS !== 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicafreddyCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS == 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 8){
                    if(chicaPOS == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(freddyPOS == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 8 && freddyPOS !== 8){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 9){
                    if(chicaPOS == 9){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM6c').setOrigin(0,0).setDepth(0).setScale(1);
                        gameState.kitchenNoise.play();
                    }
                    else if(chicaPOS !== 9){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM6c').setOrigin(0,0).setDepth(0).setScale(1);
                    }
                }
                if(camPOS !== 9){
                    gameState.kitchenNoise.pause();
                }
                if(camPOS == 10){
                    if(chicaPOS == 10){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(freddyPOS == 10){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 10 && freddyPOS !== 10){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 11){
                    if(chicaPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(freddyPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 11 && freddyPOS !== 11){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                }
        gameState.powerdead = function (scene){
            if(gameState.powerDown == true){
                if(cameraOn == true){
                    scene.scene.bringToTop(`Night${gameState.night}`);
                    scene.scene.pause('camera');
                }
                gameState.officenoise.resume();
                gameState.powertext.destroy();
                gameState.gusage.x = 10000;
                gameState.gusage.y = 10000;
                gameState.gusage2.x = 10000;
                gameState.gusage2.y = 10000;
                gameState.gusage3.x = 10000;
                gameState.gusage3.y = 10000;
                gameState.officenoise.pause();
                gameState.lighttrigger.pause();
                gameState.phonecall.pause();
                gameState.phonecall2.pause();
                gameState.llightButton.destroy();
                gameState.rlightButton.destroy();
                gameState.ldoorButton.destroy();
                gameState.rdoorButton.destroy();
                gameState.camera.destroy();
                if(ldoorOpen === false){
                    ldoorSprite.anims.play('ldooropen',true);
                    ldoorOpen = true;
                    gameState.doormove.play();
                }
                if(rdoorOpen === false){
                    rdoorOpen = true;
                    rdoorSprite.anims.play('rdooropen',true);
                    gameState.doormove.play();
                }
                gameState.AMtext.destroy();
                gameState.ambient1.pause();
                gameState.powerdied.play();
                gameState.bg = scene.add.image(0,0,'darkOffice').setOrigin(0,0).setDepth(2);
                gameState.random = Math.ceil(Math.random()*20000)+10000;
                scene.time.addEvent({
                    delay: gameState.random,
                    callback: ()=>{
                        gameState.jumpscaresprite = scene.add.sprite(100,120,'freddySinging').setOrigin(0,0).setDepth(4).setScale(2);
                        gameState.jumpscaresprite.anims.play('freddyS',true);
                        gameState.freddyMusicBox.play();
                        gameState.random = Math.ceil(Math.random()*5000)+5000;
                        scene.time.addEvent({
                            delay: gameState.random,
                            callback: ()=>{
                                gameState.jumpscaresprite.destroy();
                                gameState.freddyMusicBox.pause();
                                gameState.random = Math.ceil(Math.random()*1000)+4000;
                                scene.time.addEvent({
                                    delay: gameState.random,
                                    callback: ()=>{
                                        gameState.jumpscaresprite = scene.add.sprite(0,0,'freddyJumpscare2').setOrigin(0,0).setDepth(4).setScale(5);
                                        gameState.jumpscaresprite.anims.play('freddyJS2');
                                        gameState.robotscream.play();
                                        scene.time.addEvent({
                                            delay: 800,
                                            callback: ()=>{
                                                gameState.robotscream.pause();
                                                scene.scene.stop(`Night${gameState.night}`);
                                                scene.scene.stop('camera');
                                                reset();
                                                scene.scene.start('gameOver');
                                            },
                                            startAt: 0,
                                            timeScale: 1,
                                        });
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            },
                            startAt: 0,
                            timeScale: 1,
                        });
                    },
                    startAt: 0,
                    timeScale: 1,
                });
                
                
                gameState.powerDown = false;
            }
        }
        gameState.addButtons = function(scene){
            gameState.ldoorButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    gameState.doormove.play();
                    ldoorOpen = !(ldoorOpen);
                    if(ldoorOpen === false){
                        secondcons /= 2;
                        powerlevel += 1;
                        ldoorSprite.anims.play('ldoorclose',true);
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        ldoorSprite.anims.play('ldooropen',true);
                    }
                }
            });
            gameState.llightButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    llightOn = !(llightOn);
                    if(rlightOn === true){
                        rlightOn = false;
                        rlightSprite.destroy();
                        secondcons *= 2;
                        powerlevel -= 1;
                    }
                    if(llightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons *= 2;
                        powerlevel -= 1;
                        llightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(gameState.loopSound2);
                        secondcons /= 2;
                        powerlevel += 1;
                        if(bonniePOS == 0){
                            if(ldoorOpen == true){
                                gameState.windowscare.play();
                            }
                            llightSprite = scene.add.image(0,0,'bonniellighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                        else {
                            llightSprite = scene.add.image(0,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                    }
                }
            });
            gameState.rdoorButton.on('pointerup', () => {
                if(power > 0 && cameraOn === false){
                    gameState.doormove.play();
                    rdoorOpen = !(rdoorOpen);
                    if(rdoorOpen === false){
                        secondcons /= 2;
                        powerlevel += 1;
                        rdoorSprite.anims.play('rdoorclose',true);
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        rdoorSprite.anims.play('rdooropen',true);
                    }
                }
            });
            gameState.rlightButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    rlightOn = !(rlightOn);
                    if(llightOn === true){
                        llightOn = false;
                        llightSprite.destroy();
                        secondcons *= 2;
                        powerlevel -= 1;
                    }
                    if(rlightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons *= 2;
                        powerlevel -= 1;
                        rlightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(gameState.loopSound2);
                        secondcons /= 2;
                        powerlevel += 1;
                        if(chicaPOS == 0){
                            if(rdoorOpen == true){
                                gameState.windowscare.play();
                            }
                            rlightSprite = scene.add.image(600,0,'chicallighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                        else {
                            rlightSprite = scene.add.image(600,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                    }
                }
            });
            gameState.camera.on('pointerover', () => {
                if(power > 0){
                    cameraOn = !(cameraOn);
                        gameState.cameranoise.play();
                    if(cameraOn === true){
                        secondcons /= 2;
                        powerlevel += 1;
                        console.log(powerlevel);
                        scene.scene.bringToTop('camera');
                        scene.scene.resume('camera');
                        gameState.officenoise.pause();
                        gameState.lighttrigger.pause();
                        if(rlightOn === true){
                            rlightOn = false;
                            rlightSprite.destroy();
                            powerlevel -=1;
                        }
                        else if(llightOn === true){
                            rlightOn = false;
                            llightSprite.destroy();
                            powerlevel -=1;
                        }
                    }
                    else {
                        gameState.openCAMS = false;
                        secondcons *= 2;
                        powerlevel -= 1;
                        scene.scene.bringToTop(`Night${gameState.night}`);
                        scene.scene.pause('camera');
                        gameState.officenoise.resume();
                    }
                    gameState.checkPowerUsage(scene);
                }
            });
        }
        
        
        gameState.bonnieMovement = function(scene){
            bonniecooldown -= 1;
            if(bonniecooldown <= 0){
                if(gameState.night == 1){
                   bonniecooldown = Math.ceil(Math.random()*500)+2500; 
                }
                else if(gameState.night == 2){
                   bonniecooldown = Math.ceil(Math.random()*900)+1500; 
                }
                else if(gameState.night == 3){
                   bonniecooldown = Math.ceil(Math.random()*900)+800; 
                }
                else if(gameState.night == 4){
                   bonniecooldown = Math.ceil(Math.random()*800)+550; 
                }
                else if(gameState.night == 5){
                   bonniecooldown = Math.ceil(Math.random()*550)+300; 
                }
                if(bonniePOS == 7){
                    bonniePOS = 6;
                }
                else if(bonniePOS == 6){
                    gameState.random = Math.ceil(Math.random()*2);
                    if(gameState.random == 1){
                        bonniePOS = 5; 
                    }
                    else if(gameState.random == 2){
                        bonniePOS = 2; 
                    }
                }
                else if(bonniePOS == 5){
                    bonniePOS = 2;
                }
                else if(bonniePOS == 2){
                    gameState.random = Math.ceil(Math.random()*2);
                    if(gameState.random == 1){
                        bonniePOS = 3; 
                    }
                    else if(gameState.random == 2){
                        bonniePOS = 1; 
                    }
                }
                else if(bonniePOS == 3){
                    gameState.random = Math.ceil(Math.random()*2);
                    if(gameState.random == 1){
                        bonniePOS = 2; 
                    }
                    else if(gameState.random == 2){
                        bonniePOS = 1; 
                    }
                }
                else if(bonniePOS == 1){
                    bonniecooldown = Math.ceil(Math.random()*1200)+300;
                    if(llightOn == true){
                        llightSprite.destroy();
                        gameState.lighttrigger.pause();
                    }
                    bonniePOS = 0;
                }
                else if(bonniePOS == 0){
                    if(ldoorOpen == false){
                        if(llightOn == true){
                            powerlevel -= 1;
                            llightSprite.destroy();
                        }
                        gameState.lighttrigger.pause();
                        llightOn = false;
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            bonniePOS = 7; 
                        }
                        else if(gameState.random == 2){
                            bonniePOS = 6; 
                        }
                    }
                    else{
                        scene.scene.pause('camera');
                        scene.scene.bringToTop(`Night${gameState.night}`);
                        gameState.robotscream.play();
                        cameraOn = false;
                        if(llightOn == true){
                            llightSprite.destroy();
                        }
                        gameState.jumpscaresprite = scene.add.sprite(0,0,'bonnieJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                        gameState.jumpscaresprite.anims.play('bonnieJS',true);
                        gameState.officenoise.pause();
                        gameState.phonecall.pause();
                        gameState.lighttrigger.pause();
                        gameState.ambient1.pause();
                        gameState.doormove.pause();
                        scene.time.addEvent({
                            delay: 1500,
                            callback: ()=>{
                                if(deathRunning == false){
                                    deathRunning = true;
                                    gameState.robotscream.pause();
                                    scene.scene.stop(`Night${gameState.night}`);
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                }
                            },
                            startAt: 0,
                            timeScale: 1,
                        });
                    }
                }
            }
        }
        gameState.chicaMovement = function(scene){
            chicacooldown -= 1;
            if(chicacooldown <= 0){
                if(gameState.night == 1){
                   chicacooldown = Math.ceil(Math.random()*500)+2100; 
                }
                else if(gameState.night == 2){
                   chicacooldown = Math.ceil(Math.random()*1000)+1350; 
                }
                else if(gameState.night == 3){
                   chicacooldown = Math.ceil(Math.random()*900)+700; 
                }
                else if(gameState.night == 4){
                   chicacooldown = Math.ceil(Math.random()*700)+650; 
                }
                else if(gameState.night == 5){
                   chicacooldown = Math.ceil(Math.random()*450)+450; 
                }
                if(chicaPOS == 7){
                    chicaPOS = 6;
                }
                else if(chicaPOS == 6){
                    gameState.random = Math.ceil(Math.random()*4);
                    if(gameState.random == 1){
                        chicaPOS = 8; 
                    }
                    else if(gameState.random == 2 && freddyPOS !== 9){
                        chicaPOS = 9; 
                    }
                    else if(gameState.random == 3 && freddyPOS !== 10|| gameState.random == 4 && freddyPOS !== 10){
                        chicaPOS = 10; 
                    }
                }
                else if(chicaPOS == 8){
                    gameState.random = Math.ceil(Math.random()*3);
                    if(gameState.random == 1){
                        chicaPOS = 6; 
                    }
                    else if(gameState.random == 2 && freddyPOS !== 10){
                        chicaPOS = 10; 
                    }
                }
                else if(chicaPOS == 9){
                    gameState.random = Math.ceil(Math.random()*3);
                    if(gameState.random == 1){
                        chicaPOS = 6; 
                    }
                    else if(gameState.random == 2){
                        chicaPOS = 10; 
                    }
                }
                else if(chicaPOS == 10 && freddyPOS !== 11){
                    chicaPOS = 11;
                }
                else if(chicaPOS == 11){
                    chicacooldown = Math.ceil(Math.random()*1200)+300;
                    if(rlightOn == true){
                        rlightSprite.destroy();
                        gameState.lighttrigger.pause();
                    }
                    chicaPOS = 0; 
                }
                else if(chicaPOS == 0){
                    if(rdoorOpen == false){
                        if(rlightOn == true){
                            rlightSprite.destroy();
                            powerlevel -= 1;
                        }
                        gameState.lighttrigger.pause();
                        rlightOn = false;
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            chicaPOS = 7; 
                        }
                        else if(gameState.random == 2){
                            chicaPOS = 6; 
                        }
                    }
                    else{
                        scene.scene.pause('camera');
                        scene.scene.bringToTop(`Night${gameState.night}`);
                        gameState.robotscream.play();
                        cameraOn = false;
                        if(rlightOn == true){
                            rlightSprite.destroy();
                        }
                        gameState.jumpscaresprite = scene.add.sprite(0,0,'chicaJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                        gameState.jumpscaresprite.anims.play('chicaJS',true);
                        gameState.officenoise.pause();
                        gameState.phonecall.pause();
                        gameState.lighttrigger.pause();
                        gameState.ambient1.pause();
                        gameState.doormove.pause();
                        scene.time.addEvent({
                            delay: 1500,
                            callback: ()=>{
                                if(deathRunning == false){
                                    deathRunning = true;
                                    gameState.robotscream.pause();
                                    scene.scene.stop(`Night${gameState.night}`);
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                }
                            },
                            startAt: 0,
                            timeScale: 1,
                        });
                    }
                }
            }
        }
        gameState.freddyMovement = function(scene){
            freddycooldown -= 1;
            if(freddycooldown <= 0){
                gameState.freddyLaugh.play();
                if(gameState.night == 3){
                   freddycooldown = Math.ceil(Math.random()*500)+1000; 
                }
                else if(gameState.night == 4){
                   freddycooldown = Math.ceil(Math.random()*500)+700;  
                }
                else if(gameState.night == 5){
                   freddycooldown = Math.ceil(Math.random()*800)+500;  
                }
                if(freddyPOS == 7){
                    freddyPOS = 6;
                }
                else if(freddyPOS == 6){
                    gameState.random = Math.ceil(Math.random()*4);
                    if(gameState.random == 1 && chicaPOS !== 8){
                        freddyPOS = 8; 
                    }
                    else if(gameState.random == 2){
                        freddyPOS = 9; 
                    }
                    else if(gameState.random == 3 && chicaPOS !== 10|| gameState.random == 4 && chicaPOS !== 10){
                        freddyPOS = 10; 
                    }
                }
                else if(freddyPOS == 8){
                    gameState.random = Math.ceil(Math.random()*3);
                    if(gameState.random == 1){
                        freddyPOS = 6; 
                    }
                    else if(gameState.random == 2 && chicaPOS !== 10){
                        freddyPOS = 10; 
                    }
                }
                else if(freddyPOS == 9){
                    gameState.random = Math.ceil(Math.random()*3);
                    if(gameState.random == 1){
                        freddyPOS = 6; 
                    }
                    else if(gameState.random == 2){
                        freddyPOS = 10; 
                    }
                }
                else if(freddyPOS == 10 && chicaPOS !== 11){
                    freddyPOS = 11;
                }
                else if(freddyPOS == 11){
                    freddycooldown = Math.ceil(Math.random()*1500)+700;
                    if(rdoorOpen == false){
                        if(rlightOn == true){
                            rlightSprite.destroy();
                            powerlevel -= 1;
                        }
                        gameState.lighttrigger.pause();
                        rlightOn = false;
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            freddyPOS = 7; 
                        }
                        else if(gameState.random == 2){
                            freddyPOS = 6; 
                        }
                    }
                    else{
                        scene.scene.pause('camera');
                        scene.scene.bringToTop(`Night${gameState.night}`);
                        gameState.robotscream.play();
                        cameraOn = false;
                        if(rlightOn == true){
                            rlightSprite.destroy();
                        }
                        gameState.jumpscaresprite = scene.add.sprite(0,0,'freddyJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                        gameState.jumpscaresprite.anims.play('freddyJS',true);
                        gameState.officenoise.pause();
                        gameState.phonecall.pause();
                        gameState.lighttrigger.pause();
                        gameState.ambient1.pause();
                        gameState.doormove.pause();
                        scene.time.addEvent({
                            delay: 1500,
                            callback: ()=>{
                                if(deathRunning == false){
                                    deathRunning = true;
                                    gameState.robotscream.pause();
                                    scene.scene.stop(`Night${gameState.night}`);
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                }
                            },
                            startAt: 0,
                            timeScale: 1,
                        });
                    }
                }
            }
        }
        gameState.foxyMovement = function(scene){
            foxycooldown -= 1;
            if(foxycooldown <= 0){
                if(gameState.night == 2){
                    foxycooldown = Math.ceil(Math.random()*1000)+1500; 
                }
                else if(gameState.night == 3){
                    foxycooldown = Math.ceil(Math.random()*1000)+1100; 
                }
                else if(gameState.night == 4){
                    foxycooldown = Math.ceil(Math.random()*600)+800; 
                }
                else if(gameState.night == 5){
                    foxycooldown = Math.ceil(Math.random()*200)+700; 
                }
                if(foxyPOS == 4){
                    gameState.foxyChecked = false;
                    foxyPOS = 3;
                }
                else if(foxyPOS == 3){
                    foxyPOS = 2; 
                }
                else if(foxyPOS == 2 && bonniePOS !== 2){
                    foxycooldown = Math.ceil(Math.random()*500)+800; 
                    foxyPOS = 1;
                }
                else if(foxyPOS == 1){
                    if(ldoorOpen == true){
                        scene.scene.pause('camera');
                        scene.scene.bringToTop(`Night${gameState.night}`);
                        gameState.robotscream.play();
                        cameraOn = false;
                        if(llightOn == true){
                            llightSprite.destroy();
                        }
                        gameState.jumpscaresprite = scene.add.sprite(74,70,'foxyJumpscare').setOrigin(0,0).setDepth(4).setScale(1.1);
                        gameState.jumpscaresprite.anims.play('foxyJS',true);
                        gameState.officenoise.pause();
                        gameState.phonecall.pause();
                        gameState.lighttrigger.pause();
                        gameState.ambient1.pause();
                        gameState.doormove.pause();
                        scene.time.addEvent({
                            delay: 1500,
                            callback: ()=>{
                                if(deathRunning == false){
                                    deathRunning = true;
                                    gameState.robotscream.pause();
                                    scene.scene.stop(`Night${gameState.night}`);
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                }
                            },
                            startAt: 0,
                            timeScale: 1,
                        });
                    }
                    else {
                        power -= 3;
                        gameState.knock.play();
                        foxyPOS = 4;
                    }
                }
            }
        }  
        
        
        gameState.loopSound = {
            loop: true,
            volume: 0.4
        }
        gameState.loopSound2 = {
            loop: true,
            volume: 1.5
        }
        
        this.anims.create({
            key: 'ldoorclose',
            frameRate: 20,
            frames:this.anims.generateFrameNames('ldoor',{start: 0,end: 6})
        });
        this.anims.create({
            key: 'ldooropen',
            frameRate: 20,
            frames:this.anims.generateFrameNames('ldoor',{start: 7,end: 12})
        });
        this.anims.create({
            key: 'rdoorclose',
            frameRate: 20,
            frames:this.anims.generateFrameNames('ldoor',{start: 0,end: 6})
        });
        this.anims.create({
            key: 'rdooropen',
            frameRate: 20,
            frames:this.anims.generateFrameNames('ldoor',{start: 7,end: 12})
        });
        this.anims.create({
            key: 'bonnieJS',
            frameRate: 20,
            repeat: -1,
            frames:this.anims.generateFrameNames('bonnieJumpscare',{start: 0,end: 7})
        });
        this.anims.create({
            key: 'chicaJS',
            frameRate: 20,
            repeat: -1,
            frames:this.anims.generateFrameNames('chicaJumpscare',{start: 0,end: 7})
        });
        this.anims.create({
            key: 'freddyJS',
            frameRate: 20,
            repeat: -1,
            frames:this.anims.generateFrameNames('freddyJumpscare',{start: 0,end: 5})
        });
        this.anims.create({
            key: 'freddyJS2',
            frameRate: 10,
            repeat: -1,
            frames:this.anims.generateFrameNames('freddyJumpscare2',{start: 0,end: 7})
        });
        this.anims.create({
            key: 'foxyJS',
            frameRate: 20,
            frames:this.anims.generateFrameNames('foxyJumpscare',{start: 0,end: 9})
        });
        this.anims.create({
            key: 'freddyS',
            frameRate: 10,
            repeat: -1,
            frames:this.anims.generateFrameNames('freddySinging',{start: 0,end: 9})
        });
        
        gameState.doormove = this.sound.add('doormove');
        gameState.windowscare = this.sound.add('windowscare');
        gameState.lighttrigger = this.sound.add('lighttrigger');
        gameState.cameranoise = this.sound.add('cameranoise');
        gameState.officenoise = this.sound.add('officenoise');
        gameState.ambient1 = this.sound.add('ambient1');
        gameState.robotscream = this.sound.add('robotscream');
        gameState.knock = this.sound.add('knock');
        gameState.powerdied = this.sound.add('powerDown');
        gameState.phonecall = this.sound.add('phonecall1');
        gameState.phonecall2 = this.sound.add('phonecall2');
        gameState.phonecall3 = this.sound.add('phonecall3');
        gameState.phonecall4 = this.sound.add('phonecall4');
        gameState.phonecall5 = this.sound.add('phonecall5');
        gameState.kitchenNoise = this.sound.add('kitchenNoise');
        gameState.freddyLaugh = this.sound.add('freddyLaugh');
        gameState.freddyMusicBox = this.sound.add('freddyMusicBox');
	}
    update(){
        
    }
}