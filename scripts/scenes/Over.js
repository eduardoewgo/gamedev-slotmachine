var scenes;
(function (scenes) {
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
        }
        Start() {
            this._background = new objects.Background("gameBackground");
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