var scenes;
(function (scenes) {
    // Game over scene
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._restartButton);
            this.addChild(this._gameOverLabel);
            this._restartButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        Start() {
            this._restartButton = new objects.Button({ imageString: "restartButton", x: 320, y: 360, isCentered: true });
            this._background = new objects.Background("idiot");
            createjs.Sound.play("haha");
            this._gameOverLabel = new objects.Label({ labelString: "Loser!", x: 320, y: 240, isCentered: true });
            this.Main();
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