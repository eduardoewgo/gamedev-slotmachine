module scenes {
    // Starting Screen
    export class Start extends objects.Scene {
        private _background: objects.Background;
        private _playButton: objects.Button;

        constructor() {
            super();
            this.Start();
        }

        public Main(): void {

            this.addChild(this._background);

            this.addChild(this._playButton);


            this._playButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            })
        }

        public Start(): void {
            this._playButton = new objects.Button({imageString: "playButton", x: 320, y: 420, isCentered: true});
            this._background = new objects.Background("startBackground");
            createjs.Sound.play("intro");
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
