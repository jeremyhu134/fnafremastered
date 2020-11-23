    var ldoorSprite;
    var llightSprite;
            
    var rdoorSprite;
    var rlightSprite;

    var power = 1;

    var AM = 12;

    var ldoorOpen = true;
    var rdoorOpen = true;

    var llightOn = false;
    var rlightOn = false;

    var cameraOn = false;

    var second = 10;
    var secondcons = 10;

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
                gameState.checkcam(this);
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
            if(freddycooldown <= 10){
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
            if(foxycooldown <= 10 && foxyPOS !== 1){
                if(camPOS == 4){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
            }
            
            if(gameState.openCAMS == false){
                gameState.checkcam(this);
                gameState.openCAMS = true;
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
            gameState.openCAMS = false
            gameState.powerDown = true;
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            gameState.foxyChecked = false;
            bonniecooldown = 15000;
            chicacooldown = Math.ceil(Math.random()*4000)+15000;
            freddycooldown = 1000000;
            foxycooldown = 1000000;
            this.scene.launch('camera');
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.bg = this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(gameState.loopSound);
            gameState.ambient1.play(gameState.loopSound2);
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
            gameState.addButtons(this);
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
            if(power > 0){
                gameState.bonnieMovement(this);
                gameState.chicaMovement(this);
                if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
                }
            }
            else {
                gameState.powerdead(this);
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
            gameState.openCAMS = false
            gameState.powerDown = true;
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            bonniePOS = 3;
            gameState.foxyChecked = false;
            bonniecooldown = Math.ceil(Math.random()*500)+3000;
            chicacooldown = Math.ceil(Math.random()*1500)+9000;
            freddycooldown = 1000000;
            foxycooldown = Math.ceil(Math.random()*3000)+13000;
            this.scene.launch('camera');
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.bg = this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(gameState.loopSound);
            gameState.ambient1.play(gameState.loopSound2);
            gameState.phonecall2.play();
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
                gameState.phonecall2.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.addButtons(this);
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
            if(power > 0){
                gameState.bonnieMovement(this);
                gameState.chicaMovement(this);
                gameState.foxyMovement(this);
                if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
                }
            }
            else {
                gameState.powerdead(this);
            }
        }
    }





class Night3 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night3' })
        }
        preload(){
            
        }
        create(){
            gameState.openCAMS = false
            gameState.powerDown = true;
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            gameState.foxyChecked = false;
            bonniecooldown = Math.ceil(Math.random()*500)+1500;
            chicacooldown = Math.ceil(Math.random()*1500)+2500;
            freddycooldown = 1000000;
            foxycooldown = Math.ceil(Math.random()*3000)+5000;
            freddycooldown = Math.ceil(Math.random()*3000)+20000;
            this.scene.launch('camera');
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.bg = this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(gameState.loopSound);
            gameState.ambient1.play(gameState.loopSound2);
            gameState.phonecall3.play();
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
                gameState.phonecall3.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.addButtons(this);
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
            if(power > 0){
                gameState.bonnieMovement(this);
                gameState.chicaMovement(this);
                gameState.foxyMovement(this);
                gameState.freddyLaugh(this);
                if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
                }
            }
            else {
                gameState.powerdead(this);
            }
        }
    }





class Night4 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night4' })
        }
        preload(){
            
        }
        create(){
            gameState.openCAMS = false
            gameState.powerDown = true;
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            gameState.foxyChecked = false;
            bonniecooldown = Math.ceil(Math.random()*500)+1300;
            chicacooldown = Math.ceil(Math.random()*1000)+1500;
            foxycooldown = Math.ceil(Math.random()*3000)+400;
            freddycooldown = Math.ceil(Math.random()*1000)+5000;
            this.scene.launch('camera');
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.bg = this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(gameState.loopSound);
            gameState.ambient1.play(gameState.loopSound2);
            gameState.phonecall4.play();
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
                gameState.phonecall4.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.addButtons(this);
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
            if(power > 0){
                gameState.bonnieMovement(this);
                gameState.chicaMovement(this);
                gameState.foxyMovement(this);
                gameState.freddyMovement(this);
                if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
                }
            }
            else {
                gameState.powerdead(this);
            }
        }
    }





class Night5 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night5' })
        }
        preload(){
            
        }
        create(){
            gameState.openCAMS = false
            gameState.powerDown = true;
            gameState.gusage = this.add.sprite(10000,10000,'gusage').setOrigin(0,0);
            gameState.gusage2 = this.add.sprite(10000,10000,'yusage').setOrigin(0,0);
            gameState.gusage3 = this.add.sprite(10000,10000,'rusage').setOrigin(0,0);
            gameState.foxyChecked = false;
            bonniecooldown = Math.ceil(Math.random()*500)+600;
            chicacooldown = Math.ceil(Math.random()*400)+600;
            foxycooldown = Math.ceil(Math.random()*1800)+100;
            freddycooldown = Math.ceil(Math.random()*1500)+500;
            this.scene.launch('camera');
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            gameState.bg = this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.officenoise.play(gameState.loopSound);
            gameState.ambient1.play(gameState.loopSound2);
            gameState.phonecall5.play();
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
                gameState.phonecall5.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.addButtons(this);
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
            if(power > 0){
                gameState.bonnieMovement(this);
                gameState.chicaMovement(this);
                gameState.foxyMovement(this);
                gameState.freddyMovement(this);
                if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
                }
            }
            else {
                gameState.powerdead(this);
            }
        }
    }