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

    var second = 9;
    var secondcons = 9;

    var powerlevel = 1;

    var camPOS = 1;

    var bonniePOS = 7;  
    var bonniecooldown = 0;
    var chicaPOS = 7;
    var chicacooldown = 0;
    var freddyPOS = 7;
    var freddycooldown = 0;
    var foxyPOS = 4;
    var foxycooldown = 0;

    var deathRunning = false;
    
    function reset(){
        second = 10;
        secondcons = 10;
        powerlevel = 1;
        camPOS = 1;
        AM = 12;
        power = 100;
        cameraOn = false;
        ldoorOpen = true;
        rdoorOpen = true;
        llightOn = false;
        rlightOn = false;
        bonniePOS = 7;
        freddyPOS = 7;
        chicaPOS = 7;
        foxyPOS = 4;
        deathRunning = false;
    }

    class camera extends Phaser.Scene {
        constructor() {
            super({ key: 'camera' })
        }
        preload(){
            
        }
        create(){
            gameState.camsound = this.sound.add('camsound');
            gameState.static = this.sound.add('static');
            gameState.run = this.sound.add('run');
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
            gameState.CAMS2B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 1;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS2A.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 2;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS3.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 3;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1C.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 4;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS5.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 5;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 6;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1A.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 7;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS7.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 8;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS6.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 9;
                gameState.camerabg.destroy();
                gameState.camerabg = this.add.sprite(0,0,'CAM6c').setOrigin(0,0).setDepth(0);
            });
            gameState.CAMS4A.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 10;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS4B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 11;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            this.anims.create({
                key: 'foxyRun',
                frameRate: 15,
                frames:this.anims.generateFrameNames('foxyCAM2Ac',{start: 0,end: 10})
            });
        }
        update(){
            if(bonniecooldown <= 10){
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
        }
    }

    class Night1 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night1' })
        }
        preload(){
            
        }
        create(){
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            gameState.foxyChecked = false;
            bonniecooldown = 15000;
            chicacooldown = 19000;
            foxycooldown = 100000000;
            gameState.bonnieMovement = function(scene){
                bonniecooldown -= 1;
                if(bonniecooldown <= 0){
                    if(gameState.night === 1){
                       bonniecooldown = Math.ceil(Math.random()*500)+2500; 
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
                        bonniecooldown = Math.ceil(Math.random()*500)+700;
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
                            scene.scene.bringToTop('Night1');
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
                                        scene.scene.stop('Night1');
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
                    if(gameState.night === 1){
                       chicacooldown = Math.ceil(Math.random()*500)+2100; 
                    }
                    else if(gameState.night === 2){
                       chicacooldown = 2100; 
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
                    else if(chicaPOS == 10){
                        chicaPOS = 11;
                    }
                    else if(chicaPOS == 11){
                        chicacooldown = Math.ceil(Math.random()*500)+700;
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
                            scene.scene.bringToTop('Night1');
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
                                        scene.scene.stop('Night1');
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
                    foxycooldown = Math.ceil(Math.random()*200)+500; 
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
                            scene.scene.bringToTop('Night1');
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
                                        scene.scene.stop('Night1');
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
                            gameState.knock.play();
                            foxyPOS = 4;
                        }
                    }
                }
            }   
            this.scene.launch('camera');
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
            this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(loopSound);
            gameState.ambient1.play(loopSound2);
            gameState.phonecall.play();
            //Right Door
            rdoorSprite = gameState.rdoor.create(990,63,'ldoor').setOrigin(0,0).setFlipX(true).setDepth(2);
            gameState.ldoorButton = this.add.sprite(20,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.llightButton = this.add.sprite(20,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Left Door
            ldoorSprite = gameState.ldoor.create(89,63,'ldoor').setOrigin(0,0).setDepth(2);
            gameState.rdoorButton = this.add.sprite(1130,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.rlightButton = this.add.sprite(1130,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Usage colors
            gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);;
            gameState.yusage;
            gameState.rusage;
            //texts
            this.add.text(10, window.innerHeight-50, 'Usage: ', { fontSize: '20px', fill: '#FFFFFF' });
            gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
            gameState.nighttext = this.add.text(window.innerWidth - 115, 50, `Night ${gameState.night}`, { fontSize: '15px', fill: '#FFFFFF' }).setDepth(4);
            gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' }).setDepth(4);
            //buttons
            gameState.camera = this.add.sprite(window.innerWidth/2-100,window.innerHeight-50,'camera').setInteractive();
            gameState.muteb = this.add.sprite(window.innerWidth-200,window.innerHeight-50,'mbutton').setInteractive();
            gameState.muteb.on('pointerup', () => {
                gameState.phonecall.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.ldoorButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    gameState.doormove.play();
                    ldoorOpen = !(ldoorOpen);
                    if(ldoorOpen === false){
                        secondcons /= 2;
                        second -= 1;
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
                        secondcons /= 2;
                        powerlevel -= 1;
                    }
                    if(llightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        llightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(bonniePOS == 0){
                            if(ldoorOpen == true){
                                gameState.windowscare.play();
                            }
                            llightSprite = this.add.image(0,0,'bonniellighton').setOrigin(0,0).setScale(10).setDepth(1);
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
                        secondcons /= 2;
                        second += 1;
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
                        secondcons /= 2;
                        powerlevel -= 1;
                    }
                    if(rlightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        rlightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(chicaPOS == 0){
                            if(rdoorOpen == true){
                                gameState.windowscare.play();
                            }
                            rlightSprite = this.add.image(600,0,'chicallighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                        else {
                            rlightSprite = this.add.image(600,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                    }
                }
            });
            gameState.camera.on('pointerover', () => {
                console.log(foxyPOS);
                if(power > 0){
                    cameraOn = !(cameraOn);
                        gameState.cameranoise.play();
                    if(cameraOn === true){
                        secondcons /= 2;
                        second -= 1;
                        powerlevel += 1;
                        console.log(powerlevel);
                        this.scene.bringToTop('camera');
                        this.scene.resume('camera');
                        gameState.officenoise.pause();
                        gameState.lighttrigger.pause();
                        if(rlightOn === true){
                            rlightOn = false;
                            rlightSprite.destroy();
                            powerlevel -=1;
                        }
                        else if(llightOn === true){
                            llightOn = false;
                            llightSprite.destroy();
                            powerlevel -=1;
                        }
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        this.scene.bringToTop('Night1');
                        this.scene.pause('camera');
                        gameState.officenoise.resume();
                    }
                    gameState.checkPowerUsage(this);
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
                            gameState.win6AM(this);
                        }
                    }
                    gameState.AMtext.destroy();
                    gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
                },
                repeat: 5,
                startAt: 0,
                timeScale: 1,
            });
            gameState.secondcounter = this.time.addEvent({
                delay: 1000,
                callback: ()=>{
                    second = second - 1;
                    //console.log(secondcons);
                },
                loop: true,
                startAt: 0,
                timeScale: 1,
            });
            this.input.on('pointerup',()=>{
                gameState.checkPowerUsage(this);
            });
        }

        update(){
            gameState.bonnieMovement(this);
            gameState.chicaMovement(this);
            gameState.foxyMovement(this);
            if(power > 0){
               if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
               }
            }
            else {
                
            }
        }
    }





class Night2 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night2' })
        }
        preload(){
            
        }
        create(){
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            bonniePOS = 3;
            gameState.foxyChecked = false;
            bonniecooldown = Math.ceil(Math.random()*500)+3000;
            chicacooldown = 10000;
            foxycooldown = 14000;
            gameState.bonnieMovement = function(scene){
                bonniecooldown -= 1;
                if(bonniecooldown <= 0){
                    bonniecooldown = Math.ceil(Math.random()*500)+2500; 
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
                        bonniecooldown = Math.ceil(Math.random()*500)+700;
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
                            scene.scene.bringToTop('Night2');
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
                                        scene.scene.stop('Night2');
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
                    chicacooldown = Math.ceil(Math.random()*500)+2300; 
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
                    else if(chicaPOS == 10){
                        chicaPOS = 11;
                    }
                    else if(chicaPOS == 11){
                        chicacooldown = Math.ceil(Math.random()*500)+700;
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
                            scene.scene.bringToTop('Night2');
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
                                        scene.scene.stop('Night2');
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
                    foxycooldown = Math.ceil(Math.random()*1000)+3000; 
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
                            scene.scene.bringToTop('Night2');
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
                                        scene.scene.stop('Night2');
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
                            foxyPOS = 4;
                            gameState.knock.play();
                        }
                    }
                }
            }
            this.scene.launch('camera');
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
            this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(loopSound);
            gameState.ambient1.play(loopSound2);
            gameState.phonecall.play();
            //Right Door
            rdoorSprite = gameState.rdoor.create(990,63,'ldoor').setOrigin(0,0).setFlipX(true).setDepth(2);
            gameState.ldoorButton = this.add.sprite(20,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.llightButton = this.add.sprite(20,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Left Door
            ldoorSprite = gameState.ldoor.create(89,63,'ldoor').setOrigin(0,0).setDepth(2);
            gameState.rdoorButton = this.add.sprite(1130,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.rlightButton = this.add.sprite(1130,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Usage colors
            gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);;
            gameState.yusage;
            gameState.rusage;
            //texts
            this.add.text(10, window.innerHeight-50, 'Usage: ', { fontSize: '20px', fill: '#FFFFFF' });
            gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
            gameState.nighttext = this.add.text(window.innerWidth - 115, 50, `Night ${gameState.night}`, { fontSize: '15px', fill: '#FFFFFF' }).setDepth(4);
            gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' }).setDepth(4);
            //buttons
            gameState.camera = this.add.sprite(window.innerWidth/2-100,window.innerHeight-50,'camera').setInteractive();
            gameState.muteb = this.add.sprite(window.innerWidth-200,window.innerHeight-50,'mbutton').setInteractive();
            gameState.muteb.on('pointerup', () => {
                gameState.phonecall.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.ldoorButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    gameState.doormove.play();
                    ldoorOpen = !(ldoorOpen);
                    if(ldoorOpen === false){
                        secondcons /= 2;
                        second -= 1;
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
                        secondcons /= 2;
                        powerlevel -= 1;
                    }
                    if(llightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        llightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(bonniePOS == 0){
                            if(ldoorOpen == true){
                                gameState.windowscare.play();
                            }
                            llightSprite = this.add.image(0,0,'bonniellighton').setOrigin(0,0).setScale(10).setDepth(1);
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
                        secondcons /= 2;
                        second += 1;
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
                        secondcons /= 2;
                        powerlevel -= 1;
                    }
                    if(rlightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        rlightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(chicaPOS == 0){
                            if(rdoorOpen == true){
                                gameState.windowscare.play();
                            }
                            rlightSprite = this.add.image(600,0,'chicallighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                        else {
                            rlightSprite = this.add.image(600,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
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
                        second -= 1;
                        powerlevel += 1;
                        console.log(powerlevel);
                        this.scene.bringToTop('camera');
                        this.scene.resume('camera');
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
                        secondcons *= 2;
                        powerlevel -= 1;
                        this.scene.bringToTop('Night2');
                        this.scene.pause('camera');
                        gameState.officenoise.resume();
                    }
                    gameState.checkPowerUsage(this);
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
                            gameState.win6AM(this);
                        }
                    }
                    gameState.AMtext.destroy();
                    gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
                },
                repeat: 5,
                startAt: 0,
                timeScale: 1,
            });
            gameState.secondcounter = this.time.addEvent({
                delay: 1000,
                callback: ()=>{
                    second = second - 1;
                    //console.log(secondcons);
                },
                loop: true,
                startAt: 0,
                timeScale: 1,
            });
            this.input.on('pointerup',()=>{
                gameState.checkPowerUsage(this);
            });
        }

        update(){
            gameState.bonnieMovement(this);
            gameState.chicaMovement(this);
            gameState.foxyMovement(this);
            if(power > 0){
               if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
               }
            }
            else {
                
            }
        }
    }










