"use strict";
(() => {
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let lblGameTitle;
    let btnPlay;
    let background;
    function Start() {
        console.log(`Game started! enjoy`);
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20); // mouseover/out event
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log(`Main started`);
        lblGameTitle = new objects.Label({
            labelString: 'Million Maker Slot Machine',
            fontSize: '25px',
            x: 320,
            y: 240,
            isCentered: true,
            fontColour: '#ffffff'
        });
        btnPlay = new objects.Button({
            imagePath: './assets/images/btn_play.png',
            x: 320,
            y: 400,
            isCentered: true
        });
        background = new createjs.Bitmap('./assets/images/game_bg.png');
        stage.addChild(background);
        stage.addChild(lblGameTitle);
        stage.addChild(btnPlay);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map