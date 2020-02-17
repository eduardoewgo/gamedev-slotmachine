module scenes {
    // Starting Screen
    export class Start extends objects.Scene {
        private _background: objects.Background;
        private _playButton: objects.Button;
        private _lblGameTitle: objects.Label;

        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            this._background = new objects.Background("gameBackground");
            this._playButton = new objects.Button({imageString: "playButton", x: 320, y: 420, isCentered: true});
            this._lblGameTitle = new objects.Label({
                labelString: "Millionaire Slot Machine",
                fontSize: "54px",
                x: 320,
                y: 240,
                isCentered: true
            });
            this.Main();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._playButton);
            this.addChild(this._lblGameTitle);
            this._playButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            })
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
