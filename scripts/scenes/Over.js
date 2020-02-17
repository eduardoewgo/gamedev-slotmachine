var scenes;
(function (scenes) {
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            createjs.Sound.play("soundGameOver");
            this._background = new objects.Background("gameBackground");
            this._gameOverLabel = new objects.Label({ labelString: "Loser!", x: 320, y: 240, isCentered: true });
            this._restartButton = new objects.Button({ imageString: "restartButton", x: 320, y: 380, isCentered: true });
            this.Main();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);
            this._restartButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
            super.Destroy();
        }
    }
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=Over.js.map