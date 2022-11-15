    var ldoorSprite;
    var llightSprite;
            
    var rdoorSprite;
    var rlightSprite;

    var power = 100;

    var AM = 12;

    var ldoorOpen = true;
    var rdoorOpen = true;

    var llightOn = false;
    var rlightOn = false;

    var cameraOn = false;

    var powerlevel = 1;
    var powerlimit = 600;
    var time = 600;

    var camPOS = 7;

    var bonniePOS = 7;  
    var bonniecooldown = 0;
    var chicaPOS = 7;
    var chicacooldown = 0;
    var freddyPOS = 7;
    var freddycooldown = 0;
    var foxyPOS = 3;
    var foxlocked = false;
    var foxycooldown = 0;
    var checked = 0;
    var springtrapPOS = 7;
    var springtrapcooldown = 0;
    
    function reset(){
        second = 10;
        secondcons = 10;
        powerlevel = 1;
        camPOS = 7;
        AM = 12;
        power = 100;
        cameraOn = false;
        ldoorOpen = true;
        rdoorOpen = true;
        llightOn = false;
        rlightOn = false;
        foxyPOS = 3;
        freddyPOS = 7;
        bonniePOS = 7;
        chicaPOS = 7;
        springtrapPOS = 5;
        checked = 0;
        foxlocked = false;
    }

    class camera extends Phaser.Scene {
        constructor() {
            super({ key: 'camera' })
        }
        preload(){
            this.load.audio('camsound','audio/nightintro.mp3');
            this.load.audio('static','audio/static.mp3');
            this.load.image('bg','fnafpicture/blackscreen.png');
            this.load.image('static','fnafpicture/static.png');
            this.load.image('CAMSlayout','fnafpicture/CAMSlayout.png');
            this.load.image('CAM2B','fnafpicture/CAM2B.png');
            this.load.image('CAM2Bc','fnafpicture/CAM2Bc.png');
            this.load.image('bonnieCAM2Bc','fnafpicture/bonnieCAM2Bc.png');
            this.load.image('CAM2A','fnafpicture/CAM2A.png');
            this.load.image('CAM2Ac','fnafpicture/CAM2Ac.png');
            this.load.image('bonnieCAM2Ac','fnafpicture/bonnieCAM2Ac.png');
            this.load.image('springtrapCAM2Ac','fnafpicture/springtrapCAM2Ac.png');
            this.load.image('CAM3','fnafpicture/CAM3.png');
            this.load.image('CAM1C','fnafpicture/CAM1C.png');
            this.load.image('CAM5','fnafpicture/CAM5.png');
            this.load.image('CAM5c','fnafpicture/CAM5c.png');
            this.load.image('bonnieCAM5ca','fnafpicture/bonnieCAM5ca.png');
            this.load.image('bonnieCAM5cb','fnafpicture/bonnieCAM5cb.png');
            this.load.image('springtrapCAM5c','fnafpicture/springtrapCAM5c.png');
            this.load.image('CAM1B','fnafpicture/CAM1B.png');   
            this.load.image('CAM1Bc','fnafpicture/CAM1Bc.png');
            this.load.image('bonnieCAM1Bc','fnafpicture/bonnieCAM1Bc.png');
            this.load.image('bonnie2CAM1Bc','fnafpicture/bonnie2CAM1Bc.png');
            this.load.image('chicaCAM1Bc','fnafpicture/chicaCAM1Bc.png');
            this.load.image('chica2CAM1Bc','fnafpicture/chica2CAM1Bc.png');
            this.load.image('bonniechicaCAM1Bc','fnafpicture/bonniechicaCAM1Bc.png');
            this.load.image('bonniechicafreddyCAM1Bc','fnafpicture/bonniechicafreddyCAM1Bc.png');
            this.load.image('bonniefreddyCAM1Bc','fnafpicture/bonniefreddyCAM1Bc.png');
            this.load.image('chicafreddyCAM1Bc','fnafpicture/chicafreddyCAM1Bc.png');
            this.load.image('freddyCAM1Bc','fnafpicture/freddyCAM1Bc.png');
            this.load.image('CAM1A','fnafpicture/CAM1A.png');
            this.load.image('CAM1Ac','fnafpicture/CAM1Ac.png');
            this.load.image('CAM1Acb','fnafpicture/CAM1Acb.png');
            this.load.image('bonnieCAM1Ac','fnafpicture/bonnieCAM1Ac.png');
            this.load.image('chicaCAM1Ac','fnafpicture/chicaCAM1Ac.png');
            this.load.image('bonniechicaCAM1Ac','fnafpicture/bonniechicaCAM1Ac.png');
            this.load.image('bonniechicafreddyCAM1Ac','fnafpicture/bonniechicafreddyCAM1Ac.png');
            this.load.image('CAM7','fnafpicture/CAM7.png');
            this.load.image('CAM7c','fnafpicture/CAM7c.png');
            this.load.image('chicaCAM7c','fnafpicture/chicaCAM7c.png');
            this.load.image('chica2CAM7c','fnafpicture/chica2CAM7c.png');
            this.load.image('freddyCAM7c','fnafpicture/freddyCAM7c.png');
            this.load.image('CAM6','fnafpicture/CAM6.png');
            this.load.image('CAM6c','fnafpicture/CAM6c.png');
            this.load.image('CAM4A','fnafpicture/CAM4A.png');
            this.load.image('CAM4Ac','fnafpicture/CAM4Ac.png');
            this.load.image('chicaCAM4Aca','fnafpicture/chicaCAM4Aca.png');
            this.load.image('chicaCAM4Acb','fnafpicture/chicaCAM4Acb.png');
            this.load.image('freddyCAM4Ac','fnafpicture/freddyCAM4Ac.png');
            this.load.image('CAM4B','fnafpicture/CAM4B.png');
            this.load.image('CAM4Bc','fnafpicture/CAM4Bc.png');
            this.load.image('chicaCAM4Bca','fnafpicture/chicaCAM4Bca.png');
            this.load.image('chicaCAM4Bcb','fnafpicture/chicaCAM4Bcb.png');
            this.load.image('freddyCAM4Bc','fnafpicture/freddyCAM4Bc.png');
            this.load.image('springtrapCAM4Bc','fnafpicture/springtrapCAM4Bc.png');
            this.load.image('CAM3c','fnafpicture/CAM3c.png');
            this.load.image('bonnieCAM3c','fnafpicture/bonnieCAM3c.png');
            this.load.image('CAM1Cc','fnafpicture/CAM1Cc.png');
            this.load.image('foxy1CAM1Cc','fnafpicture/foxy1CAM1Cc.png');
            this.load.image('foxy2CAM1Cc','fnafpicture/foxy2CAM1Cc.png');
            this.load.image('foxy3CAM1Cc','fnafpicture/foxy3CAM1Cc.png');
            this.load.spritesheet('foxyCAM2Ac','fnafpicture/foxyCAM2Ac.png',{frameWidth: 120,frameHeight:50});
            this.load.audio('foxyRun', 'audio/foxyRun.mp3');
        }
        create(){
            gameState.camsound = this.sound.add('camsound');
            gameState.static = this.sound.add('static');
            gameState.foxyRun = this.sound.add('foxyRun');
            //background
            gameState.camerabg = this.add.sprite(0,0,'CAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
            //cameralayout
            gameState.CAMSlayout = this.add.sprite(650,140,'CAMSlayout').setOrigin(0,0).setDepth(1);
            
            gameState.CAMS2B = this.add.sprite(750,430,'CAM2B').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS2A = this.add.sprite(750,385,'CAM2A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS3 = this.add.sprite(650,365,'CAM3').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1C = this.add.sprite(680,270,'CAM1C').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS5 = this.add.sprite(600,200,'CAM5').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1B = this.add.sprite(720,170,'CAM1B').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1A = this.add.sprite(780,110,'CAM1A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS7 = this.add.sprite(1090,180,'CAM7').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS6 = this.add.sprite(1050,320,'CAM6').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS4A = this.add.sprite(950,385,'CAM4A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS4B = this.add.sprite(950,430,'CAM4B').setOrigin(0,0).setInteractive().setDepth(1);
            this.anims.create({
                key: 'foxyRun',
                frameRate: 20,
                frames:this.anims.generateFrameNames('foxyCAM2Ac',{start: 0,end: 17})
            });
            gameState.CAMS2B.on('pointerdown', () => {
                if(camPOS !== 1){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 1;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS2A.on('pointerdown', () => {
                if(camPOS !== 2){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 2;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS3.on('pointerdown', () => {
                if(camPOS !== 3){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 3;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS1C.on('pointerdown', () => {
                if(camPOS !== 4){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 4;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS5.on('pointerdown', () => {
                if(camPOS !== 5){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 5;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS1B.on('pointerdown', () => {
                if(camPOS !== 6){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 6;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS1A.on('pointerdown', () => {
                if(camPOS !== 7){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 7;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS7.on('pointerdown', () => {
                if(camPOS !== 8){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 8;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS6.on('pointerdown', () => {
                if(camPOS !== 9){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 9;
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'CAM6c').setOrigin(0,0).setDepth(0);
                }
            });
            gameState.CAMS4A.on('pointerdown', () => {
                if(camPOS !== 10){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 10;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.CAMS4B.on('pointerdown', () => {
                if(camPOS !== 11){
                    gameState.static.pause();
                    gameState.camsound.play();
                    camPOS = 11;
                    gameState.camerabg.destroy();
                    gameState.checkcam(this);
                }
            });
            gameState.camscene = this;
        }
        update(){
            if(bonniecooldown <= 10){
                console.log("bo")
                if(camPOS == bonniePOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == bonniePOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
            if(chicacooldown <= 10){
                console.log("ch")
                if(camPOS == chicaPOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == chicaPOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
            if(freddycooldown <= 25 && gameState.freddy.active == true){
                console.log("fre")
                if(camPOS == freddyPOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == freddyPOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
            if(springtrapcooldown <= 10 && gameState.springtrap.active == true){
                console.log("sp");
                if(camPOS == springtrapPOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == springtrapPOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
        }
    }

    class Night1 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night1' })
        }
        preload(){
            this.load.image('bg','fnafpicture/blackscreen.png');
            this.load.spritesheet('ldoor','fnafpicture/ldoor.png',{frameWidth: 120,frameHeight:393});
            this.load.spritesheet('bonnieJumpscare','fnafpicture/bonnieJumpscare.png',{frameWidth: 240,frameHeight:100});
            this.load.spritesheet('chicaJumpscare','fnafpicture/chicaJumpscare.png',{frameWidth: 240,frameHeight:100});
            this.load.spritesheet('foxyJumpscare','fnafpicture/foxyJumpscare.png',{frameWidth: 110,frameHeight:150});
            this.load.spritesheet('freddy2Jumpscare','fnafpicture/freddy2Jumpscare.png',{frameWidth: 90,frameHeight:50});
            this.load.spritesheet('springtrapJumpscare','fnafpicture/springtrapJumpscare.png',{frameWidth: 140,frameHeight:100});
            this.load.spritesheet('Office','fnafpicture/Office.png',{frameWidth: 1200,frameHeight:500});
            this.load.spritesheet('freddySing','fnafpicture/freddySing.png',{frameWidth: 200,frameHeight:200});
            this.load.image('rdoor','fnafpicture/rdoor.png');
            this.load.image('llighton','fnafpicture/llighton.png');
            this.load.image('bonniellighton','fnafpicture/bonniellighton.png');
            this.load.image('springtrapllighton','fnafpicture/springtrapllighton.png');
            this.load.image('springtraprlighton','fnafpicture/springtraprlighton.png');
            this.load.image('chicallighton','fnafpicture/chicallighton.png');
            this.load.image('button','fnafpicture/button.png');
            this.load.image('button2','fnafpicture/button2.png');
            this.load.image('buttonr','fnafpicture/buttonr.png');
            this.load.image('button2r','fnafpicture/button2r.png');
            this.load.image('mbutton', 'fnafpicture/muteb.png');
            this.load.image('camera','fnafpicture/cambutton.png');
            this.load.image('gusage','fnafpicture/greenusage.png');
            this.load.image('yusage','fnafpicture/yellowusage.png');
            this.load.image('rusage','fnafpicture/redusage.png');
            this.load.audio('doormove', 'audio/doormove.mp3');
            this.load.audio('powerOut', 'audio/powerOut.mp3');
            this.load.audio('windowscare', 'audio/windowscare.mp3');
            this.load.audio('lighttrigger', 'audio/lighttrigger.mp3');
            this.load.audio('officenoise', 'audio/officenoise.mp3');
            this.load.audio('cameranoise', 'audio/cameranoise.mp3');
            this.load.audio('ambient1', 'audio/ambient1.mp3');
            this.load.audio('phonecall', 'audio/phonecall1.mp3');
            this.load.audio('phonecall2', 'audio/phonecall2.mp3');
            this.load.audio('phonecall3', 'audio/phonecall3.mp3');
            this.load.audio('phonecall4', 'audio/phonecall4.mp3');
            this.load.audio('phonecall5', 'audio/phonecall5.mp3');
            this.load.audio('phonecall8', 'audio/phonecall8.mp3');
            this.load.audio('robotscream', 'audio/robotscream.mp3');
            this.load.audio('springtrapScream', 'audio/springtrapScream.mp3');
            this.load.audio('foxyKnock', 'audio/foxyKnock.mp3');
            this.load.audio('freddySong', 'audio/freddySong.mp3');
            this.load.audio('freddyLaugh1', 'audio/freddyLaugh1.mp3');
            this.load.audio('freddyLaugh2', 'audio/freddyLaugh2.mp3');
            this.load.audio('freddyLaugh3', 'audio/freddyLaugh3.mp3');
        }
        create(){
            var scene = this;
            if(gameState.night == 1){
                gameState.phonecall = this.sound.add('phonecall');
                gameState.phonecall.play();
                bonniecooldown = 15000;
                gameState.bonnie.active = true;
                chicacooldown = 19000;
                gameState.chica.active = true;
                gameState.springtrap.active = false;
            }else if (gameState.night == 2){
                gameState.phonecall2 = this.sound.add('phonecall2');
                gameState.phonecall2.play();
                bonniecooldown = 5000;
                gameState.bonnie.active = true;
                bonniePOS = 2;
                chicacooldown = 15000;
                gameState.chica.active = true;
                foxycooldown = 3000;
                gameState.foxy.active = true;
            }else if (gameState.night == 3){
                gameState.phonecall3 = this.sound.add('phonecall3');
                gameState.phonecall3.play();
                bonniecooldown = 2500;
                gameState.bonnie.active = true;
                chicacooldown = 2500;
                gameState.chica.active = true;
                foxycooldown = 3000;
                gameState.foxy.active = true;
                freddycooldown = Math.ceil(Math.random()*2000)+15000;
                gameState.freddy.active = true;
            }else if (gameState.night == 4){
                gameState.phonecall4 = this.sound.add('phonecall4');
                gameState.phonecall4.play();
                bonniecooldown = Math.ceil(Math.random()*1000)+500;
                gameState.bonnie.active = true;
                chicacooldown = Math.ceil(Math.random()*1000)+500;
                gameState.chica.active = true;
                foxycooldown = 3000;
                gameState.foxy.active = true;
                freddycooldown = Math.ceil(Math.random()*1000)+1000;
                gameState.freddy.active = true;
            }else if (gameState.night == 5){
                gameState.springtrap.active = false;
                gameState.phonecall5 = this.sound.add('phonecall5');
                gameState.phonecall5.play();
                bonniecooldown = Math.ceil(Math.random()*800)+500;
                gameState.bonnie.active = true;
                chicacooldown = Math.ceil(Math.random()*800)+500;
                gameState.chica.active = true;
                foxycooldown = 1000;
                gameState.foxy.active = true;
                freddycooldown = Math.ceil(Math.random()*1000)+800;
                gameState.freddy.active = true;
            }else if (gameState.night == 8){
                gameState.phonecall8 = this.sound.add('phonecall8');
                gameState.phonecall8.play();
                gameState.bonnie.active = false;
                gameState.chica.active = false;
                gameState.foxy.active = false;
                gameState.freddy.active = false;
                gameState.springtrap.active = true;
                freddyPOS = 100;
                bonniePOS = 100;
                chicaPOS = 100;
                foxyPOS = 0;
                springtrapPOS = 5;
                springtrapcooldown = 1000;
            }
            gameState.rdoor = this.physics.add.group();
            gameState.ldoor = this.physics.add.group();
            this.scene.launch('camera');
            this.scene.bringToTop('Night1');
            function powerLevelCheck(scene){
                if(powerlevel == 1){
                    if(gameState.gusage1){
                        gameState.gusage1.destroy();
                    }
                    if(gameState.gusage2){
                        gameState.gusage2.destroy();
                    }
                    if(gameState.gusage3){
                        gameState.gusage3.destroy();
                    }
                } 
                else if(powerlevel == 2){
                    if(gameState.gusage1){
                        gameState.gusage1.destroy();
                    }
                    gameState.gusage1 = scene.add.sprite(130,window.innerHeight-60,'gusage').setOrigin(0,0);
                    if(gameState.gusage2){
                        gameState.gusage2.destroy();
                    }
                    if(gameState.gusage3){
                        gameState.gusage3.destroy();
                    }
                } 
                else if(powerlevel == 3){
                    if(gameState.gusage2){
                        gameState.gusage2.destroy();
                    }
                    gameState.gusage2 = scene.add.sprite(160,window.innerHeight-60,'yusage').setOrigin(0,0);
                    if(gameState.gusage3){
                        gameState.gusage3.destroy();
                    }
                } 
                else if(powerlevel == 4){
                    if(gameState.gusage3){
                        gameState.gusage3.destroy();
                    }
                    gameState.gusage3 = scene.add.sprite(190,window.innerHeight-60,'rusage').setOrigin(0,0);
                }
            };
            
            
            
            
            
            
            gameState.bonnieMovement = function(scene){
                if(gameState.bonnie.active == true){
                    bonniecooldown -= 1;
                    if(bonniecooldown <= 0){
                        if(gameState.night == 1){
                           bonniecooldown = Math.ceil(Math.random()*1000)+3500; 
                        }else if(gameState.night == 2){
                           bonniecooldown = Math.ceil(Math.random()*1000)+3500; 
                        }else if(gameState.night == 3){
                           bonniecooldown = Math.ceil(Math.random()*2000)+1500; 
                        }else if(gameState.night == 4){
                           bonniecooldown = Math.ceil(Math.random()*2000)+1000; 
                        }
                        else if(gameState.night == 5){
                           bonniecooldown = Math.ceil(Math.random()*1000)+800; 
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
                            bonniecooldown = Math.ceil(Math.random()*2000)+700;
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
                                gameState.random = Math.ceil(Math.random()*3);
                                if(gameState.random == 1){
                                    bonniePOS = 6; 
                                }
                                else if(gameState.random == 2){
                                    bonniePOS = 5; 
                                }
                                else if(gameState.random == 3){
                                    bonniePOS = 3; 
                                }
                            }
                            else{
                                scene.scene.pause('camera');
                                scene.scene.bringToTop('Night1');
                                gameState.robotscream.play();
                                cameraOn = false;
                                if(llightOn == true){
                                    llightSprite.destroy();
                                }
                                gameState.jumpscaresprite = scene.add.sprite(0,0,'bonnieJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                                gameState.jumpscaresprite.anims.play('bonnieJS',true);
                                gameState.officenoise.pause();
                                if(gameState.night == 1){
                                    gameState.phonecall.setMute(true);
                                }else if(gameState.night == 2){
                                    gameState.phonecall2.setMute(true);
                                }else if(gameState.night == 3){
                                    gameState.phonecall3.setMute(true);
                                }else if(gameState.night == 4){
                                    gameState.phonecall4.setMute(true);
                                }else if(gameState.night == 5){
                                    gameState.phonecall5.setMute(true);
                                }
                                gameState.lighttrigger.pause();
                                gameState.ambient1.pause();
                                gameState.doormove.pause();
                                scene.time.addEvent({
                                    delay: 1500,
                                    callback: ()=>{
                                        gameState.robotscream.pause();
                                        scene.scene.stop('Night1');
                                        scene.scene.stop('camera');
                                        reset();
                                        scene.scene.start('gameOver');
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            }
                        }
                    }
                }
            }
            
            
            
            
            
            
            
            gameState.chicaMovement = function(scene){
                if(gameState.chica.active == true){
                    chicacooldown -= 1;
                    if(chicacooldown <= 0){
                        if(gameState.night == 1){
                           chicacooldown = Math.ceil(Math.random()*500)+2100; 
                        }
                        else if(gameState.night == 2){
                           chicacooldown = Math.ceil(Math.random()*1000)+2200;  
                        }else if(gameState.night == 3){
                           chicacooldown = Math.ceil(Math.random()*1000)+1800;  
                        }else if(gameState.night == 4){
                           chicacooldown = Math.ceil(Math.random()*1000)+1400;  
                        }else if(gameState.night == 5){
                           chicacooldown = Math.ceil(Math.random()*800)+1000;  
                        }
                        if(chicaPOS == 7){
                            chicaPOS = 6;
                        }
                        else if(chicaPOS == 6){
                            gameState.random = Math.ceil(Math.random()*4);
                            if(gameState.random == 1){
                                chicaPOS = 8; 
                            }
                            else if(gameState.random == 2){
                                chicaPOS = 9; 
                            }
                            else if(gameState.random == 3|| gameState.random == 4){
                                chicaPOS = 10; 
                            }
                        }
                        else if(chicaPOS == 8){
                            gameState.random = Math.ceil(Math.random()*3);
                            if(gameState.random == 1){
                                chicaPOS = 6; 
                            }
                            else if(gameState.random == 2){
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
                            chicacooldown = Math.ceil(Math.random()*2000)+700;
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
                                gameState.random = Math.ceil(Math.random()*4);
                                if(gameState.random == 1){
                                    chicaPOS = 7; 
                                }
                                else if(gameState.random == 2){
                                    chicaPOS = 6; 
                                }else if(gameState.random == 3){
                                    chicaPOS = 8; 
                                }else if(gameState.random == 4){
                                    chicaPOS = 9; 
                                }
                            }
                            else{
                                scene.scene.pause('camera');
                                scene.scene.bringToTop('Night1');
                                gameState.robotscream.play();
                                cameraOn = false;
                                if(rlightOn == true){
                                    rlightSprite.destroy();
                                }
                                gameState.jumpscaresprite = scene.add.sprite(0,0,'chicaJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                                gameState.jumpscaresprite.anims.play('chicaJS',true);
                                gameState.officenoise.pause();
                                if(gameState.night == 1){
                                    gameState.phonecall.setMute(true);
                                }else if(gameState.night == 2){
                                    gameState.phonecall2.setMute(true);
                                }else if(gameState.night == 3){
                                    gameState.phonecall3.setMute(true);
                                }else if(gameState.night == 4){
                                    gameState.phonecall4.setMute(true);
                                }else if(gameState.night == 5){
                                    gameState.phonecall5.setMute(true);
                                }
                                gameState.lighttrigger.pause();
                                gameState.ambient1.pause();
                                gameState.doormove.pause();
                                scene.time.addEvent({
                                    delay: 1500,
                                    callback: ()=>{
                                        gameState.robotscream.pause();
                                        scene.scene.stop('Night1');
                                        scene.scene.stop('camera');
                                        reset();
                                        scene.scene.start('gameOver');
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            }
                        }
                    }
                }
            }
            
            
            
            
            
            gameState.freddyMovement = function(scene){
                if(gameState.freddy.active == true){
                    freddycooldown -= 1;
                    if(freddycooldown <= 0){
                        var randsound = Math.ceil(Math.random()*5);
                        if(randsound == 1){
                            gameState.freddyLaugh1.play();
                        }else if(randsound == 2){
                            gameState.freddyLaugh2.play();
                        }else if(randsound == 3){
                            gameState.freddyLaugh3.play();
                        }
                        if(gameState.night == 1){
                           freddycooldown = 10000000; 
                        }
                        else if(gameState.night == 2){
                           freddycooldown = 10000000000;  
                        }else if(gameState.night == 3){
                           freddycooldown = Math.ceil(Math.random()*2200)+1200;  
                        }else if(gameState.night == 4){
                           freddycooldown = Math.ceil(Math.random()*1300)+1200;  
                        }else if(gameState.night == 5){
                           freddycooldown = Math.ceil(Math.random()*1500)+800;  
                        }
                        if(freddyPOS == 7){
                            freddyPOS = 6;
                        }
                        else if(freddyPOS == 6){
                            gameState.random = Math.ceil(Math.random()*4);
                            if(gameState.random == 1){
                                freddyPOS = 8; 
                            }
                            else if(gameState.random > 1){
                                freddyPOS = 10; 
                            }
                        }
                        else if(freddyPOS == 8){
                            gameState.random = Math.ceil(Math.random()*3);
                            if(gameState.random == 1){
                                freddyPOS = 6; 
                            }
                            else if(gameState.random == 2){
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
                        else if(freddyPOS == 10){
                            freddyPOS = 11;
                        }
                        else if(freddyPOS == 11){
                            if(rdoorOpen == false && cameraOn == false){
                                gameState.random = Math.ceil(Math.random()*4);
                                if(gameState.random == 1){
                                    freddyPOS = 8; 
                                }
                                else if(gameState.random == 2){
                                    freddyPOS = 6; 
                                }else if(gameState.random == 3){
                                    freddyPOS = 10; 
                                }else if(gameState.random == 4){
                                    freddyPOS = 11; 
                                }
                            }
                            else{
                                scene.scene.pause('camera');
                                scene.scene.bringToTop('Night1');
                                gameState.robotscream.play();
                                cameraOn = false;
                                if(rlightOn == true){
                                    rlightSprite.destroy();
                                }
                                gameState.jumpscaresprite = scene.add.sprite(0,0,'freddy2Jumpscare').setOrigin(0,0).setDepth(4).setScale((window.innerHeight-50)/50);
                                gameState.jumpscaresprite.anims.play('freddy2JS',true);
                                gameState.officenoise.pause();
                                if(gameState.night == 1){
                                    gameState.phonecall.setMute(true);
                                }else if(gameState.night == 2){
                                    gameState.phonecall2.setMute(true);
                                }else if(gameState.night == 3){
                                    gameState.phonecall3.setMute(true);
                                }else if(gameState.night == 4){
                                    gameState.phonecall4.setMute(true);
                                }else if(gameState.night == 5){
                                    gameState.phonecall5.setMute(true);
                                }
                                gameState.lighttrigger.pause();
                                gameState.ambient1.pause();
                                gameState.doormove.pause();
                                scene.time.addEvent({
                                    delay: 800,
                                    callback: ()=>{
                                        gameState.robotscream.pause();
                                        scene.scene.stop('Night1');
                                        scene.scene.stop('camera');
                                        reset();
                                        scene.scene.start('gameOver');
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            }
                        }
                    }
                }
            }
            
            
            
            
            
            
            gameState.foxyMovement = function(scene){
                if(gameState.foxy.active == true){
                    if(foxlocked == false){
                        foxycooldown -= 1;
                    }
                    if(foxycooldown <= 0){
                        if(gameState.night == 1){
                            foxycooldown = 20000;
                        }else if(gameState.night == 2){
                            foxycooldown = 1800;
                        }else if(gameState.night == 3){
                            foxycooldown = 1400;
                        }else if(gameState.night == 4){
                            foxycooldown = 1300;
                        }else if(gameState.night == 5){
                            foxycooldown = 1200;
                        }
                        else if(gameState.night == 5){
                            foxycooldown = 1000;
                        }
                        var rand = Math.ceil(Math.random()*20);
                        if(camPOS == 4){
                            foxlocked = true;
                            scene.time.addEvent({
                                delay: Math.ceil(Math.random()*10200)+800,
                                callback: ()=>{
                                    foxlocked = false;
                                },
                                startAt: 0,
                                timeScale: 1,
                            });
                        }
                        else if(rand <= 4*gameState.night || foxyPOS == 0){
                            if(foxyPOS == 3 && camPOS != 4 || cameraOn == false && foxyPOS == 3){
                                foxyPOS = 2;
                            }
                            else if(foxyPOS == 2 && camPOS != 4 || cameraOn == false && foxyPOS == 2){
                                foxyPOS = 1;
                            }
                            else if(foxyPOS == 1 && camPOS != 4 && camPOS != 2 || cameraOn == false && foxyPOS == 1){
                                foxyPOS = 0;
                                foxycooldown = 900;
                            }
                            else if(foxyPOS == 0){
                                if(ldoorOpen == false){
                                    foxyPOS = 3;
                                    checked = 0;
                                    gameState.foxyKnock.play();
                                    power -= 1;
                                }
                                else{
                                    scene.scene.pause('camera');
                                    scene.scene.bringToTop('Night1');
                                    gameState.robotscream.play();
                                    cameraOn = false;
                                    if(llightOn == true){
                                        llightSprite.destroy();
                                    }
                                    gameState.jumpscaresprite = scene.add.sprite(100,60,'foxyJumpscare').setOrigin(0,0).setDepth(4).setScale(350/150);
                                    gameState.jumpscaresprite.anims.play('foxyJS',true);
                                    gameState.officenoise.pause();
                                    if(gameState.night == 1){
                                        gameState.phonecall.setMute(true);
                                    }else if(gameState.night == 2){
                                        gameState.phonecall2.setMute(true);
                                    }else if(gameState.night == 3){
                                        gameState.phonecall3.setMute(true);
                                    }else if(gameState.night == 4){
                                        gameState.phonecall4.setMute(true);
                                    }else if(gameState.night == 5){
                                        gameState.phonecall5.setMute(true);
                                    }
                                    gameState.lighttrigger.pause();
                                    gameState.ambient1.pause();
                                    gameState.doormove.pause();
                                    scene.time.addEvent({
                                        delay: 1200,
                                        callback: ()=>{
                                            gameState.robotscream.pause();
                                            scene.scene.stop('Night1');
                                            scene.scene.stop('camera');
                                            reset();
                                            scene.scene.start('gameOver');
                                        },
                                        startAt: 0,
                                        timeScale: 1,
                                    });
                                }
                            }
                        }
                    }
                }
            }
            
            
            
            
            
            gameState.springtrapMovement = function(scene){
                if(gameState.springtrap.active == true){
                    springtrapcooldown -= 1;
                    if(springtrapcooldown <= 0){
                        springtrapcooldown = Math.ceil(Math.random()*500)+500; 
                        
                        if(springtrapPOS == 5){
                            gameState.random = Math.ceil(Math.random()*2);
                            if(gameState.random == 1){
                                springtrapPOS = 10; 
                            }
                            else if(gameState.random == 2){
                                springtrapPOS = 2; 
                            }
                        }
                        else if(springtrapPOS == 10){
                            gameState.random = Math.ceil(Math.random()*2);
                            if(gameState.random == 1){
                                springtrapPOS = 11; 
                            }
                            else if(gameState.random == 2){
                                if(rlightOn == true){
                                    rlightSprite.destroy();
                                    gameState.lighttrigger.pause();
                                    rlightOn = false;
                                }
                                springtrapPOS = 0; 
                            }
                        }
                        else if(springtrapPOS == 2){
                            gameState.random = Math.ceil(Math.random()*2);
                            if(gameState.random == 1){
                                if(llightOn == true){
                                    llightSprite.destroy();
                                    gameState.lighttrigger.pause();
                                    llightOn = false;
                                }
                                springtrapPOS = 100; 
                            }
                            else if(gameState.random == 2){
                                springtrapPOS = 10; 
                            }
                        }
                        else if(springtrapPOS == 11){
                            if(rdoorOpen == true){
                                scene.scene.pause('camera');
                                scene.scene.bringToTop('Night1');
                                gameState.springtrapScream.play();
                                cameraOn = false;
                                if(llightOn == true){
                                    llightSprite.destroy();
                                }
                                gameState.jumpscaresprite = scene.add.sprite(200,0,'springtrapJumpscare').setOrigin(0,0).setDepth(4).setScale((window.innerHeight-100)/100);
                                gameState.jumpscaresprite.anims.play('springtrapJS',true);
                                gameState.officenoise.pause();
                                if(gameState.night == 1){
                                    gameState.phonecall.setMute(true);
                                }else if(gameState.night == 2){
                                    gameState.phonecall2.setMute(true);
                                }else if(gameState.night == 3){
                                    gameState.phonecall3.setMute(true);
                                }else if(gameState.night == 4){
                                    gameState.phonecall4.setMute(true);
                                }else if(gameState.night == 5){
                                    gameState.phonecall5.setMute(true);
                                }else if(gameState.night == 8){
                                    gameState.phonecall8.setMute(true);
                                }
                                gameState.lighttrigger.pause();
                                gameState.ambient1.pause();
                                gameState.doormove.pause();
                                scene.time.addEvent({
                                    delay: 2000,
                                    callback: ()=>{
                                        gameState.springtrapScream.pause();
                                        scene.scene.stop('Night1');
                                        scene.scene.stop('camera');
                                        reset();
                                        scene.scene.start('gameOver');
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            }else {
                                gameState.random = Math.ceil(Math.random()*2);
                                if(gameState.random == 1){
                                    springtrapPOS = 10; 
                                }
                                else if(gameState.random == 2){
                                    springtrapPOS = 2; 
                                }
                            }
                        }
                        else if(springtrapPOS == 0 || springtrapPOS == 100){
                            if(ldoorOpen == false && springtrapPOS == 100){
                                if(llightOn == true && springtrapPOS == 100){
                                    powerlevel -= 1;
                                    llightSprite.destroy();
                                    llightOn = false;
                                }
                                if(rlightOn == true && springtrapPOS == 0){
                                    powerlevel -= 1;
                                    rlightSprite.destroy();
                                    rlightOn = false;
                                }
                                gameState.lighttrigger.pause();
                                gameState.random = Math.ceil(Math.random()*2);
                                if(gameState.random == 1){
                                    springtrapPOS = 10; 
                                }
                                else if(gameState.random == 2){
                                    springtrapPOS = 2; 
                                }
                            }
                            else if(rdoorOpen == false && springtrapPOS == 0){
                                if(llightOn == true && springtrapPOS == 100){
                                    powerlevel -= 1;
                                    llightSprite.destroy();
                                    llightOn = false;
                                }
                                if(rlightOn == true && springtrapPOS == 0){
                                    powerlevel -= 1;
                                    rlightSprite.destroy();
                                    rlightOn = false;
                                }
                                gameState.lighttrigger.pause();
                                gameState.random = Math.ceil(Math.random()*2);
                                if(gameState.random == 1){
                                    springtrapPOS = 10; 
                                }
                                else if(gameState.random == 2){
                                    springtrapPOS = 2; 
                                }
                            }
                            
                            else{
                                scene.scene.pause('camera');
                                scene.scene.bringToTop('Night1');
                                gameState.springtrapScream.play();
                                cameraOn = false;
                                if(llightOn == true){
                                    llightSprite.destroy();
                                    llightOn = false;
                                }
                                gameState.jumpscaresprite = scene.add.sprite(200,0,'springtrapJumpscare').setOrigin(0,0).setDepth(4).setScale((window.innerHeight-100)/100);
                                gameState.jumpscaresprite.anims.play('springtrapJS',true);
                                gameState.officenoise.pause();
                                if(gameState.night == 1){
                                    gameState.phonecall.setMute(true);
                                }else if(gameState.night == 2){
                                    gameState.phonecall2.setMute(true);
                                }else if(gameState.night == 3){
                                    gameState.phonecall3.setMute(true);
                                }else if(gameState.night == 4){
                                    gameState.phonecall4.setMute(true);
                                }else if(gameState.night == 5){
                                    gameState.phonecall5.setMute(true);
                                }else if(gameState.night == 8){
                                    gameState.phonecall8.setMute(true);
                                }
                                gameState.lighttrigger.pause();
                                gameState.ambient1.pause();
                                gameState.doormove.pause();
                                scene.time.addEvent({
                                    delay: 2000,
                                    callback: ()=>{
                                        gameState.springtrapScream.pause();
                                        scene.scene.stop('Night1');
                                        scene.scene.stop('camera');
                                        reset();
                                        scene.scene.start('gameOver');
                                    },
                                    startAt: 0,
                                    timeScale: 1,
                                });
                            }
                        }
                    }
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
                frames:this.anims.generateFrameNames('foxyJumpscare',{start: 0,end: 11})
            });
            this.anims.create({
                key: 'freddy2JS',
                frameRate: 25,
                frames:this.anims.generateFrameNames('freddy2Jumpscare',{start: 0,end: 17})
            });
            this.anims.create({
                key: 'springtrapJS',
                frameRate: 22,
                frames:this.anims.generateFrameNames('springtrapJumpscare',{start: 0,end: 31})
            });
            this.anims.create({
                key: 'officePower',
                frameRate: 24,
                repeat: -1,
                frames:this.anims.generateFrameNames('Office',{start: 0,end: 1})
            });
            this.anims.create({
                key: 'officeNoPower',
                frameRate: 24,
                frames:this.anims.generateFrameNames('Office',{start: 2,end: 2})
            });
            this.anims.create({
                key: 'officeNoPowe2r',
                frameRate: 24,
                frames:this.anims.generateFrameNames('Office',{start: 3,end: 3})
            });
            this.anims.create({
                key: 'sing',
                frameRate: 8,
                repeat: -1,
                frames:this.anims.generateFrameNames('freddySing',{start: 0,end: 6})
            });
            //CAMCHANGE
            var loopSound = {
                loop: true,
                volume: 0.4
            }
            var loopSound2 = {
                loop: true,
                volume: 1.5
            }
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.officeSprite = this.add.sprite(0,0,'Office').setOrigin(0,0).setDepth(2);
            gameState.officeSprite.anims.play('officePower',true);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            
            //audio
            gameState.doormove = this.sound.add('doormove');
            gameState.windowscare = this.sound.add('windowscare');
            gameState.lighttrigger = this.sound.add('lighttrigger');
            gameState.cameranoise = this.sound.add('cameranoise');
            gameState.officenoise = this.sound.add('officenoise');
            gameState.officenoise.play(loopSound);
            gameState.powerOut = this.sound.add('powerOut');
            gameState.ambient1 = this.sound.add('ambient1');
            gameState.ambient1.play(loopSound2);
            gameState.robotscream = this.sound.add('robotscream');
            gameState.springtrapScream = this.sound.add('springtrapScream');
            gameState.foxyKnock = this.sound.add('foxyKnock');
            gameState.freddySong = this.sound.add('freddySong');
            gameState.freddyLaugh1 = this.sound.add('freddyLaugh1');
            gameState.freddyLaugh2 = this.sound.add('freddyLaugh2');
            gameState.freddyLaugh3 = this.sound.add('freddyLaugh3');
            //Right Door
            rdoorSprite = gameState.rdoor.create(990,63,'ldoor').setOrigin(0,0).setFlipX(true).setDepth(2);
            gameState.ldoorButton = this.add.sprite(20,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.llightButton = this.add.sprite(20,230,'button2').setOrigin(0,0).setInteractive().setDepth(2);
            //Left Door
            ldoorSprite = gameState.ldoor.create(89,63,'ldoor').setOrigin(0,0).setDepth(2);
            gameState.rdoorButton = this.add.sprite(1130,150,'buttonr').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.rlightButton = this.add.sprite(1130,230,'button2r').setOrigin(0,0).setInteractive().setDepth(2);
            //Usage colors
            gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);;
            gameState.yusage;
            gameState.rusage;
            //texts
            gameState.usagetext = this.add.text(10, window.innerHeight-50, 'Usage: ', { fontSize: '20px', fill: '#FFFFFF' });
            gameState.AMtext = this.add.text(window.innerWidth - 70, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
            gameState.nighttext = this.add.text(window.innerWidth - 75, 50, `Night ${gameState.night}`, { fontSize: '15px', fill: '#FFFFFF' }).setDepth(4);
            gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' }).setDepth(4);
            //buttons
            gameState.camera = this.add.sprite(window.innerWidth/2-100,window.innerHeight-50,'camera').setInteractive();
            gameState.muteb = this.add.sprite(window.innerWidth-200,window.innerHeight-50,'mbutton').setInteractive();
            gameState.muteb.on('pointerup', () => {
                if(gameState.night == 1){
                    gameState.phonecall.setMute(true);
                }else if(gameState.night == 2){
                    gameState.phonecall2.setMute(true);
                }else if(gameState.night == 3){
                    gameState.phonecall3.setMute(true);
                }else if(gameState.night == 4){
                    gameState.phonecall4.setMute(true);
                }else if(gameState.night == 5){
                    gameState.phonecall5.setMute(true);
                }else if(gameState.night == 8){
                    gameState.phonecall8.setMute(true);
                }
                gameState.muteb.destroy();
            });
            gameState.ldoorButton.on('pointerup', () => {   
                if(power > 0 && cameraOn === false){
                    gameState.doormove.play();
                    ldoorOpen = !(ldoorOpen);
                    if(ldoorOpen === false){
                        powerlevel += 1;
                        powerLevelCheck(this);
                        ldoorSprite.anims.play('ldoorclose',true);
                    }
                    else {
                        powerlevel -= 1;
                        powerLevelCheck(this);
                        ldoorSprite.anims.play('ldooropen',true);
                    }
                }
            });
            gameState.llightButton.on('pointerup', () => {
                if(power > 0 && cameraOn === false){
                    llightOn = !(llightOn);
                    if(rlightOn === true){
                        rlightOn = false;
                        rlightSprite.destroy();
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                    }
                    if(llightOn === false){
                        gameState.lighttrigger.pause();
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                        llightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        powerlevel += 1;
                        if(bonniePOS == 0){
                            if(ldoorOpen == true){
                                gameState.windowscare.play();
                            }
                            llightSprite = this.add.image(0,0,'bonniellighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                        if(springtrapPOS == 100){
                            if(ldoorOpen == true){
                                
                            }
                            llightSprite = this.add.image(0,0,'springtrapllighton').setOrigin(0,0).setScale(5).setDepth(1);
                        }
                        else {
                            llightSprite = this.add.image(0,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                    }
                }
            });
            gameState.rdoorButton.on('pointerup', () => {
                if(power > 0 && cameraOn === false){
                    gameState.doormove.play();
                    rdoorOpen = !(rdoorOpen);
                    if(rdoorOpen === false){
                        powerlevel += 1;
                        powerLevelCheck(this);
                        rdoorSprite.anims.play('rdoorclose',true);
                    }
                    else {
                        powerlevel -= 1;
                        powerLevelCheck(this);
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
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                    }
                    if(rlightOn === false){
                        gameState.lighttrigger.pause();
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                        rlightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        powerlevel += 1;
                        powerLevelCheck(scene);
                        if(chicaPOS == 0){
                            if(rdoorOpen == true){
                                gameState.windowscare.play();
                            }
                            rlightSprite = this.add.image(600,0,'chicallighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                        if(springtrapPOS == 0){
                            if(rdoorOpen == true){
                                
                            }
                            rlightSprite = this.add.image(600,0,'springtraprlighton').setOrigin(0,0).setScale(5).setDepth(1).setFlipX(true);
                        }
                        else {
                            rlightSprite = this.add.image(600,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                    }
                }
            });
            gameState.camera.on('pointerover', () => {
                if(power > 0){
                    if(llightOn === true){
                        llightOn = false;
                        llightSprite.destroy();
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                    }
                    if(rlightOn === true){
                        rlightOn = false;
                        rlightSprite.destroy();
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                    }
                    cameraOn = !(cameraOn);
                        gameState.cameranoise.play();
                    if(cameraOn === true){
                        powerlevel += 1;
                        powerLevelCheck(scene);
                        this.scene.bringToTop('camera');
                        this.scene.resume('camera');
                        gameState.checkcam(gameState.camscene);
                        gameState.officenoise.pause();
                        gameState.lighttrigger.pause();
                        if(rlightOn === true){
                            rlightSprite.destroy();
                            powerlevel -=1;
                            powerLevelCheck(scene);
                        }
                        else if(llightOn === true){
                            llightSprite.destroy();
                            powerlevel -=1;
                            powerLevelCheck(scene);
                        }
                    }
                    else {
                        powerlevel -= 1;
                        powerLevelCheck(scene);
                        this.scene.bringToTop('Night1');
                        this.scene.pause('camera');
                        gameState.officenoise.resume();
                    }
                }
            });
            //timer
            var timer = this.time.addEvent({
                delay: 90000,
                callback: ()=>{
                    if(AM === 12){
                        AM = 1;
                    }
                    else {
                        AM += 1;
                        if(AM === 6){
                            gameState.officenoise.setMute(true);
                            gameState.ambient1.setMute(true);
                            gameState.doormove.setMute(true);
                            gameState.lighttrigger.setMute(true);
                            if(gameState.night == 1){
                                gameState.phonecall.setMute(true);
                            }else if(gameState.night == 2){
                                gameState.phonecall2.setMute(true);
                            }else if(gameState.night == 3){
                                gameState.phonecall3.setMute(true);
                            }else if(gameState.night == 4){
                                gameState.phonecall4.setMute(true);
                            }else if(gameState.night == 5){
                                gameState.phonecall5.setMute(true);
                            }
                            gameState.powerTracker.destroy();
                            this.scene.stop(`Night1`);
                            this.scene.stop('camera');
                            gameState.night += 1;
                            gameState.save();
                            reset();
			                this.scene.start('SIXAM');
                        }
                    }
                    gameState.AMtext.setText(`${AM} AM`);
                },
                repeat: 5,
                startAt: 0,
                timeScale: 1,
            });
            
            if(gameState.night == 1){
                powerlimit = 600;
            }else if(gameState.night == 2){
                powerlimit = 516;
            }else if(gameState.night == 3){
                powerlimit = 504;
            }else if(gameState.night == 4){
                powerlimit = 480;
            }else if(gameState.night == 5){
                powerlimit = 460;
            }
            else if(gameState.night == 8){
                powerlimit = 450;
            }
            time = powerlimit;
            gameState.powerTracker = this.time.addEvent({
                delay: 1,
                callback: ()=>{
                    time -= powerlevel;
                    if(power > 0){
                       if(time <= 0){
                           time = powerlimit; 
                           power -= 1;
                           gameState.powertext.setText(`Power left:${power}%`);
                       }
                    } else {
                        bonniePOS = 7;
                        foxyPOS = 3;
                        freddyPOS = 7;
                        chicaPOS = 7;
                        bonniecooldown = 1000000;
                        chicacooldown = 10000000;
                        freddycooldown = 1000000;
                        foxycooldown = 1000000;
                        gameState.officeSprite.anims.play('officeNoPower',true);
                        gameState.powerOut.play();
                        gameState.gusage.destroy();
                        if(gameState.gusage1){
                            gameState.gusage1.destroy();
                        }
                        if(gameState.gusage2){
                            gameState.gusage2.destroy();
                        }
                        if(gameState.gusage3){
                            gameState.gusage3.destroy();
                        }
                        if(cameraOn == true){
                            this.scene.bringToTop('Night1');
                            this.scene.pause('camera');
                        }
                        if(gameState.night == 1){
                            gameState.phonecall.setMute(true);
                        }else if(gameState.night == 2){
                            gameState.phonecall2.setMute(true);
                        }else if(gameState.night == 3){
                            gameState.phonecall3.setMute(true);
                        }else if(gameState.night == 4){
                            gameState.phonecall4.setMute(true);
                        }else if(gameState.night == 5){
                            gameState.phonecall5.setMute(true);
                        }
                        gameState.ambient1.setMute(true);
                        gameState.officenoise.setMute(true);
                        gameState.AMtext.setText("");
                        gameState.powertext.setText("");
                        gameState.nighttext.setText("");
                        gameState.usagetext.setText("");
                        gameState.lighttrigger.setMute(true);
                        gameState.camera.destroy();
                        gameState.ldoorButton.destroy();
                        gameState.llightButton.destroy();
                        gameState.rlightButton.destroy();
                        gameState.rdoorButton.destroy();
                        gameState.powerTracker.destroy();
                        if(ldoorOpen == false){
                            gameState.doormove.play();
                            ldoorSprite.anims.play('ldooropen',true);
                        }
                        if(rdoorOpen == false){
                            gameState.doormove.play();
                            rdoorSprite.anims.play('rdooropen',true);
                        }
                        if(llightOn == true){
                            llightSprite.destroy();
                        }
                        if(rlightOn == true){
                            rlightSprite.destroy();
                        }
                        ldoorOpen = true;
                        rdoorOpen = true;
                        llightOn = false;
                        rlightOn = false;
                        if(gameState.night !== 8){
                            scene.time.addEvent({
                                delay: Math.ceil(Math.random()*18000)+2000,
                                callback: ()=>{
                                    var fred = scene.add.sprite(50,100,'freddySing').setOrigin(0,0).setDepth(0).setScale(1);
                                    fred.anims.play('sing',true);
                                    gameState.freddySong.play();
                                    scene.time.addEvent({
                                        delay: Math.ceil(Math.random()*18000)+2000,
                                        callback: ()=>{
                                            gameState.freddySong.setMute(true);
                                            fred.destroy();
                                            gameState.officeSprite.anims.play('officeNoPower2',true);
                                            ldoorSprite.destroy();
                                            rdoorSprite.destroy();
                                            scene.time.addEvent({
                                                delay: Math.ceil(Math.random()*3000)+2000,
                                                callback: ()=>{
                                                    var fred2 = scene.add.sprite(100,0,'freddy2Jumpscare').setOrigin(0,0).setDepth(4).setScale((window.innerHeight-50)/50);
                                                    fred2.anims.play('freddy2JS',true);
                                                    gameState.robotscream.play();
                                                    scene.time.addEvent({
                                                        delay: 800,
                                                        callback: ()=>{
                                                            gameState.robotscream.setMute(true);
                                                            scene.scene.stop('Night1');
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
                        }
                    }
                },
                loop: true,
                startAt: 0,
                timeScale: 1,
            });
            this.input.on('pointerup',()=>{
                
            });
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
                    if(foxyPOS == 0){
                        if(checked == 0 && gameState.night !== 8){
                            gameState.camerabg = scene.add.sprite(0,0,'foxyCAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                            foxycooldown = 170;
                            gameState.foxyRun.play();
                            gameState.camerabg.anims.play('foxyRun',true);
                        }else {
                            if(bonniePOS == 2){
                                gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Ac').setOrigin(0,0).setDepth(0).setScale(3.333);
                            }
                            else if (bonniePOS !== 2){
                                gameState.camerabg = scene.add.sprite(0,0,'CAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                            }
                        }
                        checked ++;
                    }
                    else if(bonniePOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Ac').setOrigin(0,0).setDepth(0).setScale(3.333);
                    }
                    else if (bonniePOS !== 2 ){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    if(springtrapPOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'springtrapCAM2Ac').setOrigin(0,0).setDepth(0).setScale(5);
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
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }else if(foxyPOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy1CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }else if(foxyPOS == 1){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy2CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(foxyPOS == 0 || gameState.night == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'foxy3CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 5){
                    if(bonniePOS == 5){
                        if(bonniecooldown < 1000){
                            gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM5cb').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM5ca').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    }
                    else if(bonniePOS !== 5){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    if(springtrapPOS == 5){
                        gameState.camerabg = scene.add.sprite(0,0,'springtrapCAM5c').setOrigin(0,0).setDepth(0).setScale(5);
                    }else if(springtrapPOS !== 5){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 6){
                    if(bonniePOS == 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        if(bonniecooldown < 800){
                            gameState.camerabg = scene.add.sprite(0,0,'bonnie2CAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                        }
                    }
                    else if(bonniePOS !== 6 && chicaPOS == 6 && freddyPOS !== 6){
                        if(chicacooldown < 800){
                            gameState.camerabg = scene.add.sprite(0,0,'chica2CAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                        }
                    }
                    else if(bonniePOS == 6 && chicaPOS == 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 6 && chicaPOS !== 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS == 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'chicafreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS == 6 && chicaPOS !== 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniefreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS == 6 && chicaPOS == 6 && freddyPOS == 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicafreddyCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
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
                    else if(bonniePOS !== 7 && chicaPOS !== 7 && freddyPOS !== 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicafreddyCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS == 7 && freddyPOS == 7){
                        var rand = Math.ceil(Math.random()*50);
                        if(rand == 25){
                            gameState.camerabg = scene.add.sprite(0,0,'CAM1Acb').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'CAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    }
                }
                if(camPOS == 8){
                    if(chicaPOS == 8){
                        if(chicacooldown < 1000){
                            gameState.camerabg = scene.add.sprite(0,0,'chica2CAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    }
                    else if(freddyPOS == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM7c').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(chicaPOS !== 8 && freddyPOS !== 8){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 10){
                    if(chicaPOS == 10){
                        if(chicacooldown < 1000){
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Acb').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Aca').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    }else if(freddyPOS == 10){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM4Ac').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(chicaPOS !== 10){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 11){
                    if(chicaPOS == 11){
                        if(chicacooldown < 1000){
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Bcb').setOrigin(0,0).setDepth(0).setScale(10);
                        }else {
                            gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Bca').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    }
                    else if(freddyPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'freddyCAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 11 && freddyPOS !== 11){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    if(springtrapPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'springtrapCAM4Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                }
            }
            
        }

        update(){
            if(gameState.bonnie.active == true){
                gameState.bonnieMovement(this);
            }
            if(gameState.chica.active == true){
                gameState.chicaMovement(this);
            }
            if(gameState.freddy.active == true){
                gameState.freddyMovement(this);
            }
            if(gameState.foxy.active == true){
                gameState.foxyMovement(this);
            }
            if(gameState.springtrap.active == true){
                gameState.springtrapMovement(this);
            }
            if(power <= 0){
                
            }
        }
    }

