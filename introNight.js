class introNight extends Phaser.Scene {
    constructor() {
		super({ key: 'introNight' })
	}
    preload(){
        this.load.audio('intro','audio/nightintro.mp3');
        this.load.image('bg','fnafpicture/blackscreen.png');
        this.load.image('Office','fnafpicture/Office.png');
        this.load.image('darkOffice','fnafpicture/darkOffice.png');
        this.load.spritesheet('ldoor','fnafpicture/ldoor.png',{frameWidth: 120,frameHeight:393});
        this.load.spritesheet('bonnieJumpscare','fnafpicture/bonnieJumpscare.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('chicaJumpscare','fnafpicture/chicaJumpscare.png',{frameWidth: 240,frameHeight:100});
        this.load.spritesheet('foxyJumpscare','fnafpicture/foxyJumpscare.png',{frameWidth: 180,frameHeight:400});
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
        this.load.audio('doormove', 'audio/doormove.mp3');
        this.load.audio('windowscare', 'audio/windowscare.mp3');
        this.load.audio('lighttrigger', 'audio/lighttrigger.mp3');
        this.load.audio('officenoise', 'audio/officenoise.mp3');
        this.load.audio('cameranoise', 'audio/cameranoise.mp3');
        this.load.audio('ambient1', 'audio/ambient1.mp3');
        this.load.audio('phonecall1', 'audio/phonecall1.mp3');
        this.load.audio('phonecall2', 'audio/phonecall2.mp3');
        this.load.audio('robotscream', 'audio/robotscream.mp3');
        this.load.audio('knock', 'audio/knock.mp3');
        this.load.audio('camsound','audio/nightintro.mp3');
        this.load.audio('powerDown','audio/powerDown.mp3');
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
        this.load.image('CAM1A','fnafpicture/CAM1A.png');
        this.load.image('CAM1Ac','fnafpicture/CAM1Ac.png');
        this.load.image('bonnieCAM1Ac','fnafpicture/bonnieCAM1Ac.png');
        this.load.image('chicaCAM1Ac','fnafpicture/chicaCAM1Ac.png');
        this.load.image('bonniechicaCAM1Ac','fnafpicture/bonniechicaCAM1Ac.png');
        this.load.image('CAM7','fnafpicture/CAM7.png');
        this.load.image('CAM7c','fnafpicture/CAM7c.png');
        this.load.image('chicaCAM7c','fnafpicture/chicaCAM7c.png');
        this.load.image('CAM6','fnafpicture/CAM6.png');
        this.load.image('CAM6c','fnafpicture/CAM6c.png');
        this.load.image('CAM4A','fnafpicture/CAM4A.png');
        this.load.image('CAM4Ac','fnafpicture/CAM4Ac.png');
        this.load.image('chicaCAM4Ac','fnafpicture/chicaCAM4Ac.png');
        this.load.image('CAM4B','fnafpicture/CAM4B.png');
        this.load.image('CAM4Bc','fnafpicture/CAM4Bc.png');
        this.load.image('chicaCAM4Bc','fnafpicture/chicaCAM4Bc.png');
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
                    else if(bonniePOS == 7 && chicaPOS == 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 8){
                    if(chicaPOS == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 8){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 10){
                    if(chicaPOS == 10){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 10){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 11){
                    if(chicaPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 11){
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
                    gameState.doormove.play();
                }
                if(rdoorOpen === false){
                    rdoorSprite.anims.play('rdooropen',true);
                    gameState.doormove.play();
                }
                gameState.powerDown = false;
                gameState.AMtext.destroy();
                gameState.ambient1.pause();
                gameState.powerdied.play();
                gameState.bg = scene.add.image(0,0,'darkOffice').setOrigin(0,0).setDepth(2);
            }
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
            key: 'foxyJS',
            frameRate: 20,
            frames:this.anims.generateFrameNames('foxyJumpscare',{start: 0,end: 9})
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
	}
    update(){
        
    }
}