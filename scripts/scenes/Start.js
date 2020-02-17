var scenes;
(function (scenes) {
    // Starting Screen
    class Start extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            this._background = new objects.Background("gameBackground");
            this._playButton = new objects.Button({ imageString: "playButton", x: 320, y: 420, isCentered: true });
            this._lblGameTitle = new objects.Label({
                labelString: "Millionaire Slot Machine",
                fontSize: "54px",
                x: 320,
                y: 240,
                isCentered: true
            });
            this.Main();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._playButton);
            this.addChild(this._lblGameTitle);
            this._playButton.on("click", () => {
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
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map