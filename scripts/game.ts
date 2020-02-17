(() => {
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;

    let currentScene: objects.Scene;
    let currentState: config.Scene;

    let assetManifest = [
        {id: "playButton", src: "./Assets/images/btn_play.png"},
        {id: "spinButton", src: "./Assets/images/btn_spin.png"},
        {id: "resetButton", src: "./Assets/images/btn_reset.png"},
        {id: "restartButton", src: "./Assets/images/btn_restart.png"},
        {id: "quitButton", src: "./Assets/images/btn_quit.png"},
        {id: "gameBackground", src: "./Assets/images/game_bg.png"},
        {id: "slotMachine", src: "./Assets/images/slot_machine.png"},

        {id: "banana", src: "./Assets/images/banana.png"},
        {id: "bar", src: "./Assets/images/bar.png"},
        {id: "cherry", src: "./Assets/images/cherry.png"},
        {id: "grapes", src: "./Assets/images/grapes.png"},
        {id: "lemon", src: "./Assets/images/lemon.png"},
        {id: "orange", src: "./Assets/images/orange.png"},
        {id: "seven", src: "./Assets/images/seven.png"},
        {id: "blank", src: "./Assets/images/blank.png"},

        {id: "soundSpin", src: "./Assets/sounds/spin.wav"},
        {id: "soundGameOver", src: "./Assets/sounds/game_over.wav"}
    ];


    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }

    function Start(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        managers.Game.playerBet = document.getElementsByTagName("input")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.currentState = config.Scene.START;
        Main();
    }

    function Update(): void {

        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
        currentScene.Update();

    }

    function Main(): void {
        if (currentScene != null) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        managers.Game.playerBet.style.display = "none";

        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start;
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play;
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over;
                break;
        }
        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();
