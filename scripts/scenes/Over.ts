module scenes {
    export class Over extends objects.Scene {
        private _background: objects.Background;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;

        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            createjs.Sound.play("soundGameOver");
            this._background = new objects.Background("gameBackground");
            this._gameOverLabel = new objects.Label({labelString: "Loser!", x: 320, y: 240, isCentered: true});
            this._restartButton = new objects.Button({imageString: "restartButton", x: 320, y: 380, isCentered: true});
            this.Main();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);
            this._restartButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
            super.Destroy();
        }


    }
}
