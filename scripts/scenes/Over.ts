module scenes {
    export class Over extends objects.Scene {
        private _background: objects.Background;
        private _gameOverLabel: objects.Label;

        constructor() {
            super();
            this.Start();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
        }

        public Start(): void {
            this._background = new objects.Background("gameBackground");
            this._gameOverLabel = new objects.Label({labelString: "Loser!", x: 320, y: 240, isCentered: true});
            this.Main();
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
