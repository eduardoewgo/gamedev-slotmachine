var scenes;
(function (scenes) {
    // Starting Screen
    class Start extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._playButton);
            this._playButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        Start() {
            this._playButton = new objects.Button({ imageString: "playButton", x: 320, y: 420, isCentered: true });
            this._background = new objects.Background("startBackground");
            createjs.Sound.play("intro");
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
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map